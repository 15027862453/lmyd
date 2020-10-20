// 标准时间转换
export function msToDate(time) {
  let datetime = new Date(time);
  let year = datetime.getFullYear();
  let month = datetime.getMonth();
  let date = datetime.getDate();
  let hour = datetime.getHours();
  let minute = datetime.getMinutes();
  let second = datetime.getSeconds();
  let result1 =
    year +
    '-' +
    (month + 1 >= 10 ? month + 1 : '0' + (month + 1)) +
    '-' +
    (date + 1 < 10 ? '0' + date : date) +
    ' ' +
    (hour + 1 < 10 ? '0' + hour : hour) +
    ':' +
    (minute + 1 < 10 ? '0' + minute : minute) +
    ':' +
    (second + 1 < 10 ? '0' + second : second);

  let result2 =
    year +
    '-' +
    (month + 1 >= 10 ? month + 1 : '0' + (month + 1)) +
    '-' +
    (date + 1 < 10 ? '0' + date : date);
  let result = {
    hasTime: result1, // ---> 2017-09-19 08:00:00
    withoutTime: result2 // ---> 2017-09-19
  };
  return result;
}