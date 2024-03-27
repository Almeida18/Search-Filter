import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Users } from './users'
import Table from '../Table'
import axios, { Axios } from 'axios'


function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => { 
      const res = await Axios.get("http://localhost:3000")
      setData(res.data);
    };
    fetchUsers()
  }, []);
  //const keys = ["first_name", "last_name","email","role"]
  //const search = (data)=>{
    //return data.filter((item) => keys.some(key=>item[key].toLowerCase().includes(query))
  /*item.first_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) || item.role.toLowerCase().includes(query))*/;
  //};
  

  return (
    <>

    <div><header>Artegor Group Members</header></div>
    
    
      <div>
        <input type="text"  placeholder="Search..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
        
      {/*<ul className="list">
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user)=>(
          <li key={user.id}className="listItem">{user.first_name}</li>
        ))}

        </ul>*/}
        {/*<Table data={Users}/>*/}
        <Table data={data}/> {/*search(Users)*/}
      </div>
    
    </>
  )
      }



export default App
