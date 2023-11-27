import DayCard from "../Components/DayCard";
import { getDayOfWeek } from "../shared/constants";
import "./app.css";
import { useState, useEffect } from "react";
import { API_KEYS } from "../shared/env";

const NEXT_HOW_MANY_DAYS = 5;

export default function Landing() {
  const [coords, setCoords] = useState({ lat: null, long: null, cityName: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        const { latitude: lat, longitude: long } = res.coords;
        console.log(lat);
        setCoords((prev) => {
          return { lat, long };
        });
      },
      (err) => console.log(err)
    );
  }, []);

  function getNextSevenDays() {
    const nextSevenDays = [];
    let date = new Date();

    for (let i = 0; i < NEXT_HOW_MANY_DAYS; ++i) {
      const currentDate = new Date(date);

      currentDate.setDate(date.getDate() + i);

      nextSevenDays.push(currentDate);
    }
    return nextSevenDays;
  }

  useEffect(() => {
    if (coords.lat == null && coords.long == null) return;
    const openWeatherUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEYS.OPEN_WEATHER}&mode=json`;
    console.log(openWeatherUrl);
    fetch(openWeatherUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        setCoords((prev) => {
          return {
            ...prev,
            cityName: data[0]?.name + ", " + data[0]?.state,
          };
        });
      })
      .catch((e) => console.error(e));
  }, [coords.lat, coords.long]);

  const week = getNextSevenDays();

  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function formatDateWithOrdinalSuffix(date) {
    const day = date.getDate();
    const suffix = getOrdinalSuffix(day);

    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate.replace(/\d+/, day + suffix);
  }

  return (
    <section className="main-section">
      <h2 style={{ textAlign: "center" }} className="font-heading">
        Forecast for latitude: {coords?.lat}, longitude: {coords?.long} -{" "}
        {coords?.cityName}
      </h2>
      <div className="container">
        {week.map((date) => {
          return (
            <DayCard
              key={date.toString()}
              date={formatDateWithOrdinalSuffix(date)}
              customStyles={{}}
              day={getDayOfWeek(date.getDay())}
              dateObj={new Date(date)}
              isFirst={date.getDay() === new Date().getDay()}
            />
          );
        })}
      </div>
    </section>
  );
}
