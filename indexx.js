// function clock() {
//     var hour = document.getElementById("time22");
//     var min = document.getElementById("time33");
//     var sec = document.getElementById("time44");
//     var ampm = document.getElementById("time55");
//     var time = new Date();

//     var hrs=time.getHours();
//     var mins=time.getMinutes();
//     var secs=time.getSeconds();
//     var am_pm="AM";
  
//   if (hrs == 0) {
//     hrs = 12;
//   }
//   if (hrs > 12) {
//     hrs = hrs - 12;
//     am_pm = "PM";
//   }
//   if (hrs < 10) {
//     hrs = "0" + hrs;
//   }
//   if (mins < 10) {
//     mins = "0" + mins;
//   }
//   if (secs < 10) {
//     secs = "0" + secs;
//   }
//   hour.innerText = hrs;
//     min.innerText = mins;
//     sec.innerText = secs;
//     ampm.innerText = am_pm;
// }
// setInterval(clock, 1000);