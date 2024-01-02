document.querySelector("#multify").addEventListener("click", myFunction);

function myFunction() {
  let numb = document.querySelector("#num1").value;
  numb = Number(numb);

  let result = "";
  if (numb == "") {
    document.querySelector("#demo").innerHTML = "Enter a valid number";
  } else {
    for (let i = 0; i <= 15; i++) {
      let mult = numb * i;
      result += `<tr><td>${numb}</td> <td class="op">x</td> <td>${i}</td> <td class="op">=</td> <td>${mult}</td><tr>`;
    }

    document.querySelector("#demo").innerHTML = `<table>${result}</table>`;
  }
}
