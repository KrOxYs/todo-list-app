import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileInfo from "../components/profileInfo.jsx";
import DataTable from "../components/dataTables.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProfileInfo />
      <DataTable />
    </div>
  );
}

export default App;
