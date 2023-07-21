import allContacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

const firstFiveContacts = allContacts.slice(0, 5);

function App() {
  const [ contacts, setContacts ] = useState(firstFiveContacts)

  function addContact() {
    const randomNumber = Math.floor(Math.random() * allContacts.length)
    const randomContact = allContacts[randomNumber]
    if (contacts.some((contact) => contact.id === randomContact.id)) {
      console.log('Contact exists')
    }
    else {
      const newArray = [...contacts, randomContact]
      setContacts(newArray)
    }
  }
  
  function sortByName() {
    const sortedArray = [...contacts].sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    setContacts(sortedArray)
  }

  function sortByPopularity() {
    const sortedArray = [...contacts].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      else if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
     })
    setContacts(sortedArray)
  }
  function deleteButton(contactId) {
    const newArray = [...contacts].filter(contact => {
      return contact.id !== contactId
    })
    setContacts(newArray)
  }

  return (
    <div className="App">
    <h1 className="text-4xl my-5">Ironhack Contacts</h1>
    <button onClick={() => addContact()} className="bg-blue-800 text-white py-2 px-5 mx-5 rounded-md hover:bg-blue-600">Add new random contact</button>
    <button className="bg-blue-800 text-white py-2 px-5 mx-5 rounded-md hover:bg-blue-600" onClick={() => sortByPopularity()}>Sort by popularity</button>
    <button className="bg-blue-800 text-white py-2 px-5 mx-5 rounded-md hover:bg-blue-600" onClick={() => sortByName()}>Sort by name</button>
      <table className="mx-auto border-2 border-black mt-5">
        <tbody>
        <tr className="border-2 border-black">
        <td className="w-32">Picture</td>
        <td className="w-32">Name</td>
        <td className="w-32">Popularity</td>
        <td className="w-32">Won Oscar</td>
        <td className="w-32">Won Emmy</td>
        <td className="w-32">Actions</td>
        </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="w-32 mt-2" src={contact.pictureUrl} alt="profile pic" />{" "}
                </td>
                <td>
                <h2 className="font-bold ml-5">{contact.name}</h2>{" "}
                </td>
                <td>
                {Math.round(contact.popularity)}
                </td>
                <td>{contact.wonOscar && 'Yes'}</td>
                <td>{contact.wonEmmy && 'Yes'}</td>
                <td><button className="py-2 px-5 bg-red-700 rounded-md hover:bg-red-900 text-white" onClick={() => deleteButton(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
