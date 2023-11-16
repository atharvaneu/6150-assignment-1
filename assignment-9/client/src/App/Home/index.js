import { getUserSession } from "../../utils/cookies";
import Card from "../../Components/Card";
import "./app.css";

const stats = [
  {
    product: "Cars",
    profit: "$40,000",
    salesMargin: "78%",
  },
  {
    product: "Finances",
    profit: "$65,000",
    salesMargin: "89%",
  },
  {
    product: "Electronics",
    profit: "$55,000",
    salesMargin: "82%",
  },
  {
    product: "Clothing",
    profit: "$30,000",
    salesMargin: "65%",
  },
  {
    product: "Home Appliances",
    profit: "$48,000",
    salesMargin: "75%",
  },
  {
    product: "Health & Beauty",
    profit: "$38,000",
    salesMargin: "70%",
  },
];

export default function Home() {
  const user = getUserSession();

  if (user === null) {
    return (
      <div className="App">
        This is the Home page, to view please login first
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Welcome, {user.fullName}! View your business statistics here</h2>
      {stats.map((e) => (
        <Card
          title={e.product}
          customStyles={{
            margin: "10px auto",
            width: "20%",
            backgroundColor: "#067D00",
            color: "white",
            cursor: "pointer",
          }}
          className="hover-and-scale"
        >
          <p>{e.profit} Profit</p>
          <p>{e.salesMargin} Sales Margin</p>
        </Card>
      ))}
    </div>
  );
}
