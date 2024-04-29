import { useEffect, useState } from "react";
import axios from "axios";

export default function Employees() {
  const [users, setUsers] = useState([]);
  const url = "http://127.0.0.1:8000/api/users";

  const getApi = async () => {
    try {
      const resp = await axios.get(url);
      setUsers(resp.data);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h3>Liste des Employées</h3>
      <table border={3}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>CIN</th>
            <th>Date de début de travail</th>
            <th>Salaire</th>
          </tr>
        </thead>
        <tbody>
        {users.result && users.result.map((user)  => (
            <tr key={user.id}>
              <td> <img src={user.image} alt="" /> </td>
              <td>{user.name}</td>
              <td>{user.cin}</td>
              <td>{user.salaries}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
