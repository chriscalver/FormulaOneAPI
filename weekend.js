var Next = sessionStorage.getItem("NextRace");
//var Next = 18;
var SprintWeekend;
console.log(Next);

async function getRaces() {
  const lastRaceEndpoint = new URL(
    `http://ergast.com/api/f1/2023/${Next}.json`
  );
  const lastRaceResponse = await fetch(lastRaceEndpoint);
  const lastRaceData = await lastRaceResponse.json();

  console.log(lastRaceData);

  function timetrimFunction(t) {
    var t2 = t.slice(0, -7); // isolates hour
    var t3 = t.slice(3, -4); // isolates mins

    if (t2 > 12) {
      //converts to 12 hr time
      t2 = t2 - 12;
    }
    t2 = t2 - 4;

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
    console.log(SprintWeekend);
  } catch (err) {
    SprintWeekend = false;
    console.log(SprintWeekend);
    // error handling
    console.log(err);
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
    var eventOneTime =
      lastRaceData.MRData.RaceTable.Races[0].FirstPractice.time;
    document.getElementById("eventOneTime").innerHTML =
      timetrimFunction(eventOneTime) + "pm";

    const eventTwoDate =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.date;
    document.getElementById("eventTwoDate").innerHTML =
      dateTrimFunction(eventTwoDate);
    var eventTwoTime =
      lastRaceData.MRData.RaceTable.Races[0].SecondPractice.time;
    document.getElementById("eventTwoTime").innerHTML =
      timetrimFunction(eventTwoTime) + "pm";

    const eventThreeDate =
      lastRaceData.MRData.RaceTable.Races[0].ThirdPractice.date;
    document.getElementById("eventThreeDate").innerHTML =
      dateTrimFunction(eventThreeDate);
    var eventThreeTime =
      lastRaceData.MRData.RaceTable.Races[0].ThirdPractice.time;
    document.getElementById("eventThreeTime").innerHTML =
      timetrimFunction(eventThreeTime) + "pm";

    const eventFourDate =
      lastRaceData.MRData.RaceTable.Races[0].Qualifying.date;
    document.getElementById("eventFourDate").innerHTML =
      dateTrimFunction(eventFourDate);
    var eventFourTime = lastRaceData.MRData.RaceTable.Races[0].Qualifying.time;
    document.getElementById("eventFourTime").innerHTML =
      timetrimFunction(eventFourTime) + "pm";

    const eventFiveDate = lastRaceData.MRData.RaceTable.Races[0].date;
    document.getElementById("eventFiveDate").innerHTML =
      dateTrimFunction(eventFiveDate);
    var eventFiveTime = lastRaceData.MRData.RaceTable.Races[0].time;
    document.getElementById("eventFiveTime").innerHTML =
      timetrimFunction(eventFiveTime) + "pm";
  }

  // document.getElementById("test").innerHTML = test;
  // const test = lastRaceData.MRData.RaceTable.Races[0].SecondPractice.date;
  // document.getElementById("test").innerHTML = test;

  // const RaceName = lastRaceData.MRData.RaceTable.Races[0].raceName;
  // document.getElementById("RaceName").innerHTML = RaceName;

  // const P1 = lastRaceData.MRData.RaceTable.Races[0].FirstPractice.date;
  // var P1time = lastRaceData.MRData.RaceTable.Races[0].FirstPractice.time;
  // document.getElementById("p1date").innerHTML = P1;
  // document.getElementById("p1time").innerHTML = timetrimFunction(P1time) + "pm";

  // const time = lastRaceData.MRData.RaceTable.Races[0].time;
  // const newtime = timetrimFunction(time);
  // document.getElementById("NextRaceName").innerHTML = newtime;
}

getRaces()
  .then((response) => {
    console.log("races ok");
  })
  .catch((error) => {
    console.log("races NOT ok");
    console.error(error);
  });
