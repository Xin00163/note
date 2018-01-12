(function(exports) {
  function SingleNoteView(note){
    this.newnote = note;
  };

  SingleNoteView.prototype.printNote = function(){
    return "<li><a href='#notes/" + this.newnote.id + "'>" + this.newnote.returnNote().slice(0, 20) + "</a></li>"
  };

  SingleNoteView.prototype.returnNoteText = function(){
    return this.newnote.returnNote()
  }
  exports.SingleNoteView = SingleNoteView;
})(this);
