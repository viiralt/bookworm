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
