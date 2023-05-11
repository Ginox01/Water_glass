const waterLevel = document.getElementById('water-level');
const cups = document.querySelectorAll('.small-cup');



cups.forEach((cup,idx)=>cup.addEventListener('click',(e)=>{
    fillTheBigCup(e,idx);
    versaWater();
}));


function fillTheBigCup(e,idx){
    let thisCup = cups[idx];
    if(thisCup.classList.contains('full') && (!thisCup.nextElementSibling)){
        idx--
    }else if(thisCup.classList.contains('full') && (!thisCup.nextElementSibling.classList.contains('full'))){
        idx--
    }

    let totalCups = cups.length;
    
    cups.forEach((cup,idx2)=>{
        if(idx >= idx2){
            cup.classList.add('full');
            
        }else{
            cup.classList.remove('full');
        }

    })
}


function versaWater(index1,index2){
    let frationOfWater = 100/cups.length;
    cupsWithWater = document.querySelectorAll('.full').length;
    if(cupsWithWater == cups.length){
        document.querySelector('.info').style.color = 'white';
    }else{
        document.querySelector('.info').style.color = 'black';
    }
    
    
    waterLevel.style.height = frationOfWater * cupsWithWater + '%';

    let span = document.getElementById('remain');
    let totalLiters = 2;
    let waterLiters = cupsWithWater * 0.25;
    let remaine = totalLiters - waterLiters;
    span.innerHTML = remaine;

    
}

