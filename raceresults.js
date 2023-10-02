
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

    const LnLastRacePos1 = lastRaceData.MRData.RaceTable.Races[0].Results[0].Driver.givenName; 
    const LnLastRacePos2 = lastRaceData.MRData.RaceTable.Races[0].Results[1].Driver.givenName; 
    const LnLastRacePos3 = lastRaceData.MRData.RaceTable.Races[0].Results[2].Driver.givenName;
    const LnLastRacePos4 = lastRaceData.MRData.RaceTable.Races[0].Results[3].Driver.givenName;
    const LnLastRacePos5 = lastRaceData.MRData.RaceTable.Races[0].Results[4].Driver.givenName;
    const LnLastRacePos6 = lastRaceData.MRData.RaceTable.Races[0].Results[5].Driver.givenName;
    const LnLastRacePos7 = lastRaceData.MRData.RaceTable.Races[0].Results[6].Driver.givenName;
    const LnLastRacePos8 = lastRaceData.MRData.RaceTable.Races[0].Results[7].Driver.givenName;
    const LnLastRacePos9 = lastRaceData.MRData.RaceTable.Races[0].Results[8].Driver.givenName;
    const LnLastRacePos10 = lastRaceData.MRData.RaceTable.Races[0].Results[9].Driver.givenName;


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

    const LnLastRacePos11 = lastRaceData.MRData.RaceTable.Races[0].Results[10].Driver.givenName;    
    const LnLastRacePos12 = lastRaceData.MRData.RaceTable.Races[0].Results[11].Driver.givenName;
    const LnLastRacePos13 = lastRaceData.MRData.RaceTable.Races[0].Results[12].Driver.givenName;
    const LnLastRacePos14 = lastRaceData.MRData.RaceTable.Races[0].Results[13].Driver.givenName;
    const LnLastRacePos15 = lastRaceData.MRData.RaceTable.Races[0].Results[14].Driver.givenName;
    const LnLastRacePos16 = lastRaceData.MRData.RaceTable.Races[0].Results[15].Driver.givenName;
    const LnLastRacePos17 = lastRaceData.MRData.RaceTable.Races[0].Results[16].Driver.givenName;
    const LnLastRacePos18 = lastRaceData.MRData.RaceTable.Races[0].Results[17].Driver.givenName;
    const LnLastRacePos19 = lastRaceData.MRData.RaceTable.Races[0].Results[18].Driver.givenName;
    const LnLastRacePos20 = lastRaceData.MRData.RaceTable.Races[0].Results[19].Driver.givenName;

    
    


    const LastRacePts1 = lastRaceData.MRData.RaceTable.Races[0].Results[0].points;
    const LastRacePts2 = lastRaceData.MRData.RaceTable.Races[0].Results[1].points;
    const LastRacePts3 = lastRaceData.MRData.RaceTable.Races[0].Results[2].points;
    const LastRacePts4 = lastRaceData.MRData.RaceTable.Races[0].Results[3].points;
    const LastRacePts5 = lastRaceData.MRData.RaceTable.Races[0].Results[4].points;
    const LastRacePts6 = lastRaceData.MRData.RaceTable.Races[0].Results[5].points;
    const LastRacePts7 = lastRaceData.MRData.RaceTable.Races[0].Results[6].points;
    const LastRacePts8 = lastRaceData.MRData.RaceTable.Races[0].Results[7].points;
    const LastRacePts9 = lastRaceData.MRData.RaceTable.Races[0].Results[8].points;
    const LastRacePts10 = lastRaceData.MRData.RaceTable.Races[0].Results[9].points;
    const LastRacePts11 = lastRaceData.MRData.RaceTable.Races[0].Results[10].points;
    const LastRacePts12 = lastRaceData.MRData.RaceTable.Races[0].Results[11].points;
    const LastRacePts13 = lastRaceData.MRData.RaceTable.Races[0].Results[12].points;
    const LastRacePts14 = lastRaceData.MRData.RaceTable.Races[0].Results[13].points;
    const LastRacePts15 = lastRaceData.MRData.RaceTable.Races[0].Results[14].points;
    const LastRacePts16 = lastRaceData.MRData.RaceTable.Races[0].Results[15].points;
    const LastRacePts17 = lastRaceData.MRData.RaceTable.Races[0].Results[16].points;
    const LastRacePts18 = lastRaceData.MRData.RaceTable.Races[0].Results[17].points;
    const LastRacePts19 = lastRaceData.MRData.RaceTable.Races[0].Results[18].points;
    const LastRacePts20 = lastRaceData.MRData.RaceTable.Races[0].Results[19].points;
    

    


    
    
    
    

   
    document.getElementById("lastRaceName").innerHTML = LastRaceName;
    
    document.getElementById("lastRacePos1").innerHTML = LastRacePos1;
    document.getElementById("LnlastRacePos1").innerHTML = LnLastRacePos1;

    document.getElementById("lastRacePos2").innerHTML = LastRacePos2;
    document.getElementById("LnlastRacePos2").innerHTML = LnLastRacePos2;

    document.getElementById("lastRacePos3").innerHTML = LastRacePos3;
    document.getElementById("LnlastRacePos3").innerHTML = LastRacePos3;

    document.getElementById("lastRacePos4").innerHTML = LastRacePos4;
    document.getElementById("lastRacePos5").innerHTML = LastRacePos5;
    document.getElementById("lastRacePos6").innerHTML = LastRacePos6;
    document.getElementById("lastRacePos7").innerHTML = LastRacePos7;
    document.getElementById("lastRacePos8").innerHTML = LastRacePos8;
    document.getElementById("lastRacePos9").innerHTML = LastRacePos9;
    document.getElementById("lastRacePos10").innerHTML = LastRacePos10;

    document.getElementById("LnlastRacePos4").innerHTML = LnLastRacePos4;
    document.getElementById("LnlastRacePos5").innerHTML = LnLastRacePos5;
    document.getElementById("LnlastRacePos6").innerHTML = LnLastRacePos6;
    document.getElementById("LnlastRacePos7").innerHTML = LnLastRacePos7;
    document.getElementById("LnlastRacePos8").innerHTML = LnLastRacePos8;
    document.getElementById("LnlastRacePos9").innerHTML = LnLastRacePos9;
    document.getElementById("LnlastRacePos10").innerHTML = LnLastRacePos10;

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

    document.getElementById("LnlastRacePos11").innerHTML = LnLastRacePos11;
    document.getElementById("LnlastRacePos12").innerHTML = LnLastRacePos12;
    document.getElementById("LnlastRacePos13").innerHTML = LnLastRacePos13;
    document.getElementById("LnlastRacePos14").innerHTML = LnLastRacePos14;
    document.getElementById("LnlastRacePos15").innerHTML = LnLastRacePos15;
    document.getElementById("LnlastRacePos16").innerHTML = LnLastRacePos16;
    document.getElementById("LnlastRacePos17").innerHTML = LnLastRacePos17;
    document.getElementById("LnlastRacePos18").innerHTML = LnLastRacePos18;
    document.getElementById("LnlastRacePos19").innerHTML = LnLastRacePos19;
    document.getElementById("LnlastRacePos20").innerHTML = LnLastRacePos20;

    
    document.getElementById("lastRacePts1").innerHTML = LastRacePts1;
    document.getElementById("lastRacePts2").innerHTML = LastRacePts2;
    document.getElementById("lastRacePts3").innerHTML = LastRacePts3;
    document.getElementById("lastRacePts4").innerHTML = LastRacePts4;
    document.getElementById("lastRacePts5").innerHTML = LastRacePts5;
    document.getElementById("lastRacePts6").innerHTML = LastRacePts6;
    document.getElementById("lastRacePts7").innerHTML = LastRacePts7;
    document.getElementById("lastRacePts8").innerHTML = LastRacePts8;
    document.getElementById("lastRacePts9").innerHTML = LastRacePts9;
    document.getElementById("lastRacePts10").innerHTML = LastRacePts10;

    document.getElementById("lastRacePts11").innerHTML = LastRacePts11;
    document.getElementById("lastRacePts12").innerHTML = LastRacePts12;
    document.getElementById("lastRacePts13").innerHTML = LastRacePts13;
    document.getElementById("lastRacePts14").innerHTML = LastRacePts14;
    document.getElementById("lastRacePts15").innerHTML = LastRacePts15;
    document.getElementById("lastRacePts16").innerHTML = LastRacePts16;
    document.getElementById("lastRacePts17").innerHTML = LastRacePts17;
    document.getElementById("lastRacePts18").innerHTML = LastRacePts18;
    document.getElementById("lastRacePts19").innerHTML = LastRacePts19;
    document.getElementById("lastRacePts20").innerHTML = LastRacePts20;




}

getRaces()
    .then(response => {
        console.log('races ok');
    })
    .catch(error => {
        console.log('races NOT ok');
        console.error(error)
    });