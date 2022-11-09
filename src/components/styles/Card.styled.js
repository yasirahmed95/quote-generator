import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const StyledCard = styled(Card)`
  width: 500px;
  height: auto;
  color: ${({ theme }) => theme.colors.background};
  transition: color 1.5s;
  border-radius: 4px;
`;

export const CardBody = styled.div`
  padding: 35px;

  blockquote {
    font-family: "Raleway", sans-serif;
  }

  p {
    font-size: 2rem;
    text-align: center;
    line-height: 35px;
  }

  footer {
    text-align: right;
    margin-top: 1rem;
  }

  cite {
    font-style: normal;
  }
`;
