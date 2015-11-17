(function (global) {

	var Model = function(){};
    
    Model.prototype.aircrafts = [];
      
    Model.prototype.aircrafts.push({
        code: 'SP-ABC',
        time: 120
    });

    Model.prototype.addAircraft = function (newAircraftCode) {
  
        if (typeof newAircraftCode !== 'string') 
            return "newAircraft should be a string";
        
        var aircraft = {
            code: newAircraftCode, 
            time: 0
        };

        this.aircrafts.push(aircraft);

        return aircraft;
    };

    Model.prototype.removeAircraft = function (aircraftObj) {
        // !!!
        var index = this.aircrafts.indexOf(aircraftObj);

        if (index < 0) {
            return "There's no such aircraft";
        }
        else {
            this.aircrafts.splice(index, 1);
            return true;
        }
        
    };
        
    Model.prototype.changeTime = function(aircraftObj,time) {
        // !!!
        if (aircraftObj === null || typeof aircraftObj !== 'object') {
            return "Aircraft is not an object or it's null";
        }
        else if (isNaN(time)) {
            return "Time is not a number or its value is negative";
        }

        aircraftObj.time = aircraftObj.time + time;
    };
    
    Model.prototype.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var aircraftsForRepairs = [];
        if (isNaN(maxTimeToExecute) || maxTimeToExecute < 0) {
            return "Time is not a number or its value is negative";
        }
        this.aircrafts.forEach(function(aircraft) {
            if (aircraft.time <= maxTimeToExecute && aircraftsForRepairs.indexOf(aircraft) < 0) {
                aircraftsForRepairs.push(aircraft);
            }
        });
        
        return aircraftsForRepairs;
    };

    global.UAM.Model = Model;
    
}(window));