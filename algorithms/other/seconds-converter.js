function convertSecondsToTime(seconds) {
    // Constants for time conversions
    const SECONDS_IN_MINUTE = 60;
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;
    const DAYS_IN_YEAR = 365;
    const DAYS_IN_MONTH = 30;

    // Calculate years, considering 365 days in a year
    const years = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;

    // Calculate months, considering 30 days in a month
    const months = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH;

    // Calculate weeks, considering 7 days in a week
    const weeks = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * 7));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * 7;

    // Calculate days, considering 24 hours in a day
    const days = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

    // Calculate hours, considering 60 minutes in an hour
    const hours = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR));
    seconds %= SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

    // Calculate minutes, considering 60 seconds in a minute
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds %= SECONDS_IN_MINUTE;

    // The remaining seconds after all conversions
    const remainingSeconds = seconds;

    // Create an object to store the time breakdown
    const timeBreakdown = {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds: remainingSeconds
    };

    return timeBreakdown;
}

// Example usage
const totalSeconds = 1234567890;
const timeBreakdown = convertSecondsToTime(totalSeconds);

console.log(timeBreakdown);
