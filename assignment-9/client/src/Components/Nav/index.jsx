import "./app.css";

const navLinks = [
  {
    path: "/",
    value: "Home",
  },
  {
    path: "/jobs",
    value: "Jobs",
  },
  {
    path: "/aboutus",
    value: "About us",
  },
  {
    path: "/contact",
    value: "Contact",
  },
  {
    path: "/login",
    value: "Login",
  },
];

export default function Nav() {
  return (
    <nav>
      <div className="left-btn-grp">
        <h1 className="font-title-primary">
          ADK<span className="font-title-secondary">Enterprises</span>
        </h1>
      </div>
      <div className="right-btn-grp">
        {navLinks.map(({ path, value, requireAuth }) => {
          return <a href={path}>{value}</a>;
        })}
      </div>
    </nav>
  );
}
