var Next = sessionStorage.getItem("NextRace");
//var Next = 18;
var SprintWeekend;
//console.log(Next);
var m = "";

async function getRaces() {
  const lastRaceEndpoint = new URL(
    `http://ergast.com/api/f1/2024/1.json`

    // `http://ergast.com/api/f1/2023/${Next}.json`
  );
  const lastRaceResponse = await fetch(lastRaceEndpoint);
  const lastRaceData = await lastRaceResponse.json();

  //console.log(lastRaceData);

  function timetrimFunction(t) {
    console.log(t);
    var t2 = t.slice(0, -7); // isolates hour
    console.log(t2);

    var t3 = t.slice(3, -4); // isolates mins
    t2 = t2 - 5;
    console.log(t2);

    if (t2 > 12) {
      //converts to 12 hr time
      t2 = t2 - 12;
      m = "pm";
    } else {
      m = "am";
    }
    console.log(t2);
    console.log(m);

    t2 = t2 + ":" + t3;
    return t2;
  }

  function dateTrimFunction(d) {
    var d = d.slice(5);

    return d;
  }

  try {
    const test = lastRaceData.MRData.RaceTable.Races[0].Sprint.date; // testing for sprint weekend
    SprintWeekend = true;
    // console.log(SprintWeekend);
  } catch (err) {
    SprintWeekend = false;
    //console.log(SprintWeekend);
    // error handling
    // console.log(err);
  }

  if (SprintWeekend) {
    document.getElementById("eventOneName").innerHTML = "Practice One";
    document.getElementById("eventTwoName").innerHTML = "Qualifying";
    document.getElementById("eventThreeName").innerHTML = "Practice Two";
    document.getElementById("eventFourName").innerHTML = "Sprint Race";
    document.getElementById("eventFiveName").innerHTML = "Grand Prix";

    const eventOneDate =
      lastRaceData.MRData.RaceTable.Races[0].FirstPractice.date;
    document.getElementById("eventOneDate").innerHTML =
      dateTrimFunction(eventOneDate);

    var eventOneTime =
      lastRaceData.MRData.RaceTable.Races[0].FirstPractice.time;
    document.getElementById("eventOneTime").innerHTML =
      timetrimFunction(eventOneTime) + "pm";

    const eventTwoDate = lastRaceData.MRData.RaceTable.Races[0].Qualifying.date;
    document.getElementById("eventTwoDate").innerHTML =
      dateTrimFunction(eventTwoDate);
    var eventTwoTime = lastRaceData.MRData.RaceTable.Races[0].Qualifying.time;
    document.getElementById("eventTwoTime").innerHTML =
      timetrimFunction(eventTwoTime) + "pm";

    const eventThreeDate =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.date;
    document.getElementById("eventThreeDate").innerHTML =
      dateTrimFunction(eventThreeDate);
    var eventThreeTime =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.time;
    document.getElementById("eventThreeTime").innerHTML =
      timetrimFunction(eventThreeTime) + "pm";

    const eventFourDate = lastRaceData.MRData.RaceTable.Races[0].Sprint.date;
    document.getElementById("eventFourDate").innerHTML =
      dateTrimFunction(eventFourDate);
    var eventFourTime = lastRaceData.MRData.RaceTable.Races[0].Sprint.time;
    document.getElementById("eventFourTime").innerHTML =
      timetrimFunction(eventFourTime) + "pm";

    const eventFiveDate = lastRaceData.MRData.RaceTable.Races[0].date;
    document.getElementById("eventFiveDate").innerHTML =
      dateTrimFunction(eventFiveDate);
    var eventFiveTime = lastRaceData.MRData.RaceTable.Races[0].time;
    document.getElementById("eventFiveTime").innerHTML =
      timetrimFunction(eventFiveTime) + "pm";
  } else {
    document.getElementById("eventOneName").innerHTML = "Practice One";
    document.getElementById("eventTwoName").innerHTML = "Practice Two";
    document.getElementById("eventThreeName").innerHTML = "Practice Three";
    document.getElementById("eventFourName").innerHTML = "Qualifying";
    document.getElementById("eventFiveName").innerHTML = "Grand Prix";

    const eventOneDate =
      lastRaceData.MRData.RaceTable.Races[0].FirstPractice.date;
    document.getElementById("eventOneDate").innerHTML =
      dateTrimFunction(eventOneDate);
    // console.log("***************" + eventOneDate);
    var eventOneTime =
      lastRaceData.MRData.RaceTable.Races[0].FirstPractice.time;
    // document.getElementById("eventOneTime").innerHTML =
    //   timetrimFunction(eventOneTime) + "pm";

    document.getElementById("eventOneTime").innerHTML =
      timetrimFunction(eventOneTime) + " " + m;
    console.log("*****" + timetrimFunction(eventOneTime));

    const eventTwoDate =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.date;
    document.getElementById("eventTwoDate").innerHTML =
      dateTrimFunction(eventTwoDate);
    var eventTwoTime =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.time;
    document.getElementById("eventTwoTime").innerHTML =
      timetrimFunction(eventTwoTime) + " " + m;
    //   console.log("*****" + eventTwoTime);

    const eventThreeDate =
      lastRaceData.MRData.RaceTable.Races[0].ThirdPractice.date;
    document.getElementById("eventThreeDate").innerHTML =
      dateTrimFunction(eventThreeDate);
    var eventThreeTime =
      lastRaceData.MRData.RaceTable.Races[0].ThirdPractice.time;
    document.getElementById("eventThreeTime").innerHTML =
      timetrimFunction(eventThreeTime) + " " + m;

    //  console.log("*****" + eventThreeTime);

    const eventFourDate =
      lastRaceData.MRData.RaceTable.Races[0].Qualifying.date;
    document.getElementById("eventFourDate").innerHTML =
      dateTrimFunction(eventFourDate);
    var eventFourTime = lastRaceData.MRData.RaceTable.Races[0].Qualifying.time;
    document.getElementById("eventFourTime").innerHTML =
      timetrimFunction(eventFourTime) + " " + m;

    //  console.log("*****" + eventFourTime);

    const eventFiveDate = lastRaceData.MRData.RaceTable.Races[0].date;
    document.getElementById("eventFiveDate").innerHTML =
      dateTrimFunction(eventFiveDate);
    var eventFiveTime = lastRaceData.MRData.RaceTable.Races[0].time;
    document.getElementById("eventFiveTime").innerHTML =
      timetrimFunction(eventFiveTime) + " " + m;
  }
}

getRaces()
  .then((response) => {
    //    console.log("races ok");
  })
  .catch((error) => {
    console.log("races NOT ok");
    //   console.error(error);
  });
