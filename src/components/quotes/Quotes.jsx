import { useState } from "react";
import "./quotes.css";
import useFetch from "../useFetch";

const Quotes = () => {
  // const [quoteId, setQuoteId] = useState(1);
  const { title, body, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  // const length = 30;
  // const handleClick = () => {
  //   setQuoteId(
  //     quoteId > length ? setQuoteId(quoteId + 1) : setQuoteId(quoteId)
  //   );
  // };

  return (
    <div className="more_project">
      <button className="show_more_btn">Show more</button>
      {loading ? (
        <p style={{ marginTop: "20px" }}>Loading...</p>
      ) : (
        <div className="quotes_container">
          <div className="wrapper_quotes">
            <div className="quotes_item">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
