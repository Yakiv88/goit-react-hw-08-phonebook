import s from "./ContactForm.module.css";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";
import operations from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/selector";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const inputChange = (evt) => {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "number":
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }
    dispatch(operations.addContacts({ name, number }));
    toast.success(`Contact ${name} has been added to the list~`);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <div className={s.formWrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.labelWrapper}>
            <label className={s.label}>
              Name
              <input
                className={s.input}
                value={name}
                type="text"
                name="name"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={inputChange}
              />
            </label>

            <label className={s.label}>
              Number
              <input
                className={s.input}
                type="tel"
                value={number}
                name="number"
                placeholder="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                onChange={inputChange}
              />
            </label>
          </div>

          <button className={s.button}>Add contact</button>
        </form>
      </div>
      <div>
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default ContactForm;
