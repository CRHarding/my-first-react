import React from "react";

export default function MembersForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target;
    // this is equal to const value = evt.target.value;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Member Name
          <input
            name="membername"
            type="text"
            placeholder="Member name"
            value={values.membername}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email me"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="alumni">Alumni</option>
          </select>
        </label>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
