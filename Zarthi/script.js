import jsonData from './data.json' with {type:"json"}
let  section_2 = document.querySelector('.cards');
function threeLines(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
let str = '';
jsonData.map(function(elem){
    console.log(elem)
    str += `<div class="card1">
                <div class="heading">
                   <h4>${elem.service_name}</h4> 
                    <p>${ threeLines(elem.service_description)}</p>  </div>
                 <div class="line"> </div>
                <div class="bottom">
                    
                    <div class="button-1">
                    Cloud Operations 
                    </div>
                    <div class="button-2">
                       Starting from 
                       &#8377;  ${elem.price}
                    </div>
                </div>
            </div>`
})


console.log(str);


section_2.innerHTML = str;

