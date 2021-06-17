import React, { useState } from "react";
import data from "./data.json";
import styled from "styled-components";
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

function Quotes({ className }) {
  const quotes = data.quotes;
  const colors = [
    "#ffcccb",
    "#ff7961",
    "#ff6659",
    "#ffc1e3",
    "#e6ceff",
    "#b085f5",
  ];
  const [quote, setQuote] = useState(quotes[0] || []);
  const [color, setColor] = useState(colors[0]);
  const randomNum = (currentNum, arr) => {
    let randomNum;
    do {
      randomNum = Math.round(Math.random(10) * (arr.length - 1));
      if (randomNum != currentNum) {
        break;
      }
    } while (true);
    return randomNum;
  };
  const handleClick = () => {
    setQuote(quotes[randomNum(quotes.indexOf(quote), quotes)]);
    setColor(colors[randomNum(colors.indexOf(color), colors)]);
  };
  return (
    <div className={className} style={{ background: color }}>
      <div className="container">
        <h3 style={{ color: color }}>
          <FaQuoteLeft /> {quote.content}
        </h3>
        <p style={{ color: color }}>{quote.author}</p>
        <div className="list-btn">
          <div className="social-btn">
            <a
              href={
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent('"' + quote.content + '" ' + quote.author)
              }
              style={{ background: color }}
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href={
                "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                encodeURIComponent(quote.content) +
                "&content=" +
                encodeURIComponent(quote.author) +
                "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
              }
              style={{ background: color }}
              target="_blank"
            >
              <FaTumblr />
            </a>
          </div>
          <div className="change-quote-btn">
            <a onClick={handleClick} style={{ background: color }}>
              New quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledQuotes = styled(Quotes)`
  position: relative;
  width: 100vw;
  height: 100vh;
  .container {
    background: #fff;
    width: 60vw;
    height: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
  }
  h3 {
    text-align: center;
    font-size: 40px;
  }
  p {
    text-align: right;
  }
  .list-btn {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    width: calc(100% - 60px);
  }
  .social-btn {
    a {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 5px;
      text-align: center;
      color: #fff;
      font-size: 30px;
      line-height: 60px;
      margin-right: 5px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .change-quote-btn {
    a {
      cursor: pointer;
      display: block;
      padding: 10px 30px;
      border-radius: 5px;
      color: #fff;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
export default StyledQuotes;
