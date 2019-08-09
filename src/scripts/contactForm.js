import API from "./contactCollection.js"
import callingAPI from "./contactList.js"

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

const addNewContactToAPI = () => {
    submitButton.addEventListener("click", () => {
        const createOneContact = newContact(getContactName, getContactPhoneNumber, getContactAddress)
        API.saveContacts(createOneContact)
            // Clear out container
            .then(callingAPI)
            .then(() => {
                getContactName.value = ""
                getContactPhoneNumber.value = ""
                getContactAddress.value = ""
            })
    })
}

// Import into Main
export default addNewContactToAPI