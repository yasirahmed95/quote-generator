import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  transition: background 1.5s;

  &:hover {
    opacity: 0.9;
  }

  i {
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;

export const Link = styled.a`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  transition: background 1.5s;

  &:hover {
    opacity: 0.9;
  }

  i {
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;
