export type Event = {
	type: string;
	value: number;
};

export type Criteria = {
	type: string;
	op: "lesser" | "greater";
	threshold: number;
};

export type Alert = {
	type: string;
	value: number;
};

/* 

Given an input of events and criteria, createAlertsFromEvents should 
return an array of alerts for events that match the given criteria. 
Example inputs may look like the following:

events = [
    {type: 'purchase', value: 8},
    {type: 'refund', value: 2},
    {type: 'purchase', value: 13},
    {type: 'refund', value: 5},
    {type: 'refund', value: 11},
    {type: 'purchase', value: 3},
]

criteria = {
    type: 'refund',
    op: 'lesser',
    threshold: 7,
}

These inputs should provide the following output:

[
    {type: 'refund', value: 2}
    {type: 'refund', value: 5}
]

Write a function that gives us these alerts.

*/
const criteria: Criteria = {
	type: "refund",
	op: "lesser",
	threshold: 7,
};

const events: Event[] = [
	{ type: "purchase", value: 8 },
	{ type: "refund", value: 2 },
	{ type: "purchase", value: 13 },
	{ type: "refund", value: 5 },
	{ type: "refund", value: 11 },
	{ type: "purchase", value: 3 },
];

export function createAlertsFromEvents(events: Event[], criteria: Criteria): Alert[] {
	const { type, op, threshold } = criteria;
	const filteredEvents = events.filter((event) => {
		if (type !== event.type) {
			return false;
		}

		if (op === "lesser") {
			return threshold > event.value;
		}

		if (op === "greater") {
			return threshold < event.value;
		}

		return false;
	});

	return filteredEvents;
}

console.log(createAlertsFromEvents(events, criteria));
