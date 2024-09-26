//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const nextbutton = document.getElementById('next');
const prevbutton = document.getElementById('prev');
let currentActive = 0;

nextbutton.addEventListener('click',() =>{
    currentActive++;
    updateProgress();
});

prevbutton.addEventListner('click',() =>{
    currentActive--;
    updateProgress();
})

function updateProgress(){
    circles.forEach((circle,index)=>{
        if(index < currentActive + 1){
            circle.classList.add('active');
    }
else{
    circle.classList.remove('active');
}
});
prevButton.disabled = currentActive === 0;
nextbutton.disabled = currentActive === circles.length -1;
}