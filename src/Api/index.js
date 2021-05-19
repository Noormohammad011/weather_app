import axios from 'axios'

export const fetchData = async (city) => {

  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
    const modiFiedData = data?.list.map((x) => ({
      dt: x.dt * 1000,
      min: x.main.temp_min,
      max: x.main.temp_max,
      main: x.weather[0].main,
      icon: x.weather[0].icon,
    }))
    
    return modiFiedData
  } catch (error) {
    console.log(error)
  }
}
