//function component
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

// class component
class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "React Practice"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));