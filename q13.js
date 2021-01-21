let arr = [];
const addItem = () => {
  const input = document.getElementById("input1");
  const val = input.value;
  input.value = "";
  arr.push(val);
};
const diplay = () => {
  const list = document.createElement("ul");
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(`element is ${arr[i]}`));
    list.appendChild(item);
  }
  document.getElementById("items").innerHTML = list.innerHTML;
};