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

function changeURLAndShowNote(){
  window.addEventListener("hashchange", showCurrentNote)
}

function showCurrentNote(location){
  var index = window.location.hash.split("#")[1].split("/")[1]
  showNote(index)
}

function showNote(index){
  document
    .getElementById("note")
    .innerHTML = controller.list.getNotesFromList(index)
};

function preventSubmitFromRefreshingPage() {
  document.getElementById("text").addEventListener("submit", function(evt) {
    console.log(evt)
    evt.preventDefault();
  });
};

window.onload = function() {
    controller = new Controller()
    controller.list.addNoteToList("Favourite drink: seltzer")
    controller.list.addNoteToList("Nihao")
    controller.list.addNoteToList("Hello")
    controller.listMaker("note")
    changeURLAndShowNote();
    preventSubmitFromRefreshingPage();
};
