document.getElementById('get').addEventListener('click', getAJAX);
document.getElementById('post').addEventListener('click', postAJAX);
document.getElementById('put').addEventListener('click', putAJAX);
document.getElementById('delete').addEventListener('click', deleteAJAX);
document.getElementById('viewCount').addEventListener('click', viewCount);
document.getElementById('cookie').addEventListener('click', cookie);

function getAJAX(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/", true);
    xhttp.send();
}

function cookie() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/cookie", true);
    xhttp.send();
}

function viewCount() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "/viewCount", true);
    xhttp.send();
}

function postAJAX(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "/", true);
    xhttp.send();
}

function putAJAX(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("PUT", "/", true);
    xhttp.send();
}

function deleteAJAX(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("DELETE", "/", true);
    xhttp.send();
}
