import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useRef} from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;
    

    // {email: "", text: ""}
    const reqBody = {email: email, text: feedback};


    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}
