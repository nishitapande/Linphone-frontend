import React from "react";

const ContactList = ({ input, contacts }) => {
  // Filter contacts based on the input
  const filteredContacts = contacts.filter((contact) =>
    contact.number.includes(input)
  );

  return (
    <div className="contact-list">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <div>
              <span>👤</span>
              <strong>{contact.number}</strong>
              <p>{contact.address}</p>
            </div>
            <div className="emojis">
              <button>
                <span className="emoji"> 🎙️</span>
              </button>
              <button>
                <span className="emoji"> 📷 </span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
