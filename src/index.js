import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];
const initialFormValues = { petName: "", petType: "" };
function SimpleForm() {
  const [pet, setPet] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const change = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim(),
    };
    setPet([...pet, newPet]);
    setFormValues(initialFormValues);
  };
  return (
    <div>
      <h1>Simple Form</h1>
      {pet.map((pet, idx) => {
        return (
          <div key={idx}>
            {pet.petName} is a {pet.petType}
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input
          name="petName"
          type="text"
          value={formValues.petName}
          onChange={change}
        />
        <input
          name="petType"
          type="text"
          value={formValues.petType}
          onChange={change}
        />
        <button>Submit</button>
      </form>
    </div>
  );

  // <div>Ready to start GP!</div>;
}

render(
  <>
    <App />
    <SimpleForm />
  </>,
  document.querySelector("#root")
);
