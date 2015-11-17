(function (global) {
	if(!global.UAM){
		global.UAM = {};
	}
}(window));


window.addEventListener('DOMContentLoaded', function () {

	var model = new UAM.Model();
	var inputView = new UAM.View(document.querySelector('#view'));
	new UAM.Controller(inputView, model);

});
