import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [value, setValue] = useState("New");

  const fetchAllData = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({contents}) => {
      console.log(data);
      setData(contents);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)