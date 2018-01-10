function testPrintNote(){
  var note = new Note("Xin's note")
  // console.log(note)
  // console.log(this)
  // console.log(this.singleNoteView)
  var singleNoteView = this.singleNoteView;
  var singleNoteView = new singleNoteView(note)
  assert.isTrue(singleNoteView.printNote() === "<li>Xin's note</li>", "print note in single note view")
}

testPrintNote();
