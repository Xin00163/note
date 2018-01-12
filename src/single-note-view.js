(function(exports) {
  function singleNoteView(note){
    this.newnote = note;
  };

  singleNoteView.prototype.printNote = function(){
    // return "<li>" + this.newnote.text + "</li>";
    return "<ul><li><a href='#notes/" + this.newnote.id + "'>" + this.newnote.returnNote().slice(0, 20) + "</a></li></ul>"
  };
  exports.singleNoteView = singleNoteView;
})(this);
