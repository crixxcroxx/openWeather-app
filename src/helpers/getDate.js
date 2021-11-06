const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getDateSuffix(d) {
  let sDate = ""
  //get only ones digit
  const ones = d % 10

  switch(ones) {
    case 1:
      sDate = `${d}st`
      break;
    case 2:
      sDate = `${d}nd`
      break;
    case 3:
      sDate = `${d}rd`
      break;
    default:
      sDate = `${d}th`
      break;
  }

  return sDate
}

const date = {
  getDate: unixtime => {
    const dt = new Date(unixtime * 1000)
    const currentDate = dt.getDate()
    const suffixedDate = getDateSuffix(currentDate)

    return suffixedDate
  },
  getDay: unixtime => {
    const dt = new Date(unixtime * 1000)
    const currentDay = days[dt.getDay()]

    return currentDay
  },
  getShortDay: unixtime => {
    const dt = new Date(unixtime * 1000)
    const currentDay = shortDays[dt.getDay()]

    return currentDay
  },
  getMonth: unixtime => {
    const dt = new Date(unixtime * 1000)
    const currentMonth = months[dt.getMonth()]

    return currentMonth
  }

}

export default date
