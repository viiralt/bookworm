import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 2.1rem;
`;

export const HeadingSmall = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
`;

export const Text = styled.p`
  font-family: Cardo, sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const Cover = styled.img`
  width: 20rem;
  height: 30rem;
`;

export const CoverSmall = styled.img`
  width: 10rem;
  height: 13rem;
`;

export const Image = styled.img`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
`;

export const Button = styled.button`
  width: 8em;
  height: 3em;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  transition: box-shadow 0.3s;
  font-family: Cardo, sans-serif;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;
