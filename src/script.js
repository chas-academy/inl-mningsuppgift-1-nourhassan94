// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};

// Ange en grupp
let groupToShow = "arbete";

function showContacts(contactBook, groupToShow) {
  let result = "";
  
  // Loopar igenom alla kontakter
  for (let contact of contactBook.contacts) {
    // Kollar om kontakten tillhör den valda gruppen
    if (contact.group === groupToShow) {
      result += `${contact.name}: ${contact.phone}\n`;
    }
  }
  
  // Om inga kontakter hittades, returnera meddelandet
  if (result === "") {
    return "Inga kontakter i denna grupp.";
  }

  return result.trim();
}

// Rör ej denna kod
console.log(showContacts(contactBook, groupToShow));

module.exports = { showContacts };