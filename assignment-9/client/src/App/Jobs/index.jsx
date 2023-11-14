import { getUserSession } from "../../utils/cookies";
import Card from "../../Components/Card";
import "./app.css";

const jobs = [
  {
    title: "Software Development Engineer",
    company: "Amazon",
    payrange: "$70k-$90k",
    location: "San Francisco, CA",
  },
  {
    title: "Frontend Developer",
    company: "Google",
    payrange: "$80k-$100k",
    location: "Mountain View, CA",
  },
  {
    title: "Data Scientist",
    company: "Microsoft",
    payrange: "$75k-$95k",
    location: "Redmond, WA",
  },
  {
    title: "UX/UI Designer",
    company: "Facebook",
    payrange: "$85k-$110k",
    location: "Menlo Park, CA",
  },
  {
    title: "DevOps Engineer",
    company: "Netflix",
    payrange: "$90k-$120k",
    location: "Los Gatos, CA",
  },
  {
    title: "Product Manager",
    company: "Apple",
    payrange: "$95k-$125k",
    location: "Cupertino, CA",
  },
];

export default function Jobs() {
  const user = getUserSession();

  if (user === null) {
    return (
      <div className="App">
        This is the Jobs page, to view please login first
      </div>
    );
  }
  return (
    <div className="App">
      <h3>Hi {user.fullName}! Browse jobs here.</h3>
      {jobs.map(({ title, company, payrange, location }) => {
        return (
          <Card
            title={title}
            customStyles={{ width: "30%", margin: "2rem auto 0 auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 16px",
                alignItems: "center",
              }}
            >
              <p>{company}</p>
              <p>{location}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 16px",
                alignItems: "center",
              }}
            >
              <p>{payrange}</p>
              <button className="apply-btn">Apply</button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
