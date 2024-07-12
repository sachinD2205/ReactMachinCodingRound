import { useState } from "react";
const SelectCheckBoxAndDeleteItem = () => {
  const sports = ["play cricket", "play video game", "read book"];

  const [sportData, setSportData] = useState(
    sports?.map((data) => ({ name: data, isChecked: false }))
  );

  const handleDeleteItem = (currentItem) => {
    console.log("currentItem", currentItem);
    if (sportData?.length > 0) {
      setSportData((prev) =>
        prev?.filter((data) => data?.name !== currentItem?.name)
      );
    }
  };

  const handleSportsCheckBox = (e) => {
    const value = e?.target?.value;
    setSportData((prev) =>
      prev?.map((data) => {
        if (value === data?.name) {
          return {
            ...data,
            isChecked: !data?.isChecked,
          };
        } else {
          return {
            ...data,
          };
        }
      })
    );
  };

  {
    console.log("sportsData", sportData);
  }

  return (
    <>
      {sportData?.length > 0 ? (
        <>
          {sportData?.map((data, index) => (
            <div key={`${data}+index`}>
              <input
                type="checkbox"
                value={data?.name}
                checked={data.isChecked}
                onChange={(e) => handleSportsCheckBox(e)}
              />
              {`${data?.name}     `}
              {data?.isChecked && (
                <button onClick={() => handleDeleteItem(data)}> delete</button>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <div> no sport available </div>
        </>
      )}
    </>
  );
};

export default SelectCheckBoxAndDeleteItem;
