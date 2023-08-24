import styled from "styled-components/native";

interface ContainerStyledProps {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }: ContainerStyledProps) =>
    disabled ? "#999" : "#d73035"};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;
