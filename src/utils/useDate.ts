const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedDate = `${day}-${month}-${year}`;

let formattedHours = hours;
let amPm = "am";
if (hours >= 12) {
  formattedHours = hours % 12;
  amPm = "pm";
}
if (formattedHours === 0) {
  formattedHours = 12;
}

const formattedMinutes = minutes.toString().padStart(2, "0");

const formattedResult = `${formattedDate} ${formattedHours}:${formattedMinutes}:${seconds} ${amPm}`;

export const getCurrentFormattedDate = () => {
  return formattedDate;
};

export const getCurrentFormattedTime = () => {
  return formattedResult;
};
