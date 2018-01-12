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
  var noteDouble = new NoteDouble()
  function NoteDouble() {
    this.id = 1;
    this.text = "Lea's note";
    NoteDouble.prototype.returnNote = function(){
      return this.text;
    }
  }
  list.notes.push(noteDouble);
  assert.isTrue(view.returnHTML() === "<ul><li><a href='#notes/1'>Lea's note</a></li></ul>", "Convert one note to a html")
}
testForReturnHTMLOneNote()

function testForReturnHTMLSeveralNote(){
  var list = new List();
  var view = new View(list);
  var noteDouble = new NoteDouble()
  var noteDouble2 = new NoteDouble2()
  function NoteDouble() {
    this.id = 1;
    this.text = "Lea's note";
    NoteDouble.prototype.returnNote = function(){
      return this.text;
    }
  }
  function NoteDouble2() {
    this.id = 2;
    this.text = "Xin's note";
    NoteDouble2.prototype.returnNote = function(){
      return this.text;
    }
  }
  list.notes.push(noteDouble, noteDouble2);

  assert.isTrue(view.returnHTML() === "<ul><li><a href='#notes/1'>Lea's note</a></li><li><a href='#notes/2'>Xin's note</a></li></ul>", "Convert several notes to a html")
}
testForReturnHTMLSeveralNote()
