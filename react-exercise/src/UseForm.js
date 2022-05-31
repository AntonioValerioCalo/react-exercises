import { useState } from "react";

export const UseForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInput = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((form) => {
      return {
        ...form,

        [name]: type === "checked" ? checked : value,
      };
    });
  };
  const handleButton = () => {
    setForm(console.log(form));
  };

  return {
    input: handleInput,
    print: handleButton,
  };
};
