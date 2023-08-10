function convertSeconds(seconds) {
    const SECONDS_IN_MINUTE = 60;
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;
    const DAYS_IN_YEAR = 365;
    const DAYS_IN_MONTH = 30;

    const years = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;

    const months = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH;

    const weeks = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * 7));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * 7;

    const days = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

    const hours = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds %= SECONDS_IN_MINUTE;

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
}

const totalSeconds = 1234567890;
const timeBreakdown = convertSeconds(totalSeconds);

console.log(timeBreakdown);
