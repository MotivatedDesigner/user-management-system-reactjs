import { useState } from "react"
import { UserForm } from "./components/UserForm"

const USERS_DUMMY = [ { id: "123456789", createdDate: "2021-01-06T00:00:00.000Z", status: "En validation", firstName: "Mohamed", lastName: "Taha", userName: "mtaha", registrationNumber: "2584", },

{ id: "987654321", createdDate: "2021-07-25T00:00:00.000Z", status: "Validé", firstName: "Hamid", lastName: "Orrich", userName: "horrich", registrationNumber: "1594", },

{ id: "852963741", createdDate: "2021-09-15T00:00:00.000Z", status: "Rejeté", firstName: "Rachid", lastName: "Mahidi", userName: "rmahidi", registrationNumber: "3576",

} ]

function App() {

  const [users, setUsers] = useState(USERS_DUMMY)

  const closeModalHandler = () => console.log('omm');

  const UserFormHandler = (event, formData) => {
    event.preventDefault()
    console.log(formData);
  }
  return (
    <div className="bg-secondary vh-100">
      <div className="container">
        <h1 className="text-center py-5">User Management System</h1>
        <button className='btn btn-light'>Add New User</button>
        {/* <UserForm action="edit" onSubmit={UserFormHandler} onCancel={closeModalHandler} initialData={users[0]}/> */}
      </div>
    </div>
  )
}

export default App
