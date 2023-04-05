import React from "react";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import useSearchModal from "@/hooks/useSearchModal";
import Container from "@/components/atoms/Container";
const SearchModal = () => {
  const { toggle, searchModal, handleKeyDown } = useSearchModal();
  console.log(searchModal);
  return (
    <Modal
      isOpen={searchModal}
      onClose={toggle}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <ModalOverlay />
      <ModalContent bgColor="brand.card" maxW={"90%"}>
        <ModalHeader>Busqueda</ModalHeader>
        <ModalCloseButton
          _hover={{
            color: "blue.100",
          }}
        />
        <ModalBody>
          <Input variant="filled" placeholder="busqueda" />
        </ModalBody>

        <ModalFooter>
          <Text color="blue.100">ReactDocs</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
