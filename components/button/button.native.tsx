import React from "react";
import { Button, View } from "react-native";

type Props = {
  onClick: () => {};
  disabled?: boolean;
};

export default function ButtonComponent(props: Props) {
  return (
    <View style={{ marginBottom: 100 }}>
      <Button
        onPress={() => props.onClick()}
        title={props.disabled ? "Loading..." : "Show More"}
        disabled={props.disabled}
      />
    </View>
  );
}
