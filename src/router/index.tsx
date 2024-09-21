import { Routes, Route } from "react-router-dom";
import React from "react";
import { Layout } from "components/layout";
import { Home } from "pages/home";
import { SearchResultPage } from "pages/search-result-page";
import { ItemResultPage } from "pages/item-result-page";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
        <Route path="/item/:id" element={<ItemResultPage />} />
      </Route>
    </Routes>
  );
}

export { AppRouter };
