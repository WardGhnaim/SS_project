// script.js
const cardT = `
        <div class="card notselected Card" style=" display: flex; flex-direction: column; justify-content: center; border: 1px solid #ffffff; overflow: hidden; box-shadow: 0 2px 3px 0 rgb(117, 117, 117); display: inline-block; margin: 5px 10px;">
        <div class="innn">
            <div style="text-align: center; height: 50%;">
                <img src="download.png" alt="Card Image" style="border-radius: 100%; margin: auto; display: block; margin-top: 10px; "class="immm">
                <h5 style="margin-top: 5%; font-size: large;">Ahmad Attar</h5>
            </div>
            <div style="margin: auto; margin-left: 10px; margin-right: 10px;">
                <div style="margin-bottom:10px;">
                    <p style="color: #878787; font-size: small; font-weight: 100; margin: 0%;">Submitted on:</p>
                    <strong style="font-size: small;">1/3/2024</strong><!--dynamic info-->
                </div>
                <div style="margin-bottom:10px;">
                    <p style="color: #878787; font-size: small; font-weight: 100; margin: 0%;">Duration:</p>
                    <strong style="font-size: small;">2 Weeks (1/4/2023-14/4/2023)</strong><!--dynamic info-->
                </div>
                <div style="margin-bottom:10px;">
                    <p style="color: #878787; font-size: small; font-weight: 100; margin: 0%;">Salary:</p>
                    <strong style="font-size: small;">2500 AED</strong><!--dynamic info-->
                </div>
            </div>
        </div>
        <div class="innn">
            <div style="text-align: center; padding: 10px;">
                <button class="declineBtn" style=" border-radius: 10px; color: #006b24; background-color: white; border-color: #006b24; border-style: solid; margin-right: 5px;   " class="buttons">Decline</button>
                <button class="approveBtn" style="border-radius: 10px; padding: 5px 10px; background-color: #006b24; color: white; border: none;  margin-right: 10px;  "class="buttons">Approve</button>
            </div>
        </div>
    </div>
        `;
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("accountUser").textContent = "Hazem";
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;



function next_slide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    show_slide(currentIndex);
}

function prev_slide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    show_slide(currentIndex);
}

function current_slide(index) {
    currentIndex = index;
    show_slide(currentIndex);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => current_slide(index));
});
function show_slide(index) {
    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    updateDots(index);
}


function auto_slide() {
    next_slide();
    setTimeout(auto_slide, 5000); //5seconds
}


document.addEventListener('DOMContentLoaded', () => {
    show_slide(currentIndex);
    auto_slide();
});

function CardContent(cardId,elementId){
   const card = document.getElementById(cardId);

}
document.getElementById('search-input').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        let title = card.querySelector('h5').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
});


const selectAllBtn = document.getElementById('selectAllBtn');
const selectAllText = document.getElementById('selectAllText');

    selectAllBtn.addEventListener('click', function() {
        
        selectAllBtn.classList.toggle('active');
        const divs = document.querySelectorAll('.notselected');
        divs.forEach(function(div) {div.classList.toggle('selected');});
    });

selectAllText.addEventListener('click', function() {selectAllBtn.click();});
    

document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('cont');
    const numberOfCards = 10;
    for (let i = 0; i < numberOfCards; i++) {
        cont.innerHTML += cardT;
    }
    cont.addEventListener('click', function(e) {
        if (e.target.classList.contains('approveBtn')) {
            const card = e.target.closest('.card');
            card.style.display = 'none'; 
        }
        if (e.target.classList.contains('declineBtn')) {
            const card = e.target.closest('.card');
            card.style.display = 'none'; 
        }
    });
});





