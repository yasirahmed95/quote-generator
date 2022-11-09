import React from "react";
import { StyledCard, CardBody } from "./styles/Card.styled";
import { Flex } from "./styles/Flex";
import { StyledButton, Link } from "./styles/Button";

const QuoteBox = ({ quote, quoteGenerator }) => {
  const tweetContent = `"${quote.content}" ${quote.author}`;

  return (
    <StyledCard id="quote-box">
      <CardBody>
        <blockquote className="blockquote">
          <p id="text">{quote.content}</p>
          <footer className="blockquote-footer" id="author">
            <cite title={quote.author}>{quote.author}</cite>
          </footer>
        </blockquote>
        <Flex>
          <Link
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${tweetContent}`}
            target="_blank"
            rel="noreferrer"
            id="tweet-quote"
          >
            <i className="bi bi-twitter"></i>
          </Link>

          <StyledButton onClick={quoteGenerator} id="new-quote">
            New Quote
          </StyledButton>
        </Flex>
      </CardBody>
    </StyledCard>
  );
};

export default QuoteBox;
