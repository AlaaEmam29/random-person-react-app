import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random user');
  const fetchApi = async () => {
    setLoading(true);
    try {
      const {
        data: { results },
      } = await axios.get("https://randomuser.me/api/");
      const person = results[0];

      const {
        email,
        login: { password },
        phone,
        dob: { age },

        name: { first, last ,title},
        picture: {
          large
        },
        location :{
            street: { name, number },
            city,
      
          }     
      } = person;
  
      const newPerson = {
        large,
        phone,
        email,
        password,
        age,
        location: `${name} ${number} ${city}`,
        name: `${title} ${first} ${last}`,
      };
      setPerson(newPerson);
      setTitle('name');
      setValue(newPerson.name);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return <AppContext.Provider value={{
    person,
    loading,
    title,
    value,
    setValue,
    fetchApi,
  }}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
