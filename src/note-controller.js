(function(exports) {
  function Controller(list = new List()){
    this.list = list
    this.list.addNoteToList("Favourite drink: seltzer")
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
