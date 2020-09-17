let topFive;
let attractions;
let category; 

fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
    attractions = data;
    filterData ('all');
    let elem = document.querySelector(".user-control");
    elem.onchange = handler;
    });

function filterData(category){
    let filteredAttracs = attractions;

    if (category!='all'){
        filteredAttracs = filteredAttracs.filter( attraction => attraction.Category == category);
    }
    console.log(filteredAttracs);

    filteredAttracs.sort(function (a, b) {
        return b.Visitors - a.Visitors;
    });
    topFive = filteredAttracs.slice(0,5);
    console.log(topFive);
    renderBarChart(topFive);
};

function handler(event) {
    category = event.target.value;
    filterData (category);
};


