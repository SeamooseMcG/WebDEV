


function writeToJournal() {

    const newEntry = document.createElement("li");

    const journalEntry = document.getElementById("entrytitle");
    const journalContent = document.getElementById("entrycontent");

    newEntry.innerHTML = `<h2>${journalEntry}</h2><p>${journalContent}</p>`;

    document.getElementById("entrylist").appendChild(newEntry);


}
    
document.addEventListener("submit", writeToJournal);