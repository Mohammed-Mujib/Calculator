const display = document.getElementById("display");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const ele = document.querySelectorAll(".form .bt");
const del = document.getElementById("delete");
let display_record = [];
let record = [];
const result = document.getElementById("equal");
const operations = ["+", "-", "/", "*"];

clear.onclick = function () {
  display.innerHTML = null;
  display_record = [];
  record = [];
};

result.onclick = function () {
  if (record.length < 1) {
    display.innerHTML = "0";
  } else {
    if(operations.includes(`${record.slice(-1,)}`) ){
      record.pop();
    }
    display.innerHTML = eval(record.join(""));
    display_record = [`${display.innerHTML}`];
    record = [display.innerHTML]
    // record = display.innerHTML.split("")

  }
};

ele.forEach((e)=>{
  e.addEventListener("click", function () {
    if (operations.includes(`${record.slice(-1,)}`) && operations.includes(`${this.dataset.val}`) ) {
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
    }
  });
});

del.onclick = function () {
  display_record.pop();
  display.innerHTML = display_record.join("");
  record.pop();
};
