(function(exports) {
  function Controller(list = new List()){
    this.list = list
    this.list.addNoteToList("Favourite drink: seltzer")
    this.view = new View(this.list)
  };

  Controller.prototype.listMaker = function(element){
    document.getElementById(element).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);




window.onload = function() {



};
