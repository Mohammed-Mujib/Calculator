let display = document.getElementById("display");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let ele = document.querySelectorAll(".form .bt");
let del = document.getElementById("delete");
let display_record = [];
let record = [];
let result = document.getElementById("equal");
clear.onclick = function () {
  display.innerHTML = null;
  display_record = [];
  record = [];
};
result.onclick = function () {
  if (record.length < 1) {
    display.innerHTML = "0";
  } else {
    display.innerHTML = eval(record.join(""));
    display_record = [`${display.innerHTML}`];
    record = [display.innerHTML]
  }
};
ele.forEach(function (e) {
  e.addEventListener("click", function () {
    let arr = ["+", "-", "/", "*"];
    if (arr.includes(`${record.slice(-1,)}`) && arr.includes(`${this.dataset.val}`) ) {
      display_record.pop();
      display.innerHTML = display_record.join("");
      record.pop();
      display_record.push(`${this.innerHTML}`);
      display.innerHTML = display_record.join("");
      record.push(this.dataset.val);
    } else {
      display_record.push(`${this.innerHTML}`);
      display.innerHTML = display_record.join("");
      record.push(this.dataset.val);
      console.log("nono");
    }
  });
});
del.onclick = function () {
  display_record.pop();
  display.innerHTML = display_record.join("");
  record.pop();
};
