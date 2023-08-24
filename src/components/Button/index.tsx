import React from "react";
import { Text } from "../Text";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="500" color="#fff">
          {children}
        </Text>
      )}

      {loading && <ActivityIndicator color="#fff" />}
    </Container>
  );
}
