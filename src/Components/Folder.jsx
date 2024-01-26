import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <span>{exp.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
}
export default Folder;
