import React, { useState } from "react";
import Member from "./Components/Members";
import MembersForm from "./Components/MembersForm";
import "./App.css";

const initialFormValues = {
  membername: "",
  email: "",
  role: "",
};

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
    //spreading the initialFormValues and then redeclaring the
    // values of the object to the values passed down as params
  };

  const submitForm = () => {
    const newMember = {
      membername: formValues.membername.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.membername || !newMember.email || !newMember.role) {
      setError("All fields are required");
    } else {
      setMembers([newMember, ...members]);
      setFormValues(initialFormValues);
      setError("");
    }
  };

  return (
    <div>
      <h1>Team Members</h1>
      <div>
        <MembersForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </div>
      {members.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
