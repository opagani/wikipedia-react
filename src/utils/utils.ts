export function getDateYesterday() {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday;
}
