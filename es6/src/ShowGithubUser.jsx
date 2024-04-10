import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export function ShowGithubUser() {
  const [userData, setUserData] = useState([]);
  const { username } = useParams();

  async function fetchUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return (
    <>
     <h2>Utente Github </h2>
     <div className="list">
      <div>
        <img src={userData.avatar_url} alt="Avatar-img" />
      </div>
      <div>Name: {userData.name}</div>
      <div>Login: {userData.login}</div>
      <Link className="open" to="/users">Torna alla lista utenti</Link>
    </div>
    </>
  );
}
