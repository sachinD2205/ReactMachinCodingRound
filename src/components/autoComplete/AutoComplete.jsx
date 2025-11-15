import react, { useState } from "react";
import InputTextField from "./components/InputTextField";
import Button from "./components/Button";
import SuggestionList from "./components/SuggestionList";

const AutoComplete = () => {
  const suggestions = [
    "Redberry",
    "Sunmelon",
    "Bluepeach",
    "Crisp Mango",
    "Sweetberry",
    "Glow Apple",
    "Golden Papaya",
    "Starfruit Slice",
    "Mint Orange",
    "Berry Plum",
  ];

  const [inputValue, setInputValue] = useState("");
  const [seletedFromFilteredOptions, setSelectedFromFiltredOptions] =
    useState("");
  const [filtredSuggestion, setFilteredSuggestion] = useState(suggestions);
  const [suggestionIsSelected, setSuggestionIsSelected] = useState(false);

  const suggestionClickHandler = (value) => {
    setSuggestionIsSelected(true);
    setInputValue(value);
    setSelectedFromFiltredOptions(value);
    updateFiltredSuggestion(value, suggestions);
    console.log("suggestionClickHandlerIs Clicked", value);
  };

  const filterSuggestion = (value = "", suggestions = []) => {
    return suggestions.filter((sugg) =>
      sugg.toLowerCase().includes(value.toLowerCase())
    );
  };

  const updateFiltredSuggestion = (value, suggestions) => {
    if (value) {
      const filterdSuggestions = filterSuggestion(value, suggestions);
      setFilteredSuggestion(filterdSuggestions);
    } else {
      setFilteredSuggestion(suggestions);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    setSuggestionIsSelected(false);
    updateFiltredSuggestion(value, suggestions);
  };
  const handleButtonChange = () => {
    setInputValue("");
    setSuggestionIsSelected(false);
    updateFiltredSuggestion("", suggestions);
    setSelectedFromFiltredOptions("");
  };

  return (
    <>
      <div>
        <InputTextField
          handleInputChange={handleInputChange}
          value={inputValue}
        />
        <Button name="clear" handleButtonChange={handleButtonChange} />
      </div>
      {!suggestionIsSelected && (
        <SuggestionList
          suggestions={filtredSuggestion}
          suggestionClickHandler={suggestionClickHandler}
          seletedFromFilteredOptions={seletedFromFilteredOptions}
        />
      )}
    </>
  );
};

export default AutoComplete;
