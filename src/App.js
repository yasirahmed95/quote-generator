import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import QuoteBox from "./components/QuoteBox";
import Quote from "./api/Quote";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const colors = [
    "#1b0157",
    "#440d0f",
    "#d85f27",
    "#405b6c",
    "#b1ad9e",
    "#5b2a86",
    "#80756d",
    "#89a7a7",
    "#023702",
    "#f06c9b",
  ];

  const theme = {
    colors: {
      background: bgColor,
      buttonText: "white",
    },
  };

  const quoteGenerator = async () => {
    const response = await Quote.get("/random");
    setQuote(response.data);
    colorChanger(colors);
  };

  const colorChanger = (arr) => {
    const color = arr[Math.floor(Math.random() * arr.length)];
    if (color === bgColor) {
      colorChanger(arr);
    }
    setBgColor(color);
  };

  useEffect(() => {
    quoteGenerator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (quote) {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Container>
            <QuoteBox
              quote={quote}
              bgColor={bgColor}
              quoteGenerator={quoteGenerator}
            />
          </Container>
        </>
      </ThemeProvider>
    );
  }
};

export default App;
