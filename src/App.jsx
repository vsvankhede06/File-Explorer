import "./styles.css";
import explorer from "./data/FolderData";
import { useState } from "react";
import Folder from "./Components/Folder";

export default function App() {
  const [explorerData, setExplorer] = useState(explorer);
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
