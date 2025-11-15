import react, { useEffect, useState } from "react";
import InputTextField from "./components/InputTextField";
import Button from "./components/Button";
import SuggestionList from "./components/SuggestionList";
import styles from "./components/AutoComplete.module.css";

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
  const [loading,setLoading]= useState(false)
  const [inputValue, setInputValue] = useState("");
  const [seletedFromFilteredOptions, setSelectedFromFiltredOptions] =
    useState("");
  const [filtredSuggestion, setFilteredSuggestion] = useState([]);
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

  const fetchSuggestion = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(suggestions);
      }, [2000]);
    }).then((data) => {
        setFilteredSuggestion(data)
        setLoading(false)
    });
  };

  useEffect(() => {
setLoading(true)
    fetchSuggestion();
  }, []);

  return (
    <div className={styles.autoCompleteWrapper}>
      <div className={styles.inputWrapper}>
        <div>
          <InputTextField
            handleInputChange={handleInputChange}
            value={inputValue}
          />
          <Button name="clear" handleButtonChange={handleButtonChange} />
        </div>
      </div>
      <div>
        {loading ? <>loading......</>:
        <>
        {!suggestionIsSelected && (
          <SuggestionList
            suggestions={filtredSuggestion}
            suggestionClickHandler={suggestionClickHandler}
            seletedFromFilteredOptions={seletedFromFilteredOptions}
          />
        )}
        
        </>
        }
      </div>
    </div>
  );
};

export default AutoComplete;
