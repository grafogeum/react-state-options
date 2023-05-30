import { useState } from 'react';

function App() {

  const [user, setUser] = useState({
    name: 'Jan',
    profession: 'Developer',
    address: {
      city: 'Szczecin'
    }
  })

  const onChangeName = (e) => {
    const newUser = {
      ...user,
      name: e.target.value
    }
    setUser(newUser)
  }
  const onCityChange = (e) => {
    const newUserCity = {
      ...user,
      address: {
        ...user.address,
        city: e.target.value
      }
    }
    setUser(newUserCity)
  }
  return (
    <>
      <div>
        <input type="text" value={user.name} onChange={onChangeName} />
        <input type="text" value={user.address.city} onChange={onCityChange} />
        <div>{user.name}</div>
        <div>{user.profession}</div>
        <div>{user.address.city}</div>
      </div>
    </>
  )
}

export default App
