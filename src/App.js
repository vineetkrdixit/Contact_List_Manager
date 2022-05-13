import { useState } from "react";
import "./App.css";
import ContactCard from "./Components/Contact Card/ContactCard";
import ContactForm from "./Components/Contact Form/ContactForm";
import ContactList from "./Components/Contact List/ContactList";
import Header from "./Components/Header/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Header />
      <ContactForm />
      {/* <ContactList contacts={contacts} /> */}
      <ContactCard />
    </>
  );
}

export default App;
