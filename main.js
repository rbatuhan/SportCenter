"use strict";

const classes = [
  {
    id: 1,
    category: "Yoga",
    img: "/assets/yoga.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 8:00am - 10.00am", "Monday-Tuesday: 10:00am - 12.00pm", "Wednesday-Friday: 3:00pm - 6.00pm"]
  },
  {
    id: 2,
    category: "Group",
    img: "/assets/group.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 12:00pm - 4.00pm", "Tuesday-Thursday: 2:00pm - 4.00pm", "Wednesday-Friday: 6:00pm - 9.00pm"]
  },
  {
    id: 3,
    category: "Solo",
    img: "/assets/solo.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 10:00am - 12.00am", "Monday-Tuesday: 12:00pm - 2.00pm", "Wednesday-Friday: 2:00pm - 4.00pm"]
  },
  {
    id: 4,
    category: "Stretching",
    img: "/assets/stret.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: ["Saturday-Sunday: 11:00am - 1.00pm", "Tuesday-Thursday: 10:00am - 12.00pm", "Wednesday-Friday: 10:00am - 12.00pm"]
  }
];

// Scroll hareketinde Navbar'ın arka plan renginin değişmesi ve sayfanın üstünde sabit kalması

const navbar = document.querySelector(".navbar");
const navContainer = document.querySelector(".nav-container");
const containerTop = document.querySelector(".container-top");

document.addEventListener("scroll", () => {
  if(window.pageYOffset != 0) {
    navContainer.classList.add("nav-style");
    containerTop.style.paddingTop = "72px";
  } else {
    navContainer.classList.remove("nav-style");
    containerTop.style.paddingTop = "144px";
  }
})

// Navbar butonu menüsünün scroll ve resize durumlarında kapanması

const checkbox = document.querySelector(".menu-btn");

["resize", "scroll"].forEach((event) =>
  window.addEventListener(event, () => {
    if (checkbox.checked == true) {
      checkbox.checked = false;
    }
  })
);

// Kriter 11: Classes bölümündeki butonların tıklanmasına bağlı olarak içeriğin değiştirilmesi

const groupButton = document.querySelectorAll(".group-btn");
const child = document.querySelectorAll(".group-btn div");
const groupContent = document.querySelector(".group-content");

groupButton[0].style.backgroundColor = "#FE9B01";

for(let i = 0; i < groupButton.length; i++) {
  groupButton[i].addEventListener("click", () => {
    for(let j = 0; j < groupButton.length; j++) {
      groupButton[j].style.backgroundColor = "#355592";
      child[j].classList.remove("selection");
    } 

    groupButton[i].style.backgroundColor = "#FE9B01";
    child[i].classList.add("selection");
    groupContent.innerHTML = "";
    const selectedClass = groupButton[i].innerText;

    classes.forEach((e) => {
      if(e.category == selectedClass) {
        showMenu(e, groupContent);
      }
    })
  })
}

// Kriter 8: BMI hesaplanması ve göstergenin hareketi

const arrowUp = document.querySelector(".arrow-up");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

weight.addEventListener("input", () => {
  let bmi = weight.value / ((height.value / 100) ** 2);
  let percentage;
  if(bmi > 13.5 && bmi < 18.5) {
    percentage = 7 + (bmi - 13.5) * 16 / 5;
  } else if(bmi > 25 && bmi < 30 || bmi >= 30 && bmi < 35 || bmi >= 35 && bmi < 40) {
    percentage = 40 + (bmi - 24.5) * 16 / 5;
  } else if (bmi >= 18.5 && bmi < 25 ) {
    percentage = 23 + (bmi - 18.5) * 16 / 7;
  }

  if(percentage > 6 && percentage < 88) {
    arrowUp.style.left = `${percentage}%`;
  }
})

function showMenu(e, groupContent) {
  let div = document.createElement("div");
  div.classList.add("desc");
  div.innerHTML = `<h3>Why are your ${e.category}?</h3>
  <p>
  ${e.desc}
  </p>
  <h3>When comes ${e.category} Your Time.</h3>
  <p>${e.time[0]}</p>
  <p>${e.time[1]}</p>
  <p>${e.time[2]}</p>
</div>`;
  let img = document.createElement("img");
  img.classList.add("class-img");
  img.src = `${e.img}`;
  img.alt = `${e.category}`;
  groupContent.append(div);
  groupContent.append(img);
}

// Kriter 12: Our Best Trainers alanı için istenen "hover" 

const imgBox = document.querySelectorAll(".img-box");
const trainerFlag = document.querySelectorAll(".trainer-flag");
const trainerName = document.querySelectorAll(".trainer-name");

for(let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener ("mouseover", () => {
    trainerFlag[i].classList.remove("hidden");
    trainerName[i].classList.remove("hidden");
  })
  imgBox[i].addEventListener ("mouseout", () => {
    trainerFlag[i].classList.add("hidden");
    trainerName[i].classList.add("hidden");
  })
}