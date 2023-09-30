
async function getRaces() {

    const driverEndpoint = new URL("http://ergast.com/api/f1/current/driverStandings.json");
    const driverResponse = await fetch(driverEndpoint);
    const driverData = await driverResponse.json();
    console.log(driverData);

    
    


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
    const Pos11 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[10].Driver.familyName; 
    const Pos12 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[11].Driver.familyName;
    const Pos13 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[12].Driver.familyName;
    const Pos14 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[13].Driver.familyName;
    const Pos15 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[14].Driver.familyName;
    const Pos16 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[15].Driver.familyName;
    const Pos17 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[16].Driver.familyName;
    const Pos18 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[17].Driver.familyName;
    const Pos19 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[18].Driver.familyName;
    const Pos20 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[19].Driver.familyName;

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
    const Pts11 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[10].points; 
    const Pts12 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[11].points; 
    const Pts13 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[12].points; 
    const Pts14 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[13].points; 
    const Pts15 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[14].points; 
    const Pts16 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[15].points; 
    const Pts17 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[16].points; 
    const Pts18 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[17].points; 
    const Pts19 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[18].points; 
    const Pts20 = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings[19].points; 


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
    document.getElementById("pos11").innerHTML = Pos11;
    document.getElementById("pos12").innerHTML = Pos12;
    document.getElementById("pos13").innerHTML = Pos13;
    document.getElementById("pos14").innerHTML = Pos14;
    document.getElementById("pos15").innerHTML = Pos15;
    document.getElementById("pos16").innerHTML = Pos16;
    document.getElementById("pos17").innerHTML = Pos17;
    document.getElementById("pos18").innerHTML = Pos18;
    document.getElementById("pos19").innerHTML = Pos19;
    document.getElementById("pos20").innerHTML = Pos20;

    
    
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
    document.getElementById("pts11").innerHTML = Pts11;
    document.getElementById("pts12").innerHTML = Pts12;
    document.getElementById("pts13").innerHTML = Pts13;
    document.getElementById("pts14").innerHTML = Pts14;   
    document.getElementById("pts15").innerHTML = Pts15;
    document.getElementById("pts16").innerHTML = Pts16;
    document.getElementById("pts17").innerHTML = Pts17;
    document.getElementById("pts18").innerHTML = Pts18;
    document.getElementById("pts19").innerHTML = Pts19;
    document.getElementById("pts20").innerHTML = Pts20;

    



}

getRaces()
    .then(response => {
        console.log('races ok');
    })
    .catch(error => {
        console.log('races NOT ok');
        console.error(error)
    });