(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
        if (typeof newAircraftCode !== 'string') 
            return "newAircraft should be a string";
        
        var aircraft = { 
            code: newAircraftCode, 
            services: []
        };

        this.aircrafts.push(aircraft);

        return aircraft;
    };

    global.UAM.removeAircraft = function (aircraftObj) {
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

    global.UAM.addWorkToAircraft = function(aircraftObj,name,timeToExxecute) {
        // !!!
        if (aircraftObj === null || typeof aircraftObj !== 'object') {
            return "Aircraft is not an object or it's null";
        }
        else if (typeof name !== 'string') {
            return "Name should be a string";
        }
        else if (isNaN(timeToExxecute) || timeToExxecute < 0) {
            return "Time is not a number or its value is negative";
        }
        
        var add_service = { 
            name: name, 
            timeToExecute: timeToExxecute
        };

        aircraftObj.services.push(add_service);

        return add_service;
    };
        
    global.UAM.reduceTimeToExecute = function(aircraftObj,time) {
        // !!!
        if (aircraftObj === null || typeof aircraftObj !== 'object') {
            return "Aircraft is not an object or it's null";
        }
        else if (aircraftObj.services === null) {
            return "Services are null";
        }
        else if (isNaN(time) || time < 0) {
            return "Time is not a number or its value is negative";
        }

        aircraftObj.services.forEach(function(service) {
            service.timeToExecute = service.timeToExecute-time;
        });    
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var aircraftsForRepairs = [];
        if (isNaN(maxTimeToExecute) || maxTimeToExecute < 0) {
            return "Time is not a number or its value is negative";
        }
        this.aircrafts.forEach(function(aircraft) {
            if (aircraft.services !== null) {
                aircraft.services.forEach(function(service) {
                    if (service.timeToExecute <= maxTimeToExecute && aircraftsForRepairs.indexOf(aircraft) < 0) {
                        aircraftsForRepairs.push(aircraft);
                    }
                    else {
                        return "There is no such object";
                    }
                });
            }
            else {
                return "Services are null";
            }
        });
        
        return aircraftsForRepairs;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
