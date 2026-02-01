//Task 1 start
let heading = document.getElementById("heading");
console.log(heading);
// let updatedHeading = heading.innerText = "Dom Element Selected By Id Selector";

//Task 1 End

//Task 2 start
let paras = document.getElementsByTagName("p");
console.log(paras);

//  let updatedpara = paras[0].innerHTML = "First paragraph is updated";
// console.log(updatedpara);

//Task 2 End

//Task 3 Start
let sameBTn = document.getElementsByClassName("sameBtn");
console.log(sameBTn);

// sameBTn[1].textContent = "click Me"
//Task 3 End

//Task 4 Start
let headingTwo = document.querySelector("#head2");
console.log(headingTwo);

// headingTwo.style.color = "blue"
//Task 4 End

//Task 5 Start
let unorderList = document.querySelectorAll("li");
console.log(unorderList);

unorderList[0].style.color = "green"
unorderList[1].style.color = "green"
unorderList[2].style.color = "green"
unorderList[3].style.color = "green"
//Task 5 End


//Task 6 Start
let tasksixPara = document.querySelector(".tasksixPara");
console.log(tasksixPara);


tasksixPara.style.fontSize = "20px";
tasksixPara.style.color = "white";
tasksixPara.style.backgroundColor = "blue";

//Task 6 End