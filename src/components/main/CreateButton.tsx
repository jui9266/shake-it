"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const CreateButton = () => {
  const createCocktail = async () => {
    const res = axios.post("/api/cocktail/");
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: createCocktail,
    onSuccess: () => alert("good"),
    onError: () => alert("bad"),
  });

  const getCocktails = async () => {
    const res = axios.get("/api/cocktail/");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["cocktails"],
    queryFn: getCocktails,
  });

  console.log(data);
  return (
    <div>
      <button onClick={() => mutate()}>칵테일 임시 생성버튼</button>
    </div>
  );
};

export default CreateButton;
