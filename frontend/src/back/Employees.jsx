import { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "../Composants/UsersTable";

export default function Employees() {
  const [users, setUsers] = useState([]);
  const url = "http://127.0.0.1:8000/api";

  const getApi = async () => {
    try {
      const resp = await axios.get(`${url}/users`, {
        withCredentials: true,
        withXSRFToken: true,
      });
      const { users } = resp.data;
      setUsers(users);
      console.log("Users list :", users);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const refreshApi = () => {
    getApi();
  };

  return (
    <div>
      <UsersTable users={users} refreshApi={refreshApi} />
    </div>
  );
}
