import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { GithubUserList } from "./GithubUserList";
import { Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";


function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h2>Seleziona un utente</h2>}/>
          <Route path=":username" element={<ShowGithubUser />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
