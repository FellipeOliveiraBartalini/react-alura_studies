export function timeToSeconds(time: string) {
    const [hour = 0, minute = 0, seconds = 0] = time.split(':');

    const hours = Number(hour) * 3600;
    const minutes = Number(hour) * 60;

    return hours + minutes + Number(seconds);
}
