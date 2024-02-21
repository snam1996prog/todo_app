const showData = () => {
  let local_data = JSON.parse(localStorage.getItem("task"));
  let htmlContent = "";
  let i = 0;
  for (let main_d in local_data) {
    htmlContent += `<div class="itm" id="itm_${i}">
    <button class="bg_white" id="task_${i}" onclick="done(this)"><img src="unckecked.png" class="uc" alt="img not avl"></button>
    <p id="Task_p${i}">${local_data[main_d]}</p>
    <button id="${i}" class="close-button" onclick="del(this)"><img src="close.png" class="close" alt="img not avl"></button>
    </div>`;
    i++;
  }
  document.getElementById("t_app").innerHTML = htmlContent;
};
showData();
function done(button) {
  let str = button.id.split("_")[1];
  console.log(typeof str, str);
  let local_data_2 = JSON.parse(localStorage.getItem("task"));
  let j = str;
  let replacement = document.getElementById(`itm_${str}`);

  let newElement = document.createElement("div");
  newElement.className = "itm";
  newElement.id = `itm_${j}`;
  if (button.nextElementSibling.classList.contains("strthg")) {
    newElement.innerHTML = `<button class="bg_white strthg" id="task_${j}" onclick="done(this)"><img src="unckecked.png" class="uc" alt="img not avl"></button>
    <p id="Task_p${j}" class="">${local_data_2[str]}</p>
    <button id="${j}" onclick="del(this)"><img src="close.png" class="close" alt="img not avl"></button>`;
  } else {
    newElement.innerHTML = `<button class="bg_white strthg" id="task_${j}" onclick="done(this)"><img src="checked.png" class="uc" alt="img not avl"></button>
    <p id="Task_p${j}" class="strthg">${local_data_2[str]}</p>
    <button id="${j}" onclick="del(this)"><img src="close.png" class="close" alt="img not avl"></button>`;
  }

  replacement.parentNode.replaceChild(newElement, replacement);
}
const del = (button)=>{
  console.log(typeof(button.id));
  let elems = JSON.parse(localStorage.getItem("task"));
  console.log(elems);
  let del_itm = elems.filter((elem, i)=>{
    return i !== parseInt(button.id);
  });
  localStorage.setItem("task", JSON.stringify(del_itm));
  console.log(del_itm);
  showData()
}
document.getElementById("get").addEventListener("click", () => {
  console.log("Is it working?");
  let text = document.getElementById("get_txt").value;
  let task = localStorage.getItem("task");
  if (task === null) {
    let arr = [];
    arr.push(text);
    localStorage.setItem("task", JSON.stringify(arr));
  } else {
    let arr = JSON.parse(localStorage.getItem("task"));
    arr.push(text);
    localStorage.setItem("task", JSON.stringify(arr));
  }
  document.getElementById("get_txt").value = "";
  showData();
});
