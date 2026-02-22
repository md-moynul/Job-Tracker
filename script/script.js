
//  btn selectors
const buttons = document.querySelectorAll('#nav-btn-container button ');
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');


// total selectors
const cardContainer = document.getElementById('card-container');
const totalHeading = document.getElementById('total-heading');
const totalSide = document.getElementById("total-side");

// section selectors
const allSection = document.getElementById('card-container');
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('ejected-section');
const mainContainer = document.getElementsByTagName('main')

function toggle(id){
    removeColor(allBtn);
    removeColor(interviewBtn);
    removeColor(rejectedBtn);
    addColor(allBtn);
    addColor(interviewBtn);
    addColor(rejectedBtn);
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-base-100','text-black/50');
    selected.classList.add('bg-primary','text-base-100');
}

function calculateCountTotal(){
    const totalCount = cardContainer.children.length;
    totalHeading.innerText = totalCount;
    totalSide.innerText = totalCount;
}
calculateCountTotal()