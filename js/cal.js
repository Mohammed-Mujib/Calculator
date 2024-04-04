let display = document.getElementById("display");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let ele = document.querySelectorAll(".form .bt");
let display_record = [];
let record = [];
let result = document.getElementById("equal");
clear.onclick = function(){
  display.innerHTML = "";
  record = [];
}
result.onclick = function(){
  if (record.length === 0) {
    display.innerHTML = "0";
  }
  display.innerHTML= eval(record.join(""));
}
ele.forEach(function (e) {
  e.addEventListener("click", function () {
    display.innerHTML += this.innerHTML;
    record.push(this.dataset.val)
    console.log(record);
  })
});
