import API from "./contactCollection.js"

const submitButton = document.querySelector("#record-contact")

const getContactName = document.querySelector("#contactName")
const getContactPhoneNumber = document.querySelector("#phoneNumber")
const getContactAddress = document.querySelector("#address")

const newContact = (name, phoneNumber, address) => {
    return {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value
    }
}

const addNewContactToAPI = submitButton.addEventListener("click", () => {
    const createOneContact = newContact(getContactName, getContactPhoneNumber, getContactAddress)
    API.saveContacts(createOneContact)
    .then(API.getContacts)
})


export default addNewContactToAPI