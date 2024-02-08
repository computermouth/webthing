
// page loads
// load names from local storage into variable
// convert from json to array

document.addEventListener("DOMContentLoaded", fart());

function fart(){

    let local_storage_items_json = localStorage.names_json;
    let parsed_names = JSON.parse(local_storage_items_json);

    const table = document.getElementById("table");

    parsed_names.forEach((element) => {
        const tr_node = document.createElement("tr");
        const td_node = document.createElement("td");

        td_node.innerHTML = element;

        tr_node.appendChild(td_node);
        table.appendChild(tr_node);
    });
}