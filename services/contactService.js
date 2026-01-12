const db = require("../config/firebase");

const insertContact = async ({ firstname, lastname, email, phone }) => {
  const docRef = await db.collection("contacts").add({
    firstname,
    lastname,
    email,
    phone,
    createdAt: new Date(),
  });

  return docRef.id;
};

module.exports = {
  insertContact,
};
