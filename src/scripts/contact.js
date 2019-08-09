const createContactHTML = {
    contactPersonHTML(contact) {
        return `
        <section class="contact">
        <h1>${contact.name}</h1>
        <p>${contact.phoneNumber}<p>
        <p>${contact.address}<p>
        <hr/>
        </section>
        `
    }
}

// Use this in ContactList
export default createContactHTML