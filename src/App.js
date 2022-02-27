import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log("Getting from :::: ", res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data, index) => {
    return(
      <tr>
        <th scope="row">1</th>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
      </tr>
    )
  })
  return (
    <div className="App">
      <h1>Comprendre Axios</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Company</th>
            <th scope="col">Web Site</th>
          </tr>
        </thead>
        <tbody>
        {data.map(user => (
                <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.street}, {user.company.cathPhrase}, {user.company.nae}</td>
                <td>{user.company.bs}, {user.address.suite}, {user.address.zipcode}</td>
                <td>{user.website}</td>
              </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
