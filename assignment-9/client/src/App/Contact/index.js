import { getUserSession } from "../../utils/cookies";
import Card from "../../Components/Card";

export default function Contact() {
  const user = getUserSession();

  if (user === null) {
    return (
      <div className="App">
        This is the Contact page, to view, please login first
      </div>
    );
  }
  return (
    <div className="App">
      <h3>Hi there, {user.fullName}</h3>
      <p>
        If you find any need for improvement in our work, please feel free to
        mail us at<a href="mailto:help@mail.com">help@mail.com</a>
      </p>

      <Card
        title="Submit your feedback"
        customStyles={{ margin: "3rem auto", width: "30%" }}
      >
        <form>
          <div className="field-container">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="field-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows={10} id="message" />
          </div>
          <input
            type="submit"
            className="form-submit-btn"
            value={"Send feedback"}
          />
        </form>
      </Card>
    </div>
  );
}
