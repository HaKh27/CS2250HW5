import React from "react";

const HondaModels = () => {
  const [models, setModels] = React.useState([]);

  React.useEffect(() => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json")
      .then((res) => res.json())
      .then((json) => {
        setModels(json.Results);
      });
  }, []);

  return (
    <div className="honda-models">
      <h2>Honda Car Models</h2>
      <ul>
        {models?.map((model) => (
          <li>{model.Model_Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HondaModels;
