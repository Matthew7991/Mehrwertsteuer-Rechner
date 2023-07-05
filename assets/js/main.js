"use strict";

// Number Methods Übungen
// Number Methods 1.1
console.log("%c Number Methods 1.1", "color: white; background-color: red")

const a = 15.16698;
const b = 7.78714;
const c = "12.3";
const d = "3.14random";
const e = "32px";
const f = true;
const g = false;
const h = "321";
const i = "Supercode";

function limitNumberLenght (number, digits) {
  console.log(Number(number).toPrecision(digits))
}

limitNumberLenght(a, 2)
limitNumberLenght(a, 3)
limitNumberLenght(a, 5)
limitNumberLenght(b, 2)
limitNumberLenght(b, 3)
limitNumberLenght(b, 5)
limitNumberLenght(c, 2)
limitNumberLenght(c, 3)
limitNumberLenght(c, 5)
limitNumberLenght(d, 2)
limitNumberLenght(d, 3)
limitNumberLenght(d, 5)
limitNumberLenght(e, 2)
limitNumberLenght(e, 3)
limitNumberLenght(e, 5)
limitNumberLenght(f, 2)
limitNumberLenght(f, 3)
limitNumberLenght(f, 5)
limitNumberLenght(g, 2)
limitNumberLenght(g, 3)
limitNumberLenght(g, 5)
limitNumberLenght(h, 2)
limitNumberLenght(h, 3)
limitNumberLenght(h, 5)
limitNumberLenght(i, 2)
limitNumberLenght(i, 3)
limitNumberLenght(i, 5)


// Number Methods 1.2
console.log("%c Number Methods 1.2", "color: white; background-color: red")

console.log(Number(a).toFixed(2))
console.log(Number(b).toFixed(2))
console.log(Number(c).toFixed(2))
console.log(Number(d).toFixed(2))
console.log(Number(e).toFixed(2))
console.log(Number(f).toFixed(2))
console.log(Number(g).toFixed(2))
console.log(Number(h).toFixed(2))
console.log(Number(i).toFixed(2))

// Number Methods 1.3
console.log("%c Number Methods 1.3", "color: white; background-color: red")

console.log(Number(a).toString())
console.log(Number(a).toString(2))
console.log(Number(a).toString(8))
console.log(Number(a).toString(16))
console.log(Number(b).toString())
console.log(Number(b).toString(2))
console.log(Number(b).toString(8))
console.log(Number(b).toString(16))
console.log(Number(c).toString())
console.log(Number(c).toString(2))
console.log(Number(c).toString(8))
console.log(Number(c).toString(16))
console.log(Number(d).toString())
console.log(Number(d).toString(2))
console.log(Number(d).toString(8))
console.log(Number(d).toString(16))
console.log(Number(e).toString())
console.log(Number(e).toString(2))
console.log(Number(e).toString(8))
console.log(Number(e).toString(16))
console.log(Number(f).toString())
console.log(Number(f).toString(2))
console.log(Number(f).toString(8))
console.log(Number(f).toString(16))
console.log(Number(g).toString())
console.log(Number(g).toString(2))
console.log(Number(g).toString(8))
console.log(Number(g).toString(16))
console.log(Number(h).toString())
console.log(Number(h).toString(2))
console.log(Number(h).toString(8))
console.log(Number(h).toString(16))
console.log(Number(i).toString())
console.log(Number(i).toString(2))
console.log(Number(i).toString(8))
console.log(Number(i).toString(16))

// Number Methods 1.4
console.log("%c Number Methods 1.4", "color: white; background-color: red")

console.log("Number() has already been used in all examples above")

// Mehrwertsteuer-Rechner 3.1
console.clear()

const steuerRechnerForm = document.querySelector(".mehrwertsteuer-rechner-form");
const inputNetto = document.querySelector("#netto")
const inputBrutto = document.querySelector("#brutto")
const inputSteuersatzStandart = document.querySelector("#steuern-prozent-standard")
const inputSteuersatzVerringert = document.querySelector("#steuern-prozent-verringert")
const inputBetragLabel = document.querySelector(".betrag-label")
const outputSteuern = document.querySelector("#output-mehrwetssteuerbetrag")
const outputBetragLabel = document.querySelector(".output-betrag-label")
const outputBetrag = document.querySelector("#output-betrag")

function changeLabels() {
  if (inputBrutto.checked) {
    inputBetragLabel.textContent = "Bruttobetrag (Preis inklusive Mehrwertsteuer in Euro"
    outputBetragLabel.textContent = "Nettobetrag"
  } else {
    inputBetragLabel.textContent = "Mehrwertsteuer absziehen (Brutto zu Netto)"
    outputBetragLabel.textContent = "Bruttobetrag (Endpreis)"
  }}
  
  function calcTaxes(event) {
    event.preventDefault()
    const inputBetrag = document.querySelector("#betrag").value
    const inputBetragNumber = Number(inputBetrag)
    let steuersatz = 1.19;
  
    if (inputSteuersatzVerringert.checked) {
      steuersatz = 1.07;
    }
  
    if (!inputBrutto.checked) {
      outputSteuern.textContent = (inputBetragNumber * steuersatz - inputBetragNumber).toFixed(2) + " €";
      outputBetrag.textContent = (inputBetragNumber * steuersatz).toFixed(2) + " €";
    } else {
      outputSteuern.textContent = (inputBetragNumber - inputBetragNumber / steuersatz).toFixed(2) + " €";
      outputBetrag.textContent = (inputBetragNumber / steuersatz).toFixed(2) + " €";
    }
  }

  inputNetto.addEventListener("change", changeLabels)
  inputNetto.addEventListener("change", calcTaxes)
  inputBrutto.addEventListener("change", changeLabels)
  inputBrutto.addEventListener("change", calcTaxes)

  inputSteuersatzStandart.addEventListener("change", calcTaxes)
  inputSteuersatzVerringert.addEventListener("change", calcTaxes)

  steuerRechnerForm.addEventListener("submit", calcTaxes)