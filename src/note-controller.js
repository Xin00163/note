(function(exports) {
  function Controller(list = new List(), view = new View(list)){
    this.list = list
    this.view = view
  };

  Controller.prototype.listMaker = function(element){
    document.getElementById(element).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);




window.onload = function() {
    controller = new Controller()
    controller.list.addNoteToList("Favourite drink: seltzer")
    controller.listMaker('app')

};
