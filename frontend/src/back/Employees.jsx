import { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "../Composants/UsersTable";

export default function Employees() {
  const [users, setUsers] = useState([]);
  const url = "http://127.0.0.1:8000/api";

  // had function ila bghiti tartib 3la 7ssab smia
  function compareNames(user1, user2) {
    const name1 = user1.name.toUpperCase();
    const name2 = user2.name.toUpperCase();

    if (name1 < name2) {
      return -1;
    } else if (name1 > name2) {
      return 1;
    } else {
      return 0;
    }
  }

  const getApi = async () => {
    try {
      const resp = await axios.get(`${url}/users`, {
        withCredentials: true,
        withXSRFToken: true,
      });
      const { users } = resp.data;
      // setUsers(users) hadi kadir mn Awal wa7d fdatabase tal akhir wa7d tzad
      setUsers(users.sort(compareNames)); // hadi katratab 3la 7ssab smia
      //console.log("Users list :", users);
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
