function testSummaryToHTML(){
  var noteDouble = new NoteDouble()
  function NoteDouble(){
    this.id = 1;
    this.text = "Xin's note";
    NoteDouble.prototype.returnNote = function(){
      return this.text;
    }
  }

  // var singleNoteView = this.singleNoteView;
  var singleNoteView = new SingleNoteView(noteDouble)
  assert.isTrue(singleNoteView.printNote() === "<li><a href='#notes/1'>Xin's note</a></li>", "print note in single note view")
}

testPrintNote();
