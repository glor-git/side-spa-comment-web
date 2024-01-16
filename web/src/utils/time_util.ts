export function convertTimestampToDateString(timestamp: string) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  return `${year}-${month}-${day} ${hour}:${minute}`;
}