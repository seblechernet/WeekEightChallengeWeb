function getCars(callbackFunction) {
    var obj = new XMLHttpRequest();
    obj.open("GET", "http://localhost:8080/listcars");
    obj.setRequestHeader("Content-Type", "application/json");
    obj.responseType = 'json';
    obj.send();
    obj.onreadystatechange = function checkAPIState() {

        console.log("Checking status");
        if (this.status == 200 && this.readyState == 4) {
            console.log(obj.response);
            cars=obj.response;
            callbackFunction(cars);
        }
        else {
            console.log(this.status);
        }
    }


    return obj.response;

}
function findCars() {
    getCars(generateTable);

}
function generateTable(cars) {
    // get the reference for the body

    // creates a <table> element and a <tbody> element
    var tbl = document.getElementById("table1");
    var tblBody = document.createElement("tbody");

    // creating all cells

    for (var i = 0; i < cars.length; i++) {
        // creates a table row

        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellText = document.createTextNode(cars[i].vinNumber);
        cell.appendChild(cellText);
        row.appendChild(cell);
        var cell = document.createElement("td");
        var cellText = document.createTextNode(cars[i].make);
        cell.appendChild(cellText);
        row.appendChild(cell);
        var cell = document.createElement("td");
        var cellText = document.createTextNode(cars[i].model);
        cell.appendChild(cellText);
        row.appendChild(cell);
        var cell = document.createElement("td");
        var cellText = document.createTextNode(cars[i].year);
        cell.appendChild(cellText);
        row.appendChild(cell);
        var cell = document.createElement("td");


        var car="cars["+ i + "]";
        cell.innerHTML='<button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteCars(' + car + ')">Delete</button></span>';
        row.appendChild(cell);
        var cell = document.createElement("td");
        cell.innerHTML='<button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="editCars(' + car + ')">Edit</button></span>';
        row.appendChild(cell);

        // add the row to the end of the table body
        tblBody.appendChild(row);

            }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>

    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "cars.length");
}
