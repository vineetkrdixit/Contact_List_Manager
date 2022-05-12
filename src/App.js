import "./App.css";
import ContactCard from "./Components/Contact Card/ContactCard";
import ContactForm from "./Components/Contact Form/ContactForm";
import ContactList from "./Components/Contact List/ContactList";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <ContactForm />
      <ContactList />
      <ContactCard />
    </>
  );
}

export default App;
