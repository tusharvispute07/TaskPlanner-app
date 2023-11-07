import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchRandomQuote() {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        const data = response.data;

        if (data.content.length > 100) {
          fetchRandomQuote();
        } else if (isMounted) { // Check if the component is still mounted
          setQuote({ content: data.content, author: data.author });
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching random quote:", error);
        setLoading(false);
      }
    }

    fetchRandomQuote();

    return () => {
      isMounted = false; // Clean up by setting isMounted to false when the component unmounts
    }
  }, []);

  return (
    <div className="quote">
      {loading ? (
        <p>Loading...</p>
      ) : 
        quote.content ? (
          <p>"{quote.content}" <br /> — {quote.author}</p>
        ) : (
          <p>"When you have a dream, you've got to grab it and never let go." <br /> — Carol Burnett</p>
        )
      }
    </div>
  );
}
