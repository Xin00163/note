function createAList(){
  var list = new List()
  assert.isTrue(list.notes.length === 0, "Note list should be an empty array");
  };

createAList();

function addNoteToList() {
  var list = new List();
  list.addNoteToList("Lea's note");
  assert.isTrue(list.notes.length === 1, "A note was created and added to the list")

};

 addNoteToList();


function getNotesFromList() {
  var list = new List()
  list.addNoteToList("Lea's note");
  assert.isTrue(list.getNotesFromList()[0].returnNote() === "Lea's note", "Return the list of notes")
}

getNotesFromList();
