import React from "react";
import { Text } from "react-native";

type Props = {
  title: string;
};

export default function Title(props: Props) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 20,
        marginTop: 40
      }}
    >
      {props.title}
    </Text>
  );
}
