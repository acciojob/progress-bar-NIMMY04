//your JS code here. If required.
const circles = document.querySelectorAll('.circles');
const nextbutton = document.querySelectorById('next');
const prevbutton = document.querySelectorById('prev');
let currentActive = 0;

nextbutton.addEventListner('click',() =>{
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
nextbutton.disabled = curtentActive === circles.length -1;
}