function addCars() {
    var vinNumber = document.getElementById("vin").value;
    var make = document.getElementById("make").value;
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/savecar");
    obj.setRequestHeader("Content-Type", "application/json");
    var car = JSON.stringify({"vinNumber": vinNumber,"make":make,"model":model,"year":year});
    console.log(car);
    obj.send(car);
    document.write("All Done Check Now");
}
