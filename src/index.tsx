import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={null}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

const example = document.getElementById("hello-example");
const root = createRoot(example);
root.render(<App />);
