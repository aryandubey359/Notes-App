const noteslist = document.getElementById("noteslist");
const notes = document.getElementById("notes");
const listofnotes = document.getElementById("listofnotes");
const newnote = document.getElementById("newnote");
const editnote = document.getElementById("editnote");
const savenote = document.getElementById("savenote");
const textarea = document.getElementById("textarea");
const textareasaved = document.getElementById("textareasaved");
const text = document.getElementById("text");
const save = document.getElementById("save");
const textsaved = document.getElementById("textsaved");
const deletenote = document.getElementById("deletenote");
var textnote;
var listcounter = 0;

newnote.addEventListener("click", () => {
    console.log("New note created");
    localStorage.setItem("Notetext", JSON.stringify(text.value));
})

noteslist.addEventListener("click", () => {
    listcounter ++;
    console.log(listcounter);
    if(listcounter % 2 == 0){
        notes.style.display = "flow-root";
        listofnotes.style.display = "none";
    }
    else{
        notes.style.display = "none";
        listofnotes.style.display = "flow-root";    
    }
})

deletenote.addEventListener("click", () => {
    textarea.style.display = "flex";
    textareasaved.style.display = "none";
    textarea.value = "";
    textarea.style.height = "300px";
    textarea.style.marginTop = "2rem";
    textarea.style.marginBottom = "2rem";
    textsaved.value= "";
    textsaved.style.height = "300px";
    textarea.style.marginTop = "2rem";
    textarea.style.marginBottom = "2rem";
    text.value= "";
    save.style.display = "none";
    console.log("Deleted");
})

editnote.addEventListener("click", () => {
    textarea.style.display = "flex";
    save.style.display = "flex";
    textareasaved.style.display = "none";
    console.log("Editing Mode");
})

savenote.addEventListener("click", () => {
    textnote = text.value;
    textsaved.innerText = textnote;
    textnote = "";
    textarea.style.display = "none";
    save.style.display = "none";
    textareasaved.style.display = "flex";
    console.log("Saved");
})