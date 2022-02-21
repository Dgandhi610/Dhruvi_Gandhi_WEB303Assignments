/*
    Assignment #4
    {Dhruvi Dipenkumar Gandhi}
*/

$(function () {
    // your code here
   
   //part1- geolocation: -used sir's code as a reference for the geolocation.
   
    navigator.geolocation.getCurrentPosition(success, () => {
             console.log("Please enable geolocation in order to use the application");
         });
    
         function success(position) {
    
             console.log("Position object: ", position);
             console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
             console.log("More or less ${position.coords.accuracy} kms."); //providing accuracy in kms.
             $("#locationhere").html(position.timestamp);
             
         //checked after running if it shows the geolocation. runned successfully.


         //part-2 check to see if location value is stored in local storage.
    
    
//declared a new function to show in the localstorage with key and value as locationObject and position.
             $(function (locationObject) {
                localStorage.setItem("locationObject1: ", position.coords.latitude) //added value of latitude as setItem
                localStorage.setItem("locationObject2: ", position.coords.longitude)//added value pf longitude as setItem
                
                if("locationObject" in localStorage){
                console.log("Item exists in localstorage");
                console.log("<h2> Welcome back user </h1>");
                //If else situation to check if the value exist.
            }else{
                console.log("Item does not exist in localstoarge");
                console.log("<h1> Welcome user </h1>");
            } 
            //retrieving

            localStorage.getItem("latitude: ", position.coords.latitude) //added value of latitude as setItem
                localStorage.getItem("longitude: ", position.coords.longitude)//added value pf longitude as setItem

                /* let latitudeJSONStringObject = localStorage.getItem("locationObject1");
                let locationObject1 = JSON.parse(latitudeJSONStringObject);
                let locationObject2 = JSON.parse(longitudeJSONStringObject);
                console.log("my geolocation: ", position.coords.latitude);
                console.log("my geolocation: ", position.coords.longitude); */

            //tried to turn into object but cannot solve the error. Need to clear the doubt to the sir. 
             });
         } 
         
        
         
         
         
         
         
         
         
         
         
         
         




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript

    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


