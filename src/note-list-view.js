(function(exports){
  var View = function(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {
   string = ""
   for (var i=0; i < this.list.notes.length; i ++){
     string += "<li><div><a href='#notes/" + i + "'>" + this.list.notes[i].returnNote().slice(0, 21) + "</a></div></li>";
   };
   return "<ul>" + string + "</ul>";
  };


  exports.View = View;
})(this);
