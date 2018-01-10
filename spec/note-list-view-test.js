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
  console.log(view.returnHTML())
  assert.isTrue(view.returnHTML() === "<ul><li><div><a href='/#notes/0'>Lea's note</a></div></li></ul>", "Convert one note to a html")
}
testForReturnHTMLOneNote()

function testForReturnHTMLSeveralNote(){
  var list = new List();
  list.addNoteToList("Lea's note");
  list.addNoteToList("Xin's note");
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul><li><div><a href='/#notes/0'>Lea's note</a></div></li><li><div><a href='/#notes/1'>Xin's note</a></div></li></ul>", "Convert several notes to a html")
}
testForReturnHTMLSeveralNote()
