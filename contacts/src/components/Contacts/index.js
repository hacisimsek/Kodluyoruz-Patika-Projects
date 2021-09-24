import {useState, useEffect} from 'react';
import List from './List/index';
import Form from './Form/index';
import "./styles.css"

function Contacts() {
    const[contacts, setContacts] = useState([])
    useEffect(()=>{
        console.log(contacts);
    },[contacts]);
    
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts}  contacts={contacts}/>

    </div>
  );
}

export default Contacts;
