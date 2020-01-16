import React from "react";

type Props = {
  title: string;
};

export default function Title(props: Props) {
  return <h2>{props.title}</h2>;
}
