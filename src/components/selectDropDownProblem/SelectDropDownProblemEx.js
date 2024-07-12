import { useState } from "react";
const SelectDropDownProblem = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: [" Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  const [cities, setCities] = useState([]);

  const handleSelectCountries = (e) => {
    const data = JSON.parse(e?.target?.value);
    if (data) {
      setCities(data?.cities);
    }
  };

  const handleSelectCities = (e) => {
    console.log(e?.target?.value);
  };

  return (
    <>
      {/** countries */}
      <select onChange={(e) => handleSelectCountries(e)} defaultValue={""}>
        <option value={""} disabled>
          select country
        </option>
        {countries?.map((data, i) => (
          <option value={JSON.stringify(data)} key={data?.value}>
            {data?.name}
          </option>
        ))}
      </select>
      {/** cities */}
      {cities?.length > 0 && (
        <>
          <select onChange={(e) => handleSelectCities(e)} defaultValue={""}>
            <option value={""} disabled>
              select city
            </option>
            {cities?.map((data, i) => (
              <option value={data} key={`${data}+i`}>
                {data}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default SelectDropDownProblem;
