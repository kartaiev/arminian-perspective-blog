import React, { createContext, useState } from "react";
import { useGetPosts } from "../actions";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [initialData, setInitialData] = useState([]);

  const { data, size, setSize } = useGetPosts(initialData);

  const increaseSize = () => setSize(size + 1);

  return (
    <FetchContext.Provider
      value={{ setInitialData, increaseSize, paginatedPosts: data }}
    >
      {children}
    </FetchContext.Provider>
  );
};
