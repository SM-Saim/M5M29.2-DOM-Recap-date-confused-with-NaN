const todayTime = new Date();
console.log(todayTime);
//

const date1 = new Date("1971-03-26");
const date2 = new Date("1971-12-16");
// if (date1 > date2) {
//   console.log("March is before December");
// } else {
//   console.log("March was not before December");
// }
// Result e kintu "March was not before December" eta asbe.

// Ei somossa katanor joono getTime() use korbo, jeta 1969 saal theke koto mini sec hoise oita hisab KeyboardEvent, tale sei hisabe arch er mili sec age asbe ebing mili second er value o kom hobe.

if (date1.getTime() < date2.getTime()) {
  console.log("March is before December");
} else {
  console.log("March was not before December");
}

// Date comparison er jonno amra moment.js library use korbo , eta onek popular.
// Eta date comparision, time zone ta ke compare korte use hoi.
