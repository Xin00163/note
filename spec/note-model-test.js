function checkTextFormat(){
  var note = new Note("My favourite language is Ruby");

  assert.isTrue(note.text === "My favourite language is Ruby", "When initialized the note is in text format");
  };

  checkTextFormat();

  function returnNote(){
    var note = new Note("Xin's note");
    assert.isTrue(note.returnNote() === "Xin's note", "return the note when method returnNote is called");
  };

  returnNote();

  function returnID(){
    var note = new Note("Keran's note")
    console.log(note.returnID())
    assert.isTrue(note.returnID() === 2, "return the note id")
  }

  returnID();
