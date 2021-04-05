import React from "react";

const FeedbackPage = ({ feedbackItems }) => {
  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = () => {
    //dont use fetch for internal routes when it points at your own url inside project
    // so we would just export our functions from the api
    // and basically construct the response - no internal http requests.
    // both this and the apis are running on the same server
};

export default FeedbackPage;
