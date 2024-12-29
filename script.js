let cities = ["Химки", "Тольятти", "Глазов", "Ульяновск", "Уфа", "Зеленоград"];
let temp = [];
let num = 0;
let symbol = '\u00B0'
let degree = symbol + "C";
for (let city of cities) {
    let temperatura = prompt("Введите температуру для города " + city);
    console.log(temperatura);
    temp.push(temperatura);
    let stringCityTemp = document.createElement("li");
    stringCityTemp.textContent = "Температура в городе " + city + ": " + temp[num] + " " + degree;
    document.getElementById("result").prepend(stringCityTemp);
    num += 1;
}

let maxTemp = Math.max(...temp);
let minTemp = Math.min(...temp);

let stringLowTemp = document.createElement("li");
stringLowTemp.textContent = "Самая низкая температура: " + minTemp + " " + degree;
document.getElementById("low_high_temp").prepend(stringLowTemp);

let stringHighTemp = document.createElement("li");
stringHighTemp.textContent = "Самая высокая температура: " + maxTemp + " " + degree;
document.getElementById("low_high_temp").prepend(stringHighTemp);

