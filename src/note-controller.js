(function(exports) {


  var Controller = function(list = new List){
    this.list = list
    note = new Note("Favourite drink: seltzer")
    this.list.addNoteToList(note)
    view = new View(list)

    document.getElementById("app").innerHTML = view.returnHTML()
  };

  exports.Controller = Controller;
})(this);

window.onload = function() {
  controller = new Controller();
};
