const formatDate = (date: Date): string => {
  let day: string = String(date.getDate());
  let month: string = String(date.getMonth());
  const year: number = date.getFullYear();

  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  const formatter: string = `${day}-${month}-${year}`;
  return formatter;
};

export default formatDate;
