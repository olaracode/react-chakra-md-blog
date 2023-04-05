import React from "react";
import { atom, useRecoilState } from "recoil";

const searchModalState = atom({
  key: "searchModalState",
  default: false,
});

const useSearchModal = () => {
  const [searchModal, setSearchModal] = useRecoilState(searchModalState);
  const toggle = () => setSearchModal(!searchModal);

  const handleKeyDown = (event) => {
    // Handle the keydown event here
    if (event.key === "k" && event.metaKey) {
      // Perform your desired action here
      toggle();
    }
    if (event.ctrlKey && event.key === "k") {
      console.log("hola");
      toggle();
    }
  };

  return { toggle, searchModal, handleKeyDown };
};

export default useSearchModal;
