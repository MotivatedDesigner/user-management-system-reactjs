import { useState } from "react"
import { Modal } from "./components/Modal";
import { MyTable } from "./components/MyTable";
import { Test } from "./components/Test";
import { UserForm } from "./components/UserForm"

const USERS_DUMMY = [ { id: "123456789", createdDate: "2021-01-06T00:00:00.000Z", status: "En validation", firstName: "Mohamed", lastName: "Taha", userName: "mtaha", registrationNumber: "2584", },

{ id: "987654321", createdDate: "2021-07-25T00:00:00.000Z", status: "Validé", firstName: "Hamid", lastName: "Orrich", userName: "horrich", registrationNumber: "1594", },

{ id: "852963741", createdDate: "2021-09-15T00:00:00.000Z", status: "Rejeté", firstName: "Rachid", lastName: "Mahidi", userName: "rmahidi", registrationNumber: "3576",

} ]

const data = ['o', 'm', 'm', 'o']
function App() {

  const [users, setUsers] = useState(USERS_DUMMY)
  const [showModal, setShowModal] = useState(false)

  const closeModalHandler = () => console.log('omm');

  const addUserHandler = (event) => {
    event.preventDefault()
    setShowModal((prevState)=> !prevState)
  }
  const actionHandler = (action, id) => {
    console.log(action);
    console.log(id);
  }
  return (
    <div className="bg-secondary vh-100">
      <div className="container">
        <Test data={data}/>
        {/* <h1 className="text-center py-5">User Management System</h1> */}
        <button className='btn btn-primary' onClick={addUserHandler}>Add New User</button>
        {/* <MyTable data={users} onAction={actionHandler}/> */}
        {/* <Modal show={showModal}/> */}
        {/* <UserForm action="edit" onSubmit={UserFormHandler} onCancel={closeModalHandler} initialData={users[0]}/> */}
      </div>
    </div>
  )
}

export default App
