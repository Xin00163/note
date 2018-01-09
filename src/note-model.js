(function(exports) {
  function Note (string) {
    this.text = string;
  };
  Note.prototype.returnNote = function () {
    return this.text;

  };
  exports.Note = Note;

})(this);
