function testNoteController(){
  var controller = new Controller();
  var div = controller.view.returnHTML();
  console.log(div);
  controller.listMaker('app');

  assert.isTrue(document.getElementById("app").innerHTML === div, "Note controller");
};

testNoteController()
