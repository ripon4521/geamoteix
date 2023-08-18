
function calculateTraingleArea() {

    // traingle calculete 
    const base = getInputValue('traingle-base');
    const height = getInputValue('traingle-heigt');
    if (isNaN(base) || isNaN (height)) {
        alert('Please insert a number!');
        return;
    }
    const area = 0.5 * base*height;
    setElementText('traingle-area', area);
    addToCalculationEntry('Trainagle', area);
    

    


}

// Rectangle area Calculate

function calculateRectangleArea() {
    const width = getInputValue('rechtengle-width');
    const lenthgh = getInputValue ('rectengle-lenthgh');
    if (isNaN(width)|| isNaN(lenthgh)) {
        alert('Please inseart number!');
        return;
    }
    const area = width * lenthgh ;
    setElementText('rectangle-area', area);
    addToCalculationEntry('Reactangle' , area)
    
    
}

// Praalaa area Calculate 

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert('Please inseart  Number!');
        return;
    }
    const area = base*height;
    setElementText('parallelogram-area', area);
    addToCalculationEntry('Pralalaogram' , area)

    
}


function getInputValue(filedId) {
    const inputFiled = document.getElementById(filedId);
    const inputvalueText = inputFiled.value;
    const value = parseFloat(inputvalueText);
    return value;
}

function setElementText(elementId , area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


  

// clear Button 

document.getElementById('btn-clear').addEventListener('click',function(){
    // paralalgogram 
    const base = document.getElementById('parallelogram-base');
    base.value = '';
    const height = document.getElementById('parallelogram-height');
    height.value = '';
    const area = document.getElementById('parallelogram-area');
    area.innerText = 0;
 

    // reactangle value clear
     const width = document.getElementById('rechtengle-width');
     width.value = '';
     const lenthgh = document.getElementById ('rectengle-lenthgh');
     lenthgh.value = '';
     const reactangleArea = document.getElementById('rectangle-area');
     reactangleArea.innerText = 0;

    //  traingle value clear 
    const traingleBase =  document.getElementById ('traingle-base');
    traingleBase.value = '';
    const traingleHeight = document.getElementById('traingle-heigt');
    traingleHeight.value = '';
    const traingleArea = document.getElementById('traingle-area');
    traingleArea.innerText = 0;

})



function addToCalculationEntry(areatype , area) {
 
    
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-5')
    p.innerHTML =` ${count + 1}. ${areatype} ${area}
    cm<sup>2</sup> <button class = " btn btn-success btn-sm">convert</button>

    ` 
    calculationEntry.appendChild(p);
}