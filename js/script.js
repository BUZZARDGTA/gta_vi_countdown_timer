window.onload = async function () {
  const countdownTimer = document.getElementById("airing-date-countdown-timer");

  // Formats the Unix timestamp for the GTA 6 trailer.
  const unixTimestamp = new Date("2023-12-05T09:00:00").getTime() / 1000;

  updateCountdown();

  // Set up an interval to update the countdown every second
  setInterval(updateCountdown, 1000);

  /**
   * Function to update the countdown timer
   */
  function updateCountdown() {
    const airingDate = formatCountdown(unixTimestamp);
    countdownTimer.textContent = airingDate;
  }
};

/**
 * Formats a countdown based on a Unix timestamp.
 *
 * @param {number} unixTimestamp - An Unix timestamp.
 *
 * @returns The formatted countdown, as a string.
 */
function formatCountdown(unixTimestamp) {
  // Create a Date object using the Unix timestamp (multiply by 1000 to convert to milliseconds)
  const targetDate = new Date(unixTimestamp * 1000);

  // Get current date/time
  const now = new Date();

  // Options for formatting the date/time
  const options = {
    timeZone: "America/New_York", // Set the time zone to Eastern Time
    hour12: false, // Set to false if you want 24-hour time format
    weekday: "long", // Display the full name of the day
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // Format the date/time in Eastern Time
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const etTimeStr = formatter.format(now);

  // Create a new Date object from the formatted string
  const etTime = new Date(etTimeStr);

  // Calculate the time difference in milliseconds
  const timeDifference = targetDate - etTime;

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format the result
  const formattedCountdown = `Trailer Release: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  return formattedCountdown;
}
