let inputEl = document.getElementById("input-el").value

function display(val) {
    document.getElementById("input-el").value += val;

}

function result() {
    let x = document.getElementById("input-el").value;
    let y = eval(x);
    document.getElementById("input-el").value = y;
}

function clr() {
    document.getElementById("input-el").value = " ";
}