import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { title, info } = props;

  const [showInfo, setShowInfo] = useState(false);

  const toggleHandler = () => setShowInfo(!showInfo);

  return (
    <React.Fragment>
      <article>
        <header>
          <h4>{title}</h4>
          <button onClick={toggleHandler}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </React.Fragment>
  );
};

export default Question;
