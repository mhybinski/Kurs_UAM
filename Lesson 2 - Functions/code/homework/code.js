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
        var obj=global.UAM.aircrafts.push({
        code: newAircraftCode,
        services: []
    });
        return obj; 
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        // !!!
        var x=-1;
         for(var i = global.UAM.aircrafts.length-1; i--;){
             if(global.UAM.aircrafts[i] === aircraftObj){ 
                global.UAM.aircrafts.splice(i, 1);
                x=i;
            }
        }
        if(x===(-1))
            return "No such object exist"
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExxecute) {
        // !!!
        var x=-1;
        for(var i = global.UAM.aircrafts.length-1; i--;){
             if (global.UAM.aircrafts[i] === aircraftObj) 
                x=i;
        }
        if(x!=(-1)){ global.UAM.aircrafts[x].services.push({
            name: name,
            timeToExecute: timeToExxecute
            });
        }
        else
            return "No such object exist"; 
    };
        
    global.UAM.reduceTimeToExecute = function(time) {
        // !!!
        var x=-1;
        for(var i = global.UAM.aircrafts.length-1; i--;){
             if (global.UAM.aircrafts[i] === aircraftObj) 
                x=i;
        }
        if(x!=(-1))
             global.UAM.aircrafts[x].services.timeToExecute=time;
        else
            return "No such object exist"; 
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var newArr=[];
        for(var i = global.UAM.aircrafts.length-1; i--;){
             if(global.UAM.aircrafts[i].services.timeToExecute <= maxTimeToExecute) 
                newArr.push(global.UAM.aircrafts[i])
        }
        if(newArr.length > 0)
            return newArr;
        else
            return "No such object exist"; 
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