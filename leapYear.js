function leapYearCount(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

leapYearCount(2000);
leapYearCount(2004);
leapYearCount(2022);
leapYearCount(2023);
