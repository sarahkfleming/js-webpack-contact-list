const API = {
    getContacts() {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    saveContacts(newContact) {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact),
        })
    }
}

export default API