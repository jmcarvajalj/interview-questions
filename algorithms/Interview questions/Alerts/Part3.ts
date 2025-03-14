export type ComboEvent = {
	type: "combo";
	children: Event[];
};
export type SingleEvent = {
	type: string;
	date: string;
	value: number;
};

export type Event = ComboEvent | SingleEvent;

// Unchanged
export type Criteria = {
	type: string;
	op: "lesser" | "greater";
	threshold: number;
};

export type Alert = {
	type: string;
	date: string;
	totalValue: number;
	count: number;
};

/* 
  Due to changes upstream, events can now be grouped. While this 
  doesn't effect our final output, it does effect inputs. 
  
  createAlertsFromEvents should still filter out by type, aggregate 
  by date, but also handle infinitely nested combo events.
  
  Example inputs may look like the following:
  
  events = [
    { type: "purchase", value: 8, date: "2023-04-01" },
    { type: "refund", value: 2, date: "2023-04-06" },
    { type: "purchase", value: 13, date: "2023-04-02" },
    { type: "refund", value: 5, date: "2023-04-06" },
    { type: "refund", value: 11, date: "2023-04-06" },
    { type: "refund", value: 4, date: "2023-04-04" },
    { type: "purchase", value: 3, date: "2023-04-09" },
    { type: "refund", value: 1, date: "2023-04-04" },
    {
      type: "combo",
      children: [
        { type: "refund", value: 7, date: "2023-04-07" },
        { type: "refund", value: 6, date: "2023-04-07" },
        { type: "refund", value: 1, date: "2023-04-04" },
      ],
    },
    {
      type: "combo",
      children: [
        { type: "refund", value: 4, date: "2023-04-06" },
        {
          type: "combo",
          children: [
            { type: "refund", value: 3, date: "2023-04-06" }
          ],
        },
      ],
    },
  ];
  
  criteria = {
    type: 'refund',
    op: 'lesser',
    threshold: 7,
  }
  
  These inputs should provide the following output:
  
  [
    { type: "refund", totalValue: 14, count: 4, date: "2023-04-06" },
    { type: "refund", totalValue: 6, count: 3, date: "2023-04-04" },
    { type: "refund", totalValue: 13, count: 2, date: "2023-04-07" },
  ];
  
  Write a function that gives us these alerts.
  
  */

const events: Event[] = [
	{ type: "purchase", value: 8, date: "2023-04-01" },
	{ type: "refund", value: 2, date: "2023-04-06" },
	{ type: "purchase", value: 13, date: "2023-04-02" },
	{ type: "refund", value: 5, date: "2023-04-06" },
	{ type: "refund", value: 11, date: "2023-04-06" },
	{ type: "refund", value: 4, date: "2023-04-04" },
	{ type: "purchase", value: 3, date: "2023-04-09" },
	{ type: "refund", value: 1, date: "2023-04-04" },
	{
		type: "combo",
		children: [
			{ type: "refund", value: 7, date: "2023-04-07" },
			{ type: "refund", value: 6, date: "2023-04-07" },
			{ type: "refund", value: 1, date: "2023-04-04" },
		],
	},
	{
		type: "combo",
		children: [
			{ type: "refund", value: 4, date: "2023-04-06" },
			{
				type: "combo",
				children: [{ type: "refund", value: 3, date: "2023-04-06" }],
			},
		],
	},
];

const criteria: Criteria = {
	type: "refund",
	op: "lesser",
	threshold: 7,
};

export function createAlertsFromEvents(events: Event[], criteria: Criteria): Alert[] {
	const { type, threshold, op } = criteria;

	function flattenEvents(events: Event[]): SingleEvent[] {
		let result: SingleEvent[] = [];

		for (const event of events) {
			if ("children" in event) {
				result.push(...flattenEvents(event.children));
			} else {
				result.push(event);
			}
		}

		return result;
	}

	const flatEvents = flattenEvents(events);

	const filteredEvents = flatEvents.filter((event) => {
		if (event.type !== type) return false;
		if (op === "lesser") return event.value < threshold;
		if (op === "greater") return event.value > threshold;
		return false;
	});

	// Group by date
	const groupedEvents = filteredEvents.reduce((acc, event) => {
		if (!acc[event.date]) {
			acc[event.date] = { type: event.type, date: event.date, totalValue: 0, count: 0 };
		}

		acc[event.date].totalValue += event.value;
		acc[event.date].count += 1;

		return acc;
	}, {} as Record<string, Alert>);

	return Object.values(groupedEvents);
}

console.log(createAlertsFromEvents(events, criteria));
