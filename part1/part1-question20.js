function logTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var timer;
timer = window.setInterval(logTime,1*1000);