import "./styles.css";
import explorer from "./data/FolderData";
import { useState } from "react";
import Folder from "./Components/Folder";
import useTraverseTree from "./Hook/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorer] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorer(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
