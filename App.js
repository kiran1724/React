// Creation of h1 tag
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
// rendering root id inside the react
const root = ReactDOM.createRoot(document.getElementById("root"));

//Creation of Nested tags using createElement

const nested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

root.render(nested);
console.log(nested);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
