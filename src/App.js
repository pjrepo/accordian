import React from "react";
import data from "./Data";
import Question from "./Question";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <h3>Q&A about Login</h3>
        <section>
          {data.map((question) => {
            const { title, info } = question;
            return <Question key={question.id} title={title} info={info} />;
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
