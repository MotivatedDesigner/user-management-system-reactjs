import { useState } from "react"

export const UserForm = ({
  action,
  onAction,
  onClose,
  initialData = null
}) => {

  const [formData, setFormData] = useState(initialData)

  return (
    <form 
      onSubmit={(event) => onAction(event, action,formData)} 
      className="w-50 pt-5 mx-auto"
    >
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="button" className="btn btn-primary" onClick={onClose}>
        Close
      </button>
    </form>
  )
}
