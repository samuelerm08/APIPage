const url = "https://apicontrolstock.azurewebsites.net/api/producto/2";

function ShowResponse() {
    let out = document.getElementById('output');
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            var str = JSON.stringify(json, null, '  ');
            out.innerHTML = str;
        });
}