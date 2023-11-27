import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./app.css";
import { days, getDayOfWeek } from "../shared/constants";
import { API_KEYS } from "../shared/env";
import WeatherCard from "../Components/WeatherCard";

export default function Forecast() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { day: urlDay, datestring } = useParams();
  const [coords, setCoords] = useState({ lat: null, long: null });
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        const { latitude: lat, longitude: long } = res.coords;
        setCoords((prev) => {
          return { lat, long };
        });
      },
      (err) => console.log(err)
    );
  }, []);

  useEffect(() => {
    setLoading(() => true);
    if (coords.lat == null && coords.long == null) return;
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEYS.OPEN_WEATHER}&mode=json`;
    fetch(openWeatherUrl, {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeatherData((prev) => {
          const list = data?.list?.filter(
            (l) =>
              getDayOfWeek(new Date(l?.dt * 1000).getDay()).toLowerCase() ===
              urlDay.toLowerCase()
          );
          console.log(list);
          const tempList = list.map((e) => e.main.temp);
          return {
            ...data,
            list,
            temp_max: Math.max(...tempList),
            temp_min: Math.min(...tempList),
          };
        });
        setLoading(() => false);
      })
      .catch((e) => console.error(e));
  }, [coords.lat, coords.long]);
  console.log(">>>>", weatherData);
  if (!days.includes(urlDay))
    return (
      <section className="main-section">
        <div className="container">
          Please make sure the day is a valid day of the week
        </div>
      </section>
    );

  function handleBack() {
    navigate("/");
  }

  function kelvinToCelsius(kelvin) {
    return Math.round((kelvin - 273.15) * 100) / 100;
    // return kelvin - 273.15;
  }

  return (
    <section className="main-section">
      <button onClick={() => handleBack()}>Back</button>
      <h2 className="font-heading" style={{ textAlign: "center" }}>
        {urlDay.toUpperCase()} - {new Date(datestring).toLocaleDateString()}
      </h2>
      <h4 className="font-heading" style={{ textAlign: "center" }}>
        Maximum temperature: {kelvinToCelsius(weatherData?.temp_max)}&deg;,
        minimum temperature: {kelvinToCelsius(weatherData?.temp_min)}&deg;
      </h4>
      <div className="container">
        {weatherData?.list?.map((timeWiseData, index) => {
          const date = new Date(timeWiseData.dt * 1000);

          return (
            <WeatherCard key={timeWiseData.dt.toString()}>
              <div className="flex-space-between">
                <h2>
                  {date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    hour12: true,
                  })}
                </h2>
                <img
                  src={`https://openweathermap.org/img/wn/${timeWiseData?.weather[0]?.icon}.png`}
                  width={50}
                  height={50}
                  alt="Weather"
                />
              </div>
              <p>
                Temp max:{" "}
                <span>
                  {kelvinToCelsius(timeWiseData?.main?.temp_max)} &deg;
                </span>
              </p>
              <p>
                Temp min:{" "}
                <span>
                  {kelvinToCelsius(timeWiseData?.main?.temp_min)} &deg;
                </span>
              </p>
              <p>
                Feels like:{" "}
                <span>
                  {kelvinToCelsius(timeWiseData?.main?.feels_like)} &deg;
                </span>
              </p>
              <p>
                Wind speed: <span>{timeWiseData?.wind?.speed} m/s</span>
              </p>
            </WeatherCard>
          );
        })}
      </div>
    </section>
  );
}
