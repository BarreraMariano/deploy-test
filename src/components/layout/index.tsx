import React from "react";
import { SearchForm } from "components/search-form";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <SearchForm></SearchForm>
      <Outlet />
    </div>
  );
}

export { Layout };
