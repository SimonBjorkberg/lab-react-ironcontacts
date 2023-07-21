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

  return (
    <div className="App">
    <h1 className="text-2xl">Ironhack Contacts</h1>
    <button onClick={() => addContact()} className="bg-blue-300">Add new random contact</button>
      <table className="mx-auto">
        <tbody>
        <tr>
        <td className="w-32">Picture</td>
        <td className="w-32">Name</td>
        <td className="w-32">Popularity</td>
        <td className="w-32">Won <br /> Oscar</td>
        <td className="w-32">Won <br /> Emmy</td>
        </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="w-32" src={contact.pictureUrl} alt="profile pic" />{" "}
                </td>
                <td>
                <h2>{contact.name}</h2>{" "}
                </td>
                <td>
                {Math.round(contact.popularity)}
                </td>
                <td>{contact.wonOscar && 'Won'}</td>
                <td>{contact.wonEmmy && 'Won'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
