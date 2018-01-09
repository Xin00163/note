(function(exports) {
  function List() {
    this.notes = [];
  };
  // var note = new Note("note")
    List.prototype.addNoteToList = function (note) {
    this.notes.push(note);
  };

    List.prototype.getNotesFromList = function () {
      return this.notes
    };

  exports.List = List;
})(this);
