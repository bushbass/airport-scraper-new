export const convertTime12to24 = time12h => {
  let [hours, minutes] = time12h.split(':');

  const time = minutes.slice(0, 2);
  const modifier = minutes.slice(-2);

  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};
