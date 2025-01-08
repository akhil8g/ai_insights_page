import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./App.css";

const App = () => {
  const [period, setPeriod] = useState("1 Day");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const options = [
    { value: "1 Day", label: "1 Day" },
    { value: "1 Month", label: "1 Month" },
    { value: "1 Year", label: "1 Year" },
  ];

  const descriptions = {
    "1 Day": "The energy consumption for the past day was optimal, with peak usage during the evening hours.",
    "1 Month": "This month's energy consumption shows consistent patterns, with weekends having higher usage.",
    "1 Year": "Over the past year, energy usage increased by 15% during summer, indicating higher AC usage.",
  };

  const fetchDescription = (selectedPeriod) => {
    setIsGenerating(true);
    setDescription("");
    setTimeout(() => {
      setDescription(descriptions[selectedPeriod]);
      setIsGenerating(false);
    }, 2000); // Simulates text generation delay
  };

  useEffect(() => {
    fetchDescription(period);
  }, [period]);

  return (
      <div className="phone-screen">
        <div className="header">
          <Select
            options={options}
            defaultValue={{ value: "1 Day", label: "1 Day" }}
            onChange={(option) => setPeriod(option.value)}
          />
        </div>
        <div className="content">
          {isGenerating ? (
            <div className="loading-animation">Generating insights...</div>
          ) : (
            <div className="description">{description}</div>
          )}
        </div>
      </div>
  );
};

export default App;
