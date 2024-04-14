import React, { useEffect, useState, createContext, useContext } from "react";
const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);


function NewBatchesBody() {
  // console.log("Hi this is me");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3345/api/cmd");
        const jsonData = await response.json();
        setData(jsonData);
        // console.log("this is console");
        // console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="batchesMain">
      <div className="batch-starting">
        <div className="controls">
          <div className="dropdown">
            <select id="sort">
              <option value="date">Date</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div>
            <select id="filter">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="batchcontainer">
          <div className="batch">
            <div className="batch-img">
              {data.map((item, index) => (
                <a
                  key={index}
                  href={item.imgSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.imgSrc} alt={`Image ${index}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBatchesBody;
