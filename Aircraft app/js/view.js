(function (global) {

    var View = function (view) {
        this.view = view;
        this.list = this.view.querySelector('#list');
        this.repairList = this.view.querySelector('#repairList');
    };

    View.prototype.remove = function (item) {
        var element = this.view.querySelector('#id' + makeSafeForCSS(item.code));
        this.list.removeChild(element);
    };

    View.prototype.addItemToView = function (item) {
        var li = document.createElement('li'),
            thisContext = this;

        li.setAttribute('id', 'id' + makeSafeForCSS(item.code));

        var nameSpan = document.createElement('span');
        nameSpan.setAttribute('class', 'name');
        nameSpan.innerHTML = item.code;

        var timeSpan = document.createElement('span');
        timeSpan.setAttribute('class', 'time');
        timeSpan.innerHTML = item.time;

        li.appendChild(nameSpan);
        li.appendChild(timeSpan);

        var removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove aircraft";        
        li.appendChild(removeButton);

        removeButton.addEventListener('click', function () {
            thisContext.controller.remove(item);
        });

        var decreaseTimeButton = document.createElement('button');
        decreaseTimeButton.innerHTML = "Decrease Time";
        li.appendChild(decreaseTimeButton);

        var increaseTimeButton = document.createElement('button');
        increaseTimeButton.innerHTML = "Increase Time";
        li.appendChild(increaseTimeButton);

        var workTime = function(){
            return Number(this.view.querySelector('#workTime').innerHTML);
        };

        increaseTimeButton.addEventListener('click', function () {
            thisContext.controller.changeTime(item,workTime());
        });

        decreaseTimeButton.addEventListener('click', function () {
            thisContext.controller.changeTime(item,-workTime());
        });

        this.list.appendChild(li);
    };

    View.prototype.refreshTime = function (item) {
        var element = this.view.querySelector('#id' + makeSafeForCSS(item.code) + ' span.time');
        element.innerHTML = item.time;
    };

    View.prototype.setController = function (controller) {
        this.controller = controller;
        this.bindButtons();
    };

    View.prototype.bindButtons = function () {
        var thisContext = this;
        this.view.querySelector('#refreshRepairListButton').addEventListener('click', function(){
            var workTime2 = Number(thisContext.view.querySelector('#workTime2').innerHTML);
            thisContext.controller.refreshRepairList(workTime2);
        });
        this.view.querySelector('#addButton').addEventListener('click', function(){
            var textField = thisContext.view.querySelector('#aircraftCode');
            thisContext.controller.add(textField.value);
        });
    };

    View.prototype.refreshRepairList = function (items) {
        while (this.repairList.firstChild) {
            this.repairList.removeChild(this.repairList.firstChild);
        }
        items.forEach(function(item){
            var li = document.createElement('li');
            li.innerHTML = item.code + ": " + item.time;
            this.repairList.appendChild(li);
        });
    };

    global.UAM.View = View;
}(window));