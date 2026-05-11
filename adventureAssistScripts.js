document.onload = titlePage();

function titlePage() {
    const title = document.getElementById("title");
    document.getElementById("pagetitle").textContent = title;
}

function existingJournalEntries() {

    const entryList = document.getElementById("entrylist");

}

function writeToJournal() {

    let entryID = "entry" + sessionStorage.length;

    sessionStorage.setItem("entryID", entryID);
    sessionStorage.setItem("entryTitle", document.getElementById("entrytitle").value);
    sessionStorage.setItem("entryContent", document.getElementById("entrycontent").value);

    const newEntry = document.createElement("li");

    const entryTitle = document.createElement("h2");
    entryTitle.textContent = sessionStorage.getItem("entryTitle").value;

    const entryContent = document.createElement("p");
    entryContent.textContent = sessionStorage.getItem("entryContent").value;

    newEntry.appendChild(entryTitle);
    newEntry.appendChild(entryContent);
    document.body.getElementById("entrylist").appendChild(newEntry);



}
    
document.addEventListener("submit", writeToJournal);