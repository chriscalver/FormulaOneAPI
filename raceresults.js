
async function getRaces() {

    const lastRaceEndpoint = new URL("http://ergast.com/api/f1/current/last/results.json");
    const lastRaceResponse = await fetch(lastRaceEndpoint);
    const lastRaceData = await lastRaceResponse.json();
    console.log(lastRaceData);


    const LastRaceName = lastRaceData.MRData.RaceTable.Races[0].raceName;
    const LastRacePos1 = lastRaceData.MRData.RaceTable.Races[0].Results[0].Driver.familyName; 
    const LastRacePos2 = lastRaceData.MRData.RaceTable.Races[0].Results[1].Driver.familyName; 
    const LastRacePos3 = lastRaceData.MRData.RaceTable.Races[0].Results[2].Driver.familyName;
    const LastRacePos4 = lastRaceData.MRData.RaceTable.Races[0].Results[3].Driver.familyName;
    const LastRacePos5 = lastRaceData.MRData.RaceTable.Races[0].Results[4].Driver.familyName;
    const LastRacePos6 = lastRaceData.MRData.RaceTable.Races[0].Results[5].Driver.familyName;
    const LastRacePos7 = lastRaceData.MRData.RaceTable.Races[0].Results[6].Driver.familyName;
    const LastRacePos8 = lastRaceData.MRData.RaceTable.Races[0].Results[7].Driver.familyName;
    const LastRacePos9 = lastRaceData.MRData.RaceTable.Races[0].Results[8].Driver.familyName;
    const LastRacePos10 = lastRaceData.MRData.RaceTable.Races[0].Results[9].Driver.familyName;

    const LastRacePos11 = lastRaceData.MRData.RaceTable.Races[0].Results[10].Driver.familyName;    
    const LastRacePos12 = lastRaceData.MRData.RaceTable.Races[0].Results[11].Driver.familyName;
    const LastRacePos13 = lastRaceData.MRData.RaceTable.Races[0].Results[12].Driver.familyName;
    const LastRacePos14 = lastRaceData.MRData.RaceTable.Races[0].Results[13].Driver.familyName;
    const LastRacePos15 = lastRaceData.MRData.RaceTable.Races[0].Results[14].Driver.familyName;
    const LastRacePos16 = lastRaceData.MRData.RaceTable.Races[0].Results[15].Driver.familyName;
    const LastRacePos17 = lastRaceData.MRData.RaceTable.Races[0].Results[16].Driver.familyName;
    const LastRacePos18 = lastRaceData.MRData.RaceTable.Races[0].Results[17].Driver.familyName;
    const LastRacePos19 = lastRaceData.MRData.RaceTable.Races[0].Results[18].Driver.familyName;
    const LastRacePos20 = lastRaceData.MRData.RaceTable.Races[0].Results[19].Driver.familyName;


    const LastRacePts1 = lastRaceData.MRData.RaceTable.Races[0].Results[0].points;
   
    document.getElementById("lastRaceName").innerHTML = LastRaceName;
    
    document.getElementById("lastRacePos1").innerHTML = LastRacePos1;
    document.getElementById("lastRacePos2").innerHTML = LastRacePos2;
    document.getElementById("lastRacePos3").innerHTML = LastRacePos3;
    document.getElementById("lastRacePos4").innerHTML = LastRacePos4;
    document.getElementById("lastRacePos5").innerHTML = LastRacePos5;
    document.getElementById("lastRacePos6").innerHTML = LastRacePos6;
    document.getElementById("lastRacePos7").innerHTML = LastRacePos7;
    document.getElementById("lastRacePos8").innerHTML = LastRacePos8;
    document.getElementById("lastRacePos9").innerHTML = LastRacePos9;
    document.getElementById("lastRacePos10").innerHTML = LastRacePos10;

    document.getElementById("lastRacePos11").innerHTML = LastRacePos11;
    document.getElementById("lastRacePos12").innerHTML = LastRacePos12;
    document.getElementById("lastRacePos13").innerHTML = LastRacePos13;
    document.getElementById("lastRacePos14").innerHTML = LastRacePos14;
    document.getElementById("lastRacePos15").innerHTML = LastRacePos15;
    document.getElementById("lastRacePos16").innerHTML = LastRacePos16;
    document.getElementById("lastRacePos17").innerHTML = LastRacePos17;
    document.getElementById("lastRacePos18").innerHTML = LastRacePos18;
    document.getElementById("lastRacePos19").innerHTML = LastRacePos19;
    document.getElementById("lastRacePos20").innerHTML = LastRacePos20;

    
    document.getElementById("lastRacePts1").innerHTML = LastRacePts1;


}

getRaces()
    .then(response => {
        console.log('races ok');
    })
    .catch(error => {
        console.log('races NOT ok');
        console.error(error)
    });