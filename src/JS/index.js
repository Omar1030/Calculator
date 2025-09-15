const root = document.documentElement;
const themeBtns = document.querySelectorAll(".btn-theme");
const btns = document.querySelectorAll(".btn");

const arrayOfThemeBtns = Array.from(themeBtns);
const themeFromLocal = localStorage.getItem("theme");
const arrayOfBtns = Array.from(btns);

// ! Set Theme From Local Storage
if (themeFromLocal) {
  root.className = themeFromLocal;
  arrayOfThemeBtns.forEach((btn) => {
    if (btn.id == themeFromLocal) {
      btn.classList.add("opacity-100");
      btn.classList.remove("opacity-50");
    }
  });
} else {
  arrayOfThemeBtns[0].classList.add("opacity-100");
}

// ! Function : Active Theme
arrayOfThemeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    arrayOfThemeBtns.forEach((b) => {
      b.classList.remove("opacity-100");
      b.classList.add("opacity-50");
    });
    e.target.classList.add("opacity-100");
    root.className = btn.id;
    localStorage.setItem("theme", btn.id);
  });
});

let _operator = undefined;
let _number = "";
let _total = 0;


arrayOfBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {

    const innerText = e.target.innerText;
    
    if (innerText == "RESET") {

      // ! REST Button
      _operator = undefined;
      _number = "";
      _total = 0

    } else if (innerText == "=") {

      // ! EQUAL Button
      _number = _total;
      _total = 0

    } else {

      // ! Other Buttons
      if(innerText == "+" || innerText == "-" || innerText == "*" || innerText == "/") {
        
        // ? Opertaor
        _operator = innerText

        console.log("Operator => ", _operator)
        console.log("Number => ", _number)
        console.log("Total => ", _total)
        console.log("--------------")

      } else {

        // ? Not Operator

        if(_operator == undefined) {

          _number += innerText;

          console.log("Operator => ", _operator)
          console.log("Number => ", _number)
          console.log("Total => ", _total)
          console.log("--------------")

        } else {


          switch (_operator) {
            case "+":
              _total += (Number(_number) + Number(innerText))
              break;
            case "-":
              _total += (Number(_number) - Number(innerText))
              break;
            case "*":
              _total += (Number(_number) * Number(innerText))
              console.log("After Operation Total: ", _total)
              break;
            case "/":
              _total += (Number(_number) / Number(innerText))
          }

          _operator = undefined
          _number = ""

          console.log("Operator => ", _operator)
          console.log("Number => ", _number)
          console.log("Total => ", _total)
          console.log("--------------")

        }

      }
      
    }

  });
});





