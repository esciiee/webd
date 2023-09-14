import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";
import "../styles.css";

function App() {
  return (
    <div>
        <Avatar imgURL="./suraj_edited.jpg" />
      {contacts.map((contact) => (
        <Card
          key={contact.phone} // Using phone number as the key
          name={contact.name}
          imgURL={contact.imgURL}
          ph={contact.phone}
          mail={contact.email}
        />
      ))}
    </div>
  );
}

export default App;

