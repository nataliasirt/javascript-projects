window.addEventListener("load", function(event)
     {   
        let listedPlanets;
        let listedPlanetsResponse=myFetch();
                
        listedPlanetsResponse.then(function (result) 
          {
            listedPlanets = result;
            // calls the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
          }).then(function () 
           
          { //picks a planet from the JSON
            let randomPlanet = pickPlanet(listedPlanets); 
            // adds info from the JSON to the chosen destination
            addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);           })
    
        document.addEventListener("submit", function(event) 
          {
            event.preventDefault(); 
            const pilotName = document.querySelector("input[name=pilotName]").value;
            const copilotName = document.querySelector("input[name=copilotName]").value;
            const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            const cargoMass = document.querySelector("input[name=cargoMass]").value;
            const list = document.getElementById("faultyItems");
 
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
          }
    )}
);


 