

async function getRaces() {

  

    
    const constEndpoint = new URL("http://ergast.com/api/f1/current/constructorStandings.json");    
    const constResponse = await fetch(constEndpoint);
    const constData = await constResponse.json();
    console.log(constData);





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





    




}

getRaces()
    .then(response => {
        console.log('races ok');
    })
    .catch(error => {
        console.log('races NOT ok');
        console.error(error)
    });