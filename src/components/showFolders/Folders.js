import React from "react";
import dummyText from "../../dummyText";

export default function Folders() {
  <>
    <ul className="folders">
      {dummyText.map((folder) => (
        <li key={folder.id}>{folder.name}</li>
      ))}
    </ul>
  </>;
}
