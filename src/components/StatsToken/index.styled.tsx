import styled from "styled-components";
import { theme } from "../../config/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8rem;

  @media (max-width: ${theme.breakpoints.medium}) {
    gap: 4rem;
  }

  @media (max-width: ${theme.breakpoints.medium}) {
    display: initial;
    grid-template-columns: initial;
    gap: initial;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.medium}) {
    margin-bottom: 5rem;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    margin-bottom: 3rem;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 1.07rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 1px solid #8f96a180;
`;

export const ItemAreaValues = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 1.07rem;
  margin-top: 0.6rem;
  width: 100%;

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
    gap: initial;
    align-items: initial;
  }
`;

export const Icon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: contain;
`;

export const TextLabel = styled.p`
  margin: 0;
  font-size: 2.8rem;
  line-height: 1.2em;

  @media (max-width: ${theme.breakpoints.small}) {
    text-align: left;
    font-size: 2.2rem;
    order: 2;
  }
`;

export const TextValue = styled.p`
  margin: 0;
  text-align: right;
  font-size: 2.8rem;
  line-height: 1.15em;
  font-weight: 600;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.small}) {
    font-size: 2.2rem;
    text-align: left;
  }
`;

export const TextValueInfo = styled.p`
  margin: 0;
  text-align: right;
  font-size: 1.8rem;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.small}) {
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

export const ChartArea = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
