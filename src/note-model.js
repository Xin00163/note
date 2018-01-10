(function(exports) {

  var idCount = 0;
  function Note (string) {
    this.id = idCount++;
    this.text = string;
  };
  Note.prototype.returnNote = function () {
    return this.text;
  };
  Note.prototype.returnID = function () {
    return this.id;
  };
  exports.Note = Note;

})(this);
