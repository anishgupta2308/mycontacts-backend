const db = require("../config/db");


// const getAllContacts = async () => {
//   const [rows] = await db.execute("SELECT * FROM contacts");
//   return rows;
// };


const insertContact = async ({ firstname, lastname, email, phone }) => {
  await db.execute(
    "INSERT INTO contacts (firstname, lastname, email, phone) VALUES (?, ?, ?, ?)",
    [firstname, lastname, email, phone]
  );
};

module.exports = {
  // getAllContacts,
  insertContact
};
