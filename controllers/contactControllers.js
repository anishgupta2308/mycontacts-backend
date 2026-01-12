const contactService = require("../services/contactService");


// const getContacts = async (req, res, next) => {
//   try {
//     const contacts = await contactService.getAllContacts();
//     res.status(200).json(contacts);
//   } catch (error) {
//     next(error);
//   }
// };


const saveContact = async (req, res, next) => {
  try {
    // Directly pass request body to service
    await contactService.insertContact(req.body);

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    next(error);
  }
};



module.exports = {
  // getContacts,
  saveContact
};
