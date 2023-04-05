import React from "react";
import { atom, useRecoilState } from "recoil";

const URL = "https://express-blog-xa7v.onrender.com";

const fetchSearch = async (query) => {
  try {
    const response = await fetch(`${URL}/blogs/search?search=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

const searchModalState = atom({
  key: "searchModalState",
  default: false,
});

const searchResultsAtom = atom({
  key: "searchResults",
  default: {},
});

const searchStatusAtom = atom({
  key: "searchStatus",
  default: "idle",
});

const useSearchModal = () => {
  const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom);
  const [searchStatus, setSearchStatus] = useRecoilState(searchStatusAtom);
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
  const reset = () => {
    setSearchResults({});
    setSearchStatus("idle");
  };

  const handleFetch = async (query) => {
    setSearchStatus("loading");
    const data = await fetchSearch(query);
    if (data === "error") {
      setSearchStatus("error");
      return;
    }
    setSearchResults(data);
    setSearchStatus("success");
  };

  return {
    toggle,
    searchModal,
    handleKeyDown,
    fetchSearch: handleFetch,
    searchResults,
    searchStatus,
    reset,
  };
};

export default useSearchModal;
