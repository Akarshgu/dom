
    // element targeted by id
var result=document.getElementById("text");
result.innerText="the text is changed"
console.log(result);


//-----element is targeted by tag name
function clickmee() {
var resultt=document.getElementsByTagName("h1")[0];
resultt.innerText="THis is a new heading";

}
//-- element targeted by getElementsByClassName
var result3=document.getElementsByClassName("box");
result3.innerText="hello everyone"
console.log(result3);


function clicked() {

    var result4=document.getElementById("textchanged");
    result4.innerText="Hello World"

}

function changedirection(){
document.getElementById("boxcontainer").style.flexDirection="column";
}


function clickme () {
    document.getElementById("heading").style.color="red";
} 
function replaceme(){
    document.getElementById("textchanging").innerHTML="WELCOME TO ELEVATION ACADEMY";

}

function clock() {
    var hours = document.getElementById("time2");
    var minutes = document.getElementById("time3");
    var seconds = document.getElementById("time4");
    var am = document.getElementById("time5");
    var time = new Date();
  
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";
  
    if (hrs == 0) {
      hrs = 12;
    }
  
    if (hrs > 12) {
      hrs = hrs - 12;
      am_pm = "PM";
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
  }
  setInterval(clock, 1000);

  function clickmetoo() {
   var res= document.getElementById("selected")
   var res2=res.value;
   document.getElementById("submitted").innerText=res2;

    
  }