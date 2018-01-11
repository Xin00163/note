function testNoteController(){

  function ListDouble(){};

  ListDouble.prototype = {
    getNotesFromList: function(){
      return ["note1"];
    }
  };

  function ViewDouble(){};

  ViewDouble.prototype = {
    returnHTML: function(){
      return "<ul><li>note1</li></ul>"
    }
  };

  var list = new ListDouble();
  var view = new ViewDouble(list);
  var controller = new Controller(list, view);
  var div = controller.view.returnHTML();

  controller.listMaker('app');

  assert.isTrue(document.getElementById("app").innerHTML === div, "Note controller");
};

testNoteController()

// function testChangeURLAndShowNote(){
//   var list = new List();
//   var view = new View(list);
//   var controller = new Controller(list, view);
//   var index = 0;
//
//   controller.listMaker("note");
//   assert.isTrue(document.getElementById("note").innerHTML === controller.list.getNotesFromList(0), "Change url and show current note");
// }
//
// testChangeURLAndShowNote()
