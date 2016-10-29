/// <reference path="../typings/globals/google.visualization/index.d.ts" />
google.charts.load("current", { "packages": ["corechart"] });
const drawChart = () => {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([
        ["Mushrooms", 3],
        ["Onions", 1],
        ["Olives", 1],
        ['Zucchini', 1],
        ['Pepperoni', 2],
        ["Cheese", 1]
    ]);
    let options = {
        "title": "How Much Pizza I Ate Last Night",
        "width": 600,
        "height": 300
    };
    let chart = new google.visualization.BarChart(document.getElementById("chart_div"));
    chart.draw(data, options);
};
google.charts.setOnLoadCallback(drawChart);
//# sourceMappingURL=index.js.map