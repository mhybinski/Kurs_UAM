(function (global) {
    var Controller = function (view, model) {
        this.view = view;
        this.view.setController(this);
        this.model = model;

        var thisContext = this;
        this.model.aircrafts.forEach(function(item) {
            thisContext.view.addItemToView(item);
        });
    };

    Controller.prototype.remove = function (item) {
        this.model.removeAircraft(item);
        this.view.remove(item);
    }

    Controller.prototype.changeTime = function (item,amount) {
        if(item.time + amount < 0){
            return;
        }
        this.model.changeTime(item,amount);
        this.view.refreshTime(item);
    }

    Controller.prototype.refreshRepairList = function (amount) {
        var items = this.model.getAircraftsForRepairs(amount);
        this.view.refreshRepairList(items);
    }

    Controller.prototype.add = function (aircraftCode) {
        var aircraft = this.model.addAircraft(aircraftCode);
        this.view.addItemToView(aircraft);
    }

    global.UAM.Controller = Controller;

}(window));