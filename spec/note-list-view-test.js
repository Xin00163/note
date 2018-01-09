function initialize() {
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.list === list, "Accepts list array from arguments on initialization")
};

initialize()

function testForReturnHTMLNoNotes(){
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul></ul>", "Convert empty string to a html")
}
testForReturnHTMLNoNotes()

function testForReturnHTMLOneNote(){
  var list = new List();
  var view = new View(list);
  list.addNoteToList("Lea's note");
  assert.isTrue(view.returnHTML() === "<ul><li><div>Lea's note</div></li></ul>", "Convert one note to a html")
}
testForReturnHTMLOneNote()

function testForReturnHTMLSeveralNote(){
  var list = new List();
  list.addNoteToList("Lea's note");
  list.addNoteToList("Xin's note");
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul><li><div>Lea's note</div></li><li><div>Xin's note</div></li></ul>", "Convert several notes to a html")
}
testForReturnHTMLSeveralNote()
