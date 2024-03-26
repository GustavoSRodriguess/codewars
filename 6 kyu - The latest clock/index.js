// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Examples:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
// Notes
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.
function latestClock(a, b, c, d) {
    const arr = [a, b, c, d];
    let maxTime = -1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;

            const hours = arr[i] * 10 + arr[j];
            if (hours >= 0 && hours <= 23) {
                for (let k = 0; k < arr.length; k++) {
                    if (k === i || k === j) continue;

                    for (let l = 0; l < arr.length; l++) {
                        if (l === i || l === j || l === k) continue;

                        const minutes = arr[k] * 10 + arr[l];
                        if (minutes >= 0 && minutes <= 59) {
                            const time = hours * 100 + minutes;
                            if (time > maxTime) {
                                maxTime = time;
                            }
                        }
                    }
                }
            }
        }
    }
    const formattedTime = maxTime.toString().padStart(4, '0');
    const hours = formattedTime.slice(0, 2);
    const minutes = formattedTime.slice(2, 4);

    return `${hours}:${minutes}`;
}