import "./app.css";

export default function Nav() {
  return (
    <nav>
      <div className="left-btn-grp">
        <h1 className="font-title-primary">
          Open<span className="font-title-secondary">Weather</span>
        </h1>
      </div>
      <div className="right-btn-grp">
        {/* {navLinks.map(({ path, value, requireAuth }) => {
          return <a href={path}>{value}</a>;
        })} */}
      </div>
    </nav>
  );
}
