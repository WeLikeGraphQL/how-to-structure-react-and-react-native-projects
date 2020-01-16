import React from "react";

type Props = {
  onClick: () => {};
  disabled?: boolean;
};

export default function Button(props: Props) {
  return (
    <button
      onClick={() => props.onClick()}
      disabled={props.disabled}
      style={{
        height: 50,
        width: 100,
        background: "aliceblue",
        marginTop: 50,
        marginBottom: 50
      }}
    >
      {props.disabled ? "Loading..." : "Show More"}
    </button>
  );
}
