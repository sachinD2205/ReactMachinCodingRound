import react from "react";
import Button from "./Button";
import style from "./SuggestionList.module.css";
const SuggestionList = ({
  suggestions = [],
  suggestionClickHandler = () => {},
  seletedFromFilteredOptions = "",
}) => {
  return (
    <>
      <div className={style.suggestionListWrapper}>
        {suggestions?.map((suggestion, index) => {
          return (
            <div key={suggestion + index} className={style.buttonWrapper}>
              <Button
                name={suggestion}
                handleButtonChange={suggestionClickHandler}
                data-isSelected={
                  seletedFromFilteredOptions &&
                  seletedFromFilteredOptions?.toLowerCase() ===
                    suggestion.toLowerCase()
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SuggestionList;
