window.onload = () => {
window.scrollTo(0, 0);
};

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
}
,{
threshold:0.35
});

document.querySelectorAll(".animate").forEach(el=>{
observer.observe(el);
});

document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click", function(){
setTimeout(()=>{
history.replaceState(null, null, " ");
}, 10);
});
});


const starContainer = document.querySelector(".stars");

for(let i=0;i<40;i++){
const star = document.createElement("div");
star.classList.add("star");

star.style.left = Math.random()*100 + "vw";
star.style.animationDuration = (4 + Math.random()*6) + "s";
star.style.animationDelay = Math.random()*5 + "s";

starContainer.appendChild(star);
}