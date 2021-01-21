function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
let x = JSON.parse(input)
/**/
out = Array.isArray(x)
    output.innerText = out;
}