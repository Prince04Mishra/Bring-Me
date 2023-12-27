import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "Parent", id: "heading" }, [
  React.createElement("div", { id: "Chlid", id: "inner" }, [
    React.createElement("h1", { id: "heading" }, "This is heading1 tag"),
    React.createElement("h2", {}, "This is heading1 tag"),
  ]),
  React.createElement("div", { id: "Child_2", id: "inner" }, [
    React.createElement("h1", { id: "heading" }, "This is heading1 tag"),
    React.createElement("h2", {}, "This is heading1 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
