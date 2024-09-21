import React from "react";
import { MainButton } from "ui/buttons";
import { MainTextField } from "ui/text-field";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const handlerSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    navigate("/search/" + query, { replace: true });
    console.log(query);
  };
  return (
    <form onSubmit={handlerSearch}>
      <MainTextField typeText="text" name="search"></MainTextField>
      <MainButton>Buscar</MainButton>
    </form>
  );
}

export { SearchForm };
