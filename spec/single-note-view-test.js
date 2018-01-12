function testPrintNote(){
  var noteDouble = new NoteDouble()
  function NoteDouble(){
    this.id = 1;
    this.text = "Xin's note";
    NoteDouble.prototype.returnNote = function(){
      return this.text;
    }
  }

  var singleNoteView = this.singleNoteView;
  var singleNoteView = new singleNoteView(noteDouble)
  assert.isTrue(singleNoteView.printNote() === "<ul><li><a href='#notes/1'>Xin's note</a></li></ul>", "print note in single note view")
}

testPrintNote();
