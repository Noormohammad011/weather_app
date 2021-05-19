import React, { useEffect, useState } from 'react'
import { fetchData } from './Api'
import './App.css'
import CitySelector from './Components/CitySelector'
import { Col, Container, Row } from 'react-bootstrap'
import WeatherList from './Components/WeatherList'

const App = () => {
  const [query, setQuery] = useState('')
  const [weatherData, setWeatherData] = useState([])
  

  useEffect(() => {
    const fetchApi = async () => {
      setWeatherData(await fetchData(query))
    }
    fetchApi()
  }, [query])
  console.log(weatherData)
  return (
    <>
      <Container className='App'>
        <CitySelector
          getQuery={(q) => {
            setQuery(q)
          }}
        />
      </Container>
      <Row>
        {weatherData &&
          weatherData?.map((w, i) => (
            <Col md={5} xl={2} key={i}>
              <WeatherList weathers={w} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default App
