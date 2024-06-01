import styled from "styled-components";
import { theme } from "../config/theme";

export const Hero = styled.section`
  padding: var(--padding-section) 0;
  color: var(--color-text-inverse);
  background: var(--color-bg-gradient);
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 8rem;
  line-height: 1.05em;
  margin: 0 0 3.2rem 0;
  font-weight: 600;

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: 4rem;
    margin: 0 0 2.4rem 0;
  }
`;

export const HeroText = styled.p`
  font-size: 2.2rem;
  line-height: 1.1em;
  margin: 0 0 4.4rem 0;

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: 1.8rem;
    margin: 0 0 1.6rem 0;
  }
`;
export const HeroChart = styled.div`
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.small}) {
    width: 720px;
  }
`;

export const Stats = styled.section`
  padding: var(--padding-section) 0;
`;

export const StatsTitle = styled.h2`
  font-size: 4.8rem;
  line-height: 1.05em;
  margin: 0 0 6.4rem 0;
  font-weight: 600;
  text-align: center;

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: 3.2rem;
    margin: 0 0 5.6rem 0;
  }
`;
