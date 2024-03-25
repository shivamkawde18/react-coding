import React from "react";
/*

Given an array of api's, make api calls synchronously one after another each. Once all completed, execute a callback. Similar to Promise.all but just that all promises has to be resolved synchronously.
*/
export const ListOfApiTekion = () => {
  // Function to make an API call
  async function makeApiCall(api) {
    try {
      const response = await fetch(api);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${api}:`, error);
      throw error;
    }
  }

  // Function to make API calls synchronously
  async function makeSequentialApiCalls(apis, callback) {
    try {
      const results = [];
      for (let i = 0; i < apis.length; i++) {
        const data = await makeApiCall(apis[i]);
        results.push(data);
      }
      callback(null, results); // Execute callback with results
    } catch (error) {
      callback(error, null); // Execute callback with error
    }
  }

  // Example usage
  const apis = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];

  // Callback function to handle results
  function handleResults(error, results) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Results:", results);
    }
  }

  // Make sequential API calls and handle results
  makeSequentialApiCalls(apis, handleResults);

  return <div>ListOfApiTekion</div>;
};
