const formatDate = (date: Date): string => {
  const dateObj = new Date(date);
  let day: string = String(dateObj.getDate());
  let month: string = String(dateObj.getMonth() + 1);
  const year: number = dateObj.getFullYear();

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
