import React from "react";
import moment from "moment";

export default function Tooltip(
  value: number | undefined,
  timestamp: number | string,
) {
  if (!value) return;

  const date = moment(timestamp).format("MMM D YYYY, h:mm A");

  return (
    <>
      <div>{date}</div>
      <div>
        Price: <b>${value.toFixed(3)}</b>
      </div>
    </>
  );
}
