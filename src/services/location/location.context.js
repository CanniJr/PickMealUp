import React, { useState, createContext, useEffect } from "react";

import { locationRequest, requestTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchVal) => {
    setIsLoading(true);
    setKeyword(searchVal);
    locationRequest(searchVal.toLowerCase())
      .then(requestTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  //   useEffect(() => {
  //     onSearch();
  //   }, []);

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
