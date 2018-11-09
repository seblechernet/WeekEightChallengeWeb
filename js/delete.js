


function deleteCars(car) {
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/delete");
    obj.setRequestHeader("Content-Type", "application/json");
    car = JSON.stringify(car);
    console.log(car);
    obj.send(car);
    document.write("All Done Check Now");
}
