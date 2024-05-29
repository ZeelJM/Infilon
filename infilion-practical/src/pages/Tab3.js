import { useEffect, useState } from "react";

const Tab3 = () => {
  const [users, setUsers] = useState([]);
  const [num, setNum] = useState(0);
  const [numLogs, setNumLogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function printHelloTask(number) {
    if (number <= 0) {
      console.log("STOP");
      setNumLogs((prev) => [...prev, "STOP"]);

      return;
    }

    console.log("Hello Task");
    setNumLogs((prev) => [...prev, "Hello Task"]);

    printHelloTask(number - 1);
  }

  return (
    <div>
      <div className="bg-black text-white font-bold">Tab 3</div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <input
          type="number"
          className="p-3 border"
          onChange={(e) => setNum(e.target.value)}
        />
        <button
          className="p-3 bg-sky-600 text-white"
          onClick={() => {
            setNumLogs([]);
            printHelloTask(num);
          }}
        >
          Submit
        </button>
        {numLogs?.length > 0 &&
          numLogs.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};

export default Tab3;
