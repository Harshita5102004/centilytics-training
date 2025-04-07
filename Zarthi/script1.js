// Import JSON data correctly
import jsonData from './data.json' with { type: "json" };

// Select the main content container
let mainContent = document.querySelector('.main-content');
let section_2_cards = document.querySelector('#section-2-part-2 .card-container');

// Function to truncate text to 3 lines (approximate character limit)
function threeLines(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Generate dynamic card content for section 1
let str = jsonData.map(elem => `
    <div class="cards">
        <div class="card-upper">
            <h3>${elem.service_name}</h3>
            <p>${threeLines(elem.service_description)}</p>
        </div>
        <hr/>
        <div class="card-bottom">
            <button class="cloud-btn">Cloud Operations</button>
            <div class="price">Starting from &#8377; ${elem.price}</div>
        </div>
    </div>
`).join(''); 

// Inject content into .main-content
mainContent.innerHTML = str;

// Select all generated cards
let Part_1_cards = document.querySelectorAll('.main-content .cards');
let section_2 = document.querySelector('.section-2');


// Add event listener for card selection behavior
Part_1_cards.forEach(function(elem){
    let isSelected = false;
    elem.addEventListener("click", function(){
        if (!isSelected) {
            // elem.style.border =  #ffb938;
            // mainContent.style.width = '30%';
    
            section_2_cards.style.flexDirection = 'column';
            section_2.style.width='30%';
            // document.querySelector('.mid-bar').style.flexDirection = 'column';
            Part_1_cards.forEach(function(card){
                card.style.width = '100%';
            });

            let div2 = document.getElementById("section-2-part-2");
            console.log(div2);
            
            div2.style.display = "block";
        } else {
            // elem.style.border =  #d4d4d4;
            mainContent.style.width = '100%';
            section_2_cards.style.flexDirection = 'row';
           
            document.querySelector('.mid-bar').style.flexDirection = 'row';
            Part_1_cards.forEach(function(card){
                card.style.width = '32.5%';
            });
        }
        isSelected = !isSelected;
    });
});

// Generate card content for section 2 (with at least 20 cards)
let str2 = '';
for (let i = 0; i < 20; i++) {
    let elem = jsonData[i % jsonData.length]; // Repeat data if less than 20
    str2 += `
        <div class="card">
            <div class="left-side">
                <h2>${elem.service_name}</h2>
                <p>${elem.service_description}</p>
                <div class="reviews">
                    <img src="zarthiassets/Frame (3).svg" alt="">
                    <h4>100+ Successful Deliveries</h4>
                    <h4 id="review">12 Reviews</h4>
                    <img src="zarthiassets/external-link 1.svg" alt="">
                </div>
            </div>
            <div class="right-side">
                <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                <h4>Avg. SLA 12hr</h4>
                <button>Request</button>
            </div>
        </div>`;
}

// Inject 20 cards into .section-2-part-2 .card-container
section_2_cards.innerHTML = str2;
let allCard = document.querySelector('.card');


allCard.addEventListener("click", function () {
    console.log("click");
    let div2 = document.getElementById("section-2-part-2");
    div2.style.display = "flex"; // Show div2 when div1 is clicked
});