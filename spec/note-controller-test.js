function testNoteController(){

  var ListDouble = function() {
    ListDouble.prototype.getNotesFromList = function(){
        return ["note1"];
      };
  };


  var ViewDouble = function() {
    ViewDouble.prototype.returnHTML = function(){
        return "<ul><li><div>note1</div></li></ul>"
      };
  };

  var list = new ListDouble();
  var view = new ViewDouble(list);
  var controller = new Controller(list, view);
  var div = controller.view.returnHTML();
  controller.listMaker('note');

  assert.isTrue(document.getElementById("note").innerHTML === div, "Note controller");
};

testNoteController()


function testShowNote(){
  var controller = new Controller();
  console.log(document.getElementById("note").innerHTML)
  assert.isTrue(document.getElementById("note").innerHTML === "<ul><li><div>note1</div></li></ul>", "When app loads, an list is displayed")
};
testShowNote()
