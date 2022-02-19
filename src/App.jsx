import Container from "react-bootstrap/Container"
import MyTable from "./components/MyTable"

const users = [ { id: "123456789", createdDate: "2021-01-06T00:00:00.000Z", status: "En validation", firstName: "Mohamed", lastName: "Taha", userName: "mtaha", registrationNumber: "2584", },

{ id: "987654321", createdDate: "2021-07-25T00:00:00.000Z", status: "Validé", firstName: "Hamid", lastName: "Orrich", userName: "horrich", registrationNumber: "1594", },

{ id: "852963741", createdDate: "2021-09-15T00:00:00.000Z", status: "Rejeté", firstName: "Rachid", lastName: "Mahidi", userName: "rmahidi", registrationNumber: "3576",

} ]

function App() {
  return (
    <div className="bg-secondary vh-100">
      <Container>
        <h1 className="text-center py-4">User Management System</h1>
        <MyTable data={users}/>
      </Container>
    </div>
  )
}

export default App
