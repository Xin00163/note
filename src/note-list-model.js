(function(exports) {
  function List() {
    this.notes = [];
  };

    List.prototype.addNoteToList = function (note) {
      var note = new Note(note)
      this.notes.push(note);
  };

    List.prototype.getNotesFromList = function (index) {
      return this.notes[index].returnNote();
    };

  exports.List = List;
})(this);
