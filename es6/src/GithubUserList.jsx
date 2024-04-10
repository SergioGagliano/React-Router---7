import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"

export function GithubUserList() {
  useEffect(() => {
    fetchAPI();
  }, []);

  const [userName, setUserName] = useState([]);

  async function fetchAPI() {
    try {
      const response = await fetch("https://api.github.com/users");
      const json = await response.json();
      setUserName(json);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Outlet/>
      <h1>Lista utenti Github</h1>
      <ul className="list">
        {userName.map((user) => (
          <li key={user.id}>
            <Link className="user" to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Link className="open" to="/">Torna alla Home</Link>
    </>
  );
}
