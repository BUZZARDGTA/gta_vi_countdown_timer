window.onload = async function () {
  const countdownTimer = document.getElementById("airing-date-countdown-timer");

  // Formats the Unix timestamp for the GTA 6 trailer.
  let unixTimestamp = new Date("2023-12-05").getTime() / 1000;

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

  // Get the current date and time
  const currentDate = new Date().toUTCString();

  // Calculate the time difference in milliseconds
  const timeDifference = targetDate - currentDate;

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format the result
  const formattedCountdown = `Trailer Release: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  return formattedCountdown;
}
