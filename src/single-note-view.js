(function(exports) {
  function singleNoteView(note){
    this.newnote = note;
  };

  singleNoteView.prototype.printNote = function(){
    return "<li>" + this.newnote.text + "</li>";

  };
  exports.singleNoteView = singleNoteView;
})(this);
