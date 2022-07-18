"use strict"

let type = "nun"
let design = "nun"
let adaptability = "nun"


alert("Примичание писать только порядковый номер!");

type = prompt("выберети тип сайта: \n Сайт визитка (1) \n Корпоративный сайт (2) \n Интернет-магазин (3)");
design = prompt("выберети дизайн сайта: \n Шаблонный (1) \n Уникальный (2) \n WOW-Дизайн (3)");
adaptability = prompt("выберети адаптивность  сайта: \n Только ПК (1) \n Только мобильный сайт (2) \n ПК + Мобильный (3) ");

console.log(type, design, adaptability);


var typeCost = [10000, 15000, 20000]
var designCost = [5000, 15000, 20000]
var adaptabilityCost = [5000, 7000, 12000]

var typeCostEnd
var designCostEnd
var adaptabilityCostEnd


//type
if (type == "1") {
    typeCostEnd = typeCost["0"]
}
if (type == "2") {
    typeCostEnd = typeCost["1"]
}
if (type == "3") {
    typeCostEnd = typeCost["2"]
}
console.log(typeCostEnd);
//design
if (design == "1") {
    designCostEnd = designCost["0"]
}
if (design == "2") {
    designCostEnd = designCost["1"]
}
if (design == "3") {
    designCostEnd = designCost["2"]
}
console.log(designCostEnd);
//adaptability
if (adaptability == "1") {
    adaptabilityCostEnd = adaptabilityCost["0"]
}
if (adaptability == "2") {
    adaptabilityCostEnd = adaptabilityCost["1"]
}
if (adaptability == "3") {
    adaptabilityCostEnd = adaptabilityCost["2"]
}
console.log(adaptabilityCostEnd);

let Total = typeCostEnd + designCostEnd + adaptabilityCostEnd;

console.log(Total);

let titl = "Итоговая стоимость: "
let rub = "Рублей"
alert(titl , Total , rub);
