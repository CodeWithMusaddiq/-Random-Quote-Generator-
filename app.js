const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const para = document.querySelector("p");

const arr = [
    "Small steps every day lead to big results. 🚶‍♂️📈",
    "Work hard in silence, let success make the noise. 🤫🏆",
    "Dream it. Believe it. Achieve it. 💭✅🎯",
    "Stay patient. Growth takes time. ⏳🌱",
    "Your only limit is your mindset. 🧠🚀",
    "Push yourself, because no one else is going to do it for you. 💪🔥"
];

btn.addEventListener("click", () => {
    const randomidx = Math.floor(Math.random() * arr.length);
    para.innerText = arr[randomidx];
});

const newbtn = document.createElement("button");
newbtn.innerText = "Clear Text";
document.body.appendChild(newbtn);
newbtn.style.fontFamily="system-ui";
console.log(newbtn.style.fontFamily)

newbtn.addEventListener("click", () => {
    para.innerText = "";
});