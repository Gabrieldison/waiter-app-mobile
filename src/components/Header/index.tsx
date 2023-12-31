import React from "react";
import { Container, OrderContent, OrderHeader, Table } from "./styles";
import { Text } from "../Text";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="600">
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <OrderContent>
          <OrderHeader>
            <Text size={24} weight="500">
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight="500" color="#d73035" >
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </OrderContent>
      )}
    </Container>
  );
}
