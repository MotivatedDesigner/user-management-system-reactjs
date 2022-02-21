import { useState } from "react"

export const UserForm = ({
  onSubmit,
  onCancel,
  initialData = null
}) => {

  const [firstName, setFirstName] = useState(initialData?.firstName ?? '')
  const [lastName, setLastName] = useState(initialData?.lastName ?? '')
  const [username, setUsername] = useState(initialData?.userName ?? '')

  return (
    <form 
      onSubmit={ (event) => onSubmit(event, { firstName, lastName, username }) } 
      className="w-50 pt-5 mx-auto"
    >
      {/* firstName */}
      <div className="form-group">
        <label htmlFor="firstName">FirstName</label>
        <input
          className="form-control"
          placeholder="Please Enter your FirstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      {/* lastName */}
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-control"
          placeholder="Please Enter your LastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {/* username */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          placeholder="Please Enter your Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* actions */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="button" className="btn btn-primary" onClick={onCancel}>
        Close
      </button>
    </form>
  )
}
