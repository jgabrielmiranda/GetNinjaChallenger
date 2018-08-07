let theUrl = 'http://127.0.0.1:3000/';

function obterLayoutPedido(callback)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    };

    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}