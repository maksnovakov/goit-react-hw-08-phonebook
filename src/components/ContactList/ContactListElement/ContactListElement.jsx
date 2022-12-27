import { useDeleteContactMutation } from 'services/contactsAPI';
import PropTypes from 'prop-types';
import style from './ContactListElement.mofule.css';

const ContactListElement = ({ id, name, number }) => {
    const [deleteContact] = useDeleteContactMutation();
    return (
        <>
            <li className={style.ContactList__item} key={id}>
                <span className={style.ContactList__text}>
                    {name}: {number}
                </span>
                <button
                    className={style.ContactList__button}
                    onClick={() => deleteContact(id)}
                >
                    Delete
                </button>
            </li>
        </>
    );
};

ContactListElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListElement;