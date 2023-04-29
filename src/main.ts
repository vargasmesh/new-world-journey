interface CountdownElements {
  days: HTMLElement | null;
  hours: HTMLElement | null;
  minutes: HTMLElement | null;
  seconds: HTMLElement | null;
}

const countdownElements: CountdownElements = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const now: number = new Date().getTime();
const targetDate: number = getRandomTargetDate(now, 7, 21);

function updateCountdown() {
  const now = new Date().getTime();
  const remainingTime = targetDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  if (countdownElements.days)
    countdownElements.days.innerHTML = days.toString();
  if (countdownElements.hours)
    countdownElements.hours.innerHTML = hours.toString().padStart(2, "0");
  if (countdownElements.minutes)
    countdownElements.minutes.innerHTML = minutes.toString().padStart(2, "0");
  if (countdownElements.seconds)
    countdownElements.seconds.innerHTML = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTargetDate(
  now: number,
  minDays: number,
  maxDays: number
): number {
  const days: number = getRandomIntInclusive(minDays, maxDays);
  const hours: number = getRandomIntInclusive(0, 23);
  const minutes: number = getRandomIntInclusive(0, 59);
  const seconds: number = getRandomIntInclusive(0, 59);
  const targetDate: Date = new Date(now + days * 24 * 60 * 60 * 1000);
  targetDate.setHours(hours, minutes, seconds, 0);
  return targetDate.getTime();
}
