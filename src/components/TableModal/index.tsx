import React, { useState } from "react";
import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";
import { ModalBody, Overlay, Form, ModalHeader, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (props: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    setTable('')
    onSave(table);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <ModalHeader>
            <Text weight="500">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder="Numero da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length < 1}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
