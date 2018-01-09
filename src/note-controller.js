(function(exports) {
  function Controller(list = new List()){
    this.list = list
    note = new Note("Favourite drink: seltzer")
    this.list.addNoteToList(note)
    this.view = new View(list)
  };
  exports.Controller = Controller;
})(this);

Controller.prototype.listMaker = function(element){
  var element = document.getElementById("app");
  element.innerHTML = this.view.returnHTML();
};


window.onload = function() {

};
