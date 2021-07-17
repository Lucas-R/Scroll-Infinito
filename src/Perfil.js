import { useEffect, useState } from "react";
import "./Perfil.css";

export default function Perfil() {
  const [username, setUsername] = useState("octocat");
  const [search, setSearch] = useState();
  const [perPage, setPerPage] = useState(0);
  const [dataUser, setDataUser] = useState([null]);
  const [followers, setFollowers] = useState([]);
  //pesquisa de usuario
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(search);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //require do usuario
  useEffect(() => {
    async function data() {
      const response = await fetch("https://api.github.com/users/" + username);
      const data = await response.json();
      setDataUser(data);
    }
    data();
  }, [username]);

  // require dos seguidores
  useEffect(() => {
    async function listFollowers() {
      const response = await fetch(
        dataUser.followers_url + "?per_page=" + perPage
      );
      const data = await response.json();
      setFollowers(data);
    }
    listFollowers();
  }, [dataUser, perPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPerPage((perPageInsedeState) => perPageInsedeState + 10);
      }
    });
    observer.observe(document.querySelector("#more"));
  }, []);

  return (
    <div className="content-list">
      <header>
        <h1> user : {username} </h1>

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleSearch} />
          <button type="submit"> Search </button>
        </form>
      </header>

      <ul>
        {followers.map((user) => (
          <li key={user.id}> {user.login} </li>
        ))}
        <li id="more">Ver mais</li>
      </ul>
    </div>
  );
}
