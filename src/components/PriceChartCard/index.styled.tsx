import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  background-color: rgba(25, 30, 41, 0.9);
  border-radius: 5px;
  box-shadow: var(--shadow-card);
`;

export const CardTextPrice = styled.p`
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.25em;
  color: var(--color-text-inverse);
`;

export const CardTextChange = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1em;
  color: var(--color-text-inverse);
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.732rem;
  padding: 1.464rem;
  background-color: rgb(51, 56, 65);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const CardHeaderChange = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardCurrencies = styled.div`
  display: flex;
  align-items: center;
`;

export const CardCurrenciesArrow = styled.img`
  margin: 0 -5px;
  z-index: 2;
`;

export const CardCurrenciesItem = styled.img`
  max-width: 30px;
`;

export const ChartArea = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const Button = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 2.7rem;
  line-height: 2.7rem;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.selected ? "600" : "initial")};
  border: none;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) =>
    props.selected ? "var(--color-primary)" : "var(--color-text-inverse)"};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: var(--color-primary);
    font-weight: 600;
  }
`;
