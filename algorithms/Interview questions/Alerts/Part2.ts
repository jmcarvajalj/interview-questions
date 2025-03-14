export type Event = {
	type: string;
	date: string;
	value: number;
};

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

Product determined we need a way to aggregate alerts by 
type and date. createAlertsFromEvents should still filter 
out by type, but should also aggregate the results into 
totalValue and keep count of how many events are associated 
with the alert.

Example inputs may look like the following:

events = [
{type: 'purchase', value: 8, date: "2023-04-01"},
{type: 'refund', value: 2, date: "2023-04-06"},
{type: 'purchase', value: 13, date: "2023-04-02"},
{type: 'refund', value: 5, date: "2023-04-06"},
{type: 'refund', value: 11, date: "2023-04-06"},
{type: 'refund', value: 4, date: "2023-04-04"},
{type: 'purchase', value: 3, date: "2023-04-09"},
{type: 'refund', value: 1, date: "2023-04-04"},
]

criteria = {
type: 'refund',
op: 'lesser',
threshold: 7,
}

These inputs should provide the following output:

[
{type: 'refund', totalValue: 7, count: 2, date: "2023-04-06"}
{type: 'refund', totalValue: 5, count: 2, date: "2023-04-04"}
]

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
];

const criteria: Criteria = {
	type: "refund",
	op: "lesser",
	threshold: 7,
};

export function createAlertsFromEvents(events: Event[], criteria: Criteria) {
	const { type, threshold, op } = criteria;

	const filteredEvents = events.filter((event) => {
		if (event.type !== type) {
			return false;
		}

		if (op === "lesser") {
			return event.value < threshold;
		}

		if (op === "greater") {
			return event.value > threshold;
		}

		return false;
	});

	const groupedEvents = filteredEvents.reduce((acc, event) => {
        if (!acc[event.date]) {
            acc[event.date] = {
                type: event.type,
                date: event.date,
                totalValue: 0,
                count: 0
            };
        }
    
        acc[event.date].totalValue += event.value;
        acc[event.date].count += 1;
    
        return acc;
    }, {});

    const result = Object.values(groupedEvents);
    
	return result;
}

console.log(createAlertsFromEvents(events, criteria))