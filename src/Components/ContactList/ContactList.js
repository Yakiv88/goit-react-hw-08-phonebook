import s from "./ContactList.module.css";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { allFilteredContacts } from "../../redux/contacts/selector";
import operations from "../../redux/contacts/operations";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ContactList = () => {
  const getContacts = useSelector(allFilteredContacts);
  const dispatch = useDispatch();
  console.log(getContacts);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.listWrapper}>
      <ul className={s.contactsList}>
        {getContacts.map(({ name, number, id }) => {
          return (
            <ol className={s.item} key={id}>
              <div className={s.textWrapper}>
                <p className={s.text}>{name}:</p>
                <p className={s.text}>{number}</p>
              </div>
              <button
                className={s.button}
                type="button"
                onClick={() =>
                  dispatch(
                    operations.deleteContacts(
                      id,
                      toast.success(
                        `Contact ${name} has been deleted successfully!`
                      )
                    )
                  )
                }
              >
                Delete
              </button>
            </ol>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default ContactList;
