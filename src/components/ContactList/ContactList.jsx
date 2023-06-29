import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
