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
  Divider,
} from "@chakra-ui/react";
import useSearchModal from "@/hooks/useSearchModal";
import Container from "@/components/atoms/Container";
import SearchList from "./SearchList";
const SearchModal = () => {
  const [search, setSearch] = React.useState("");
  const { toggle, searchModal, handleKeyDown, fetchSearch, reset } =
    useSearchModal();
  const handleChange = (e) => {
    setSearch(e.target.value);
    fetchSearch(search);
  };
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
          <Input
            variant="filled"
            placeholder="busqueda"
            onChange={handleChange}
          />

          {search.length > 0 && (
            <>
              <Divider my={5} />
              <SearchList />
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Text color="blue.100">ReactDocs</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
