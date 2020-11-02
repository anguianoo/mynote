import React from "react";
import { Route } from "react-router-dom";
import Folders from "../showFolders/Folders";

export default function MainPage() {
  return (
    <div className="main-page">
      <Route path="/folders/:folders.id" render={() => <Folders />} />{" "}
    </div>
  );
}
