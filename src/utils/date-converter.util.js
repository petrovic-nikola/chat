export const convertTimeStampToTime = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const hours = date.getUTCHours();

  const minutes = date.getMinutes();
  const formatedHours =
    hours === 12 ? 12 : hours % 12 < 10 ? `0${hours % 12}` : `${hours % 12}`;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const aa = hours < 12 ? "AM" : "PM";
  const formatedValue = `${formatedHours}:${formatedMinutes} ${aa}`;

  return formatedValue;
};

export const convertTimeStampToDateWithSlash = (timeStamp) => {
  if (timeStamp) {
    const date = new Date(timeStamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = `${date.getFullYear()}`;

    const formatedDay = day < 10 ? `0${day}` : `${day}`;
    const formatedMonth = month < 10 ? `0${month}` : `${month}`;

    return `${formatedMonth}/${formatedDay}/${year}`;
  }

  return undefined;
};
