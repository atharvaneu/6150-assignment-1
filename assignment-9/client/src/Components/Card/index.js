import "./app.css";

export default function Card({ children, title, customStyles, className }) {
  return (
    <div className={`card ${className}`} style={{ ...customStyles }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {children}
    </div>
  );
}
