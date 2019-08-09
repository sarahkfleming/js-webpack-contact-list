// Contact takes a contact as an argument
import createContactHTML from "./contact.js"
import API from "./contactCollection.js"

const contactContainer = document.querySelector("#contact-container")

const contactList = {
    displayContactsInDom(HTMLString) {
        contactContainer.innerHTML += HTMLString
    }
}

const callingAPI = () => {
    contactContainer.innerHTML = ""
    API.getContacts()
        .then(contacts => {
            contacts.forEach(contact => {
                const HTMLVersion = createContactHTML.contactPersonHTML(contact)
                contactList.displayContactsInDom(HTMLVersion)
            })
        })
}

// Import into Main
export default callingAPI