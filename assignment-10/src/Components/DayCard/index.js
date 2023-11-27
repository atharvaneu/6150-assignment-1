import { useNavigate } from "react-router-dom";
import "./app.css";

export default function DayCard({
  day,
  date,
  dateObj,
  customStyles,
  className,
  isFirst,
}) {
  const navigate = useNavigate();
  console.log(day);
  function handleOnClick() {
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dayInMonth = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const formattedDate = `${month}-${dayInMonth}-${year}`;
    navigate(`/weather/${day}/${formattedDate}`);
  }
  return (
    <div
      className={`day-card ${className}`}
      style={{
        ...customStyles,
        backgroundColor: isFirst ? "#E88500" : customStyles.backgroundColor,
      }}
      onClick={() => handleOnClick()}
    >
      <h2 style={{ textAlign: "center" }}>{day}</h2>
      <h4 style={{ textAlign: "center" }}>{date}</h4>
    </div>
  );
}
