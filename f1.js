var date = new Date();
console.log(date);

var myEpoch = date.getTime() / 1000.0;
let Monday = myEpoch.toFixed();
console.log(Monday);


async function getRaces() {

    const driverEndpoint = new URL("http://ergast.com/api/f1/current/driverStandings.json");
    const driverResponse = await fetch(driverEndpoint);
    const driverData = await driverResponse.json();
    console.log(driverData);

    
    const constEndpoint = new URL("http://ergast.com/api/f1/current/constructorStandings.json");
    
    const constResponse = await fetch(constEndpoint);
    const constData = await constResponse.json();
    console.log(constData);


    const lastRaceEndpoint = new URL("http://ergast.com/api/f1/current/last/results.json");
    const lastRaceResponse = await fetch(lastRaceEndpoint);
    const lastRaceData = await lastRaceResponse.json();
    console.log(lastRaceData);


    const Pos1 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName; 
    const Pos2 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName;
    const Pos3 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName;
    const Pos4 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName;
    const Pos5 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName;
    const Pos6 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName;
    const Pos7 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName;
    const Pos8 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.familyName;
    const Pos9 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.familyName;
    const Pos10 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.familyName;

    const Pts1 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points; 
    const Pts2 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points; 
    const Pts3 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points; 
    const Pts4 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points; 
    const Pts5 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points; 
    const Pts6 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points; 
    const Pts7 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points; 
    const Pts8 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].points; 
    const Pts9 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].points; 
    const Pts10 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].points; 


    document.getElementById("pos1").innerHTML = Pos1;
    document.getElementById("pos2").innerHTML = Pos2;
    document.getElementById("pos3").innerHTML = Pos3;
    document.getElementById("pos4").innerHTML = Pos4;
    document.getElementById("pos5").innerHTML = Pos5;
    document.getElementById("pos6").innerHTML = Pos6;
    document.getElementById("pos7").innerHTML = Pos7;
    document.getElementById("pos8").innerHTML = Pos8;
    document.getElementById("pos9").innerHTML = Pos9;
    document.getElementById("pos10").innerHTML = Pos10;
    
    document.getElementById("pts1").innerHTML = Pts1;
    document.getElementById("pts2").innerHTML = Pts2;
    document.getElementById("pts3").innerHTML = Pts3;
    document.getElementById("pts4").innerHTML = Pts4;   
    document.getElementById("pts5").innerHTML = Pts5;
    document.getElementById("pts6").innerHTML = Pts6;
    document.getElementById("pts7").innerHTML = Pts7;
    document.getElementById("pts8").innerHTML = Pts8;
    document.getElementById("pts9").innerHTML = Pts9;
    document.getElementById("pts10").innerHTML = Pts10;



    const constPos1 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0].Constructor.name; 
    const constPos2 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1].Constructor.name;
    const constPos3 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[2].Constructor.name;
    const constPos4 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[3].Constructor.name;
    const constPos5 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[4].Constructor.name;
    const constPos6 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[5].Constructor.name;
    const constPos7 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[6].Constructor.name;
    const constPos8 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[7].Constructor.name;
    const constPos9 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[8].Constructor.name;
    const constPos10 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[9].Constructor.name;

    const constPts1 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0].points; 
    const constPts2 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1].points; 
    const constPts3 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[2].points; 
    const constPts4 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[3].points; 
    const constPts5 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[4].points; 
    const constPts6 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[5].points; 
    const constPts7 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[6].points; 
    const constPts8 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[7].points; 
    const constPts9 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[8].points; 
    const constPts10 = constData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[9].points; 


    document.getElementById("constpos1").innerHTML = constPos1;
    document.getElementById("constpos2").innerHTML = constPos2;
    document.getElementById("constpos3").innerHTML = constPos3;
    document.getElementById("constpos4").innerHTML = constPos4;
    document.getElementById("constpos5").innerHTML = constPos5;
    document.getElementById("constpos6").innerHTML = constPos6;
    document.getElementById("constpos7").innerHTML = constPos7;
    document.getElementById("constpos8").innerHTML = constPos8;
    document.getElementById("constpos9").innerHTML = constPos9;
    document.getElementById("constpos10").innerHTML = constPos10;
    
    document.getElementById("constpts1").innerHTML = constPts1;
    document.getElementById("constpts2").innerHTML = constPts2;
    document.getElementById("constpts3").innerHTML = constPts3;
    document.getElementById("constpts4").innerHTML = constPts4;   
    document.getElementById("constpts5").innerHTML = constPts5;
    document.getElementById("constpts6").innerHTML = constPts6;
    document.getElementById("constpts7").innerHTML = constPts7;
    document.getElementById("constpts8").innerHTML = constPts8;
    document.getElementById("constpts9").innerHTML = constPts9;
    document.getElementById("constpts10").innerHTML = constPts10;



    const RaceNumber = lastRaceData.MRData.RaceTable.Races[0].round;
    const NextRaceNumber = Number(RaceNumber) + 1;    

    const LastRaceName = lastRaceData.MRData.RaceTable.Races[0].raceName;
    const LastRacePos1 = lastRaceData.MRData.RaceTable.Races[0].Results[0].Driver.familyName; 
    const LastRacePos2 = lastRaceData.MRData.RaceTable.Races[0].Results[1].Driver.familyName; 
    const LastRacePos3 = lastRaceData.MRData.RaceTable.Races[0].Results[2].Driver.familyName; 
   
    document.getElementById("lastRaceName").innerHTML = LastRaceName;
    
    document.getElementById("lastRacePos1").innerHTML = LastRacePos1;
    document.getElementById("lastRacePos2").innerHTML = LastRacePos2;
    document.getElementById("lastRacePos3").innerHTML = LastRacePos3;
    


    const RaceEndpoint = new URL(`http://ergast.com/api/f1/2023/${NextRaceNumber}.json`);
    const RaceResponse = await fetch(RaceEndpoint);
    const RaceData = await RaceResponse.json();
    console.log(RaceData);

    const NextRaceName = RaceData.MRData.RaceTable.Races[0].raceName;
    const NextRaceDate = RaceData.MRData.RaceTable.Races[0].date;

    document.getElementById("NextRaceName").innerHTML = NextRaceName;
    document.getElementById("NextRaceDate").innerHTML = NextRaceDate;


}

getRaces()
    .then(response => {
        console.log('races ok');
    })
    .catch(error => {
        console.log('races NOT ok');
        console.error(error)
    });