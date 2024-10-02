"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const IngredientForm = () => {
  const [name, setName] = useState("");

  const createIngredient = async () => {
    const res = axios.post("/api/ingredient", {
      name,
    });
    return res;
  };
  const { mutate } = useMutation({
    mutationFn: createIngredient,
    onSuccess: () => {
      alert(`${name} 을 추가하였습니다.`);
    },
    onError: () => {
      alert("중복재료 또는 오류가 발생하였습니다.");
    },
    onSettled: () => {
      setName("");
    },
  });

  return (
    <div>
      <p>재료등록</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          type="text"
        />
        <button
          onClick={(e) => {
            console.log(name);
            e.preventDefault();
            mutate();
          }}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default IngredientForm;
