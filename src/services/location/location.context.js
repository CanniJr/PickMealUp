import React, { useState, createContext } from "react";

import { locationRequest, requestTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const onSearch = (searchVal) => {
    setIsLoading(true);
    setKeyword(searchVal);
    console.log(searchVal)
    if(!searchVal.length){
      // Checks if value is empty and do nothing, so we don't make unecessary empty API call.
      return;
    }
    locationRequest(searchVal.toLowerCase())
      .then(requestTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result)
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
