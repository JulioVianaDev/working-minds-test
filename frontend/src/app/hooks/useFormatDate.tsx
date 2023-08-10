export function useFormatDate(date1:any, date2:any){
  /*
  * calcDate() : Calculates the difference between two dates
  * @date1 : "First Date in the format MM-DD-YYYY"
  * @date2 : "Second Date in the format MM-DD-YYYY"
  * return : Array
  */

  //new date instance
  const dt_date1 = new Date(date1);
  const dt_date2 = new Date(date2);

  //Get the Timestamp
  const date1_time_stamp = dt_date1.getTime();
  const date2_time_stamp = dt_date2.getTime();

  let calc;

  //Check which timestamp is greater
  if (date1_time_stamp > date2_time_stamp) {
      calc = new Date(date1_time_stamp - date2_time_stamp);
  } else {
      calc = new Date(date2_time_stamp - date1_time_stamp);
  }
  //Retrieve the date, month and year
  const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
  //Convert to an array and store
  const calcFormat:any = calcFormatTmp.split("-");
  //Subtract each member of our array from the default date
  const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]) - 1);
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

  //Set up custom text
  const yrsTxt = ["year", "years"];
  const mnthsTxt = ["month", "months"];
  const daysTxt = ["day", "days"];
  return days_passed
}