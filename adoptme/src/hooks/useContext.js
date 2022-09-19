import { useState, useContext, createContext } from "react";

const UserContext = createContext([
{
  firstName: 'Lala',
  lastName: 'Land',
  suffix: 1,
  email: 'lalaland.com'
}
])


const LevelFive = () => {

  const [user, setuser] = useContext(UserContext);
  return (
    <div>
    <h2> {user.firstName}{user.lastName} - {user.suffix} </h2>
    <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick= { () => {setuser(Object.assign({}, user, {suffix: user.suffix+1} ))} }> 
    Increase
    </button>
    </div>
    )
}


const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);

const UserContextComponent = () => {
 const userState = useState({
  firstName: 'Lili',
  lastName: 'Land',
  suffix: 100,
  email: 'lalaland.com'
 })

 return (
 <div className="p-5 text-center">
 <UserContext.Provider value={userState}>
  <h2> UserContextComponent First level</h2>
  <LevelTwo/>
 </UserContext.Provider>
 </div>
 )
}
export default UserContextComponent;
