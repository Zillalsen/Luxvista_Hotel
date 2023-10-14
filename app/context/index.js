"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "@/components/data";
const MyContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState(roomData);
  const [kids, setKids] = useState("0 kids");
  const [adults, setAdults] = useState("1 adult");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const newRooms = rooms.filter((room) => total <= room.maxPerson);
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 2000);
  };

  return (
    <MyContext.Provider
      value={{ rooms, kids, setKids, adults, setAdults, handleSubmit, loading }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalContext = () => useContext(MyContext);
