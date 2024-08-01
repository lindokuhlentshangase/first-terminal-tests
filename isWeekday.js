export default function isWeekday(day) {
    const weekendDays = ['Saturday', 'Sunday'];
    return !weekendDays.includes(day);
  }
  
  console.log(isWeekday('Sunday'));