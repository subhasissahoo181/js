const progress_move = () => {

    var elem = document.getElementById('mybar');
    var a = parseInt(document.getElementById('f8').value);
    //var b = parseInt(document.getElementById('s8').value);
    // var c = parseInt(document.getElementById('t8').value);
    //ans = ((a + b + c) * 100) / 300;

    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        // if (width >= 100) {
        if (width >= a) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
            document.getElementById("in_value").innerHTML = width + "%";
        }

    }
}

const progress_move2 = () => {

    var elem = document.getElementById('mybar2');
    var b = parseInt(document.getElementById('s8').value);
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= b) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
            document.getElementById("in_value2").innerHTML = width + "%";
        }

    }
}
const progress_move3 = () => {

    var elem = document.getElementById('mybar3');
    var b = parseInt(document.getElementById('t8').value);
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        // if (width >= 100) {
        if (width >= b) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
            document.getElementById("in_value3").innerHTML = width + "%";
        }

    }
}
const progress_move4 = () => {

    var elem = document.getElementById('mybar4');

    var a = parseInt(document.getElementById('f8').value);
    var b = parseInt(document.getElementById('s8').value);
    var c = parseInt(document.getElementById('t8').value);
    ans = ((a + b + c) * 100) / 300;

    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        // if (width >= 100) {
        if (width >= ans) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
            document.getElementById("in_value4").innerHTML = width + "%";
        }

    }
}