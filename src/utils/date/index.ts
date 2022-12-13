import { FormatDateProps } from "./interfaces";

export function formatDate(userName: string): FormatDateProps {
  const date = new Date();
  const [formatDate, formatHours] = date.toLocaleString().split(" ");
  console.log(date.toLocaleString());
  return {} as FormatDateProps;
}

function showGreetings(hour: number): string {
  if (hour > 0 && hour <= 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Aftermoon";
  } else {
    return "Good Evening";
  }
}
