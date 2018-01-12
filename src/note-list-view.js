(function(exports){
  var View = function(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {

  return "<ul>" +

  this.list.returnAllNotes().map( note => "<li><a href='#notes/" + note.id + "'>" + note.returnNote().slice(0, 20) + "</a></li>").join("") + "</ul>"
}


  exports.View = View;
})(this);
