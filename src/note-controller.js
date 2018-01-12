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
  var id = window.location.hash.split("#")[1].split("/")[1]
  showNote(id)
}


function showNote(id){
  var singleNoteView = new SingleNoteView(controller.list.notes[id])
  document
    .getElementById("note")
    .innerHTML = singleNoteView.returnNoteText();
};

function preventSubmitFormRefreshingPage() {
  document.getElementById("text").addEventListener("submit", function(evt) {
    evt.preventDefault();
    controller.list.addNoteToList(document.getElementById("textarea").value)
    controller.listMaker("note")
  });
};


window.onload = function() {
    controller = new Controller()
    controller.list.addNoteToList("Favourite drink: seltzer")
    controller.list.addNoteToList("Nihao")
    controller.list.addNoteToList("Hello")
    controller.listMaker("note")
    changeURLAndShowNote();
    preventSubmitFormRefreshingPage();

};
