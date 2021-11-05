const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const shortDays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date = {
  getDate: unixtime => {
    let dt = new Date(unixtime * 1000)
    let currentDate = dt.getDate()

    return currentDate
  },
  getDay: unixtime => {
    let dt = new Date(unixtime * 1000)
    let currentDay = days[dt.getDay()]

    return currentDay
  },
  getShortDay: unixtime => {
    let dt = new Date(unixtime * 1000)
    let currentDay = shortDays[dt.getDay()]

    return currentDay
  },
  getMonth: unixtime => {
    let dt = new Date(unixtime * 1000)
    let currentMonth = months[dt.getMonth()]

    return currentMonth
  },
  getYear: unixtime => {
    let dt = new Date(unixtime * 1000)
    let currentYear = dt.getFullYear()

    return currentYear
  }

}

export default date
