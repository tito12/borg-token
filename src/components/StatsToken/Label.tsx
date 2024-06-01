import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
`;

export const Color = styled.div`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  line-height: 16px;
  box-shadow: -1px -1px 3px #2f2f2f;
`;

export const Text = styled.div`
  margin-left: 4px;
  margin-top: -3px;
  font-size: 12px;
`;

export default function Label(name: string, color: string) {
  return (
    <Card>
      <Color style={{ background: color }}></Color>
      <Text>{name}</Text>
    </Card>
  );
}
