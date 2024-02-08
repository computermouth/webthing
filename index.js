
// load
// on button click -> store name in an Array
// on array change -> convert array to json (JSON.stringify())
// store stringified array in localStorage ``

let name_array = [];

function save_to_local_storage(){
    const textbox = document.getElementById("textbox");
    let name = textbox.value;
    name_array.push(name);
    console.log(name_array);
    let json = JSON.stringify(name_array);
    console.log(json);
    localStorage.names_json = json;
}