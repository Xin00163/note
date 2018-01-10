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

function onlyShow20Characters(){
  var list = new List()
  list.addNoteToList("12345678901234567890XXX")
  var view = new View(list)
  assert.isTrue(list.getNotesFromList()[0].returnNote().slice(0, 20) === "12345678901234567890", "Ony show first 20 characters of each note in the list")
}

onlyShow20Characters();

function testNoteID(){
  var list = new List();
  list.addNoteToList("test0")
  list.addNoteToList("test1")
  assert.isTrue(list.getNotesFromList().pop().getID() === 1)
}
