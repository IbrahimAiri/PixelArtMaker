// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const sPicker = document.getElementById('sizePicker') ;
const rowsNum = document.getElementById('inputHeight') ;
const cellsNum = document.getElementById('inputWidth') ;
const pixelCanvas = document.getElementById('pixelCanvas') ;

// When size is submitted by the user, call makeGrid()

function makeGrid() {
for (let x = 0; x < rowsNum.value ; x ++) {
  const insertRow = pixelCanvas.insertRow(0) ;
  for (let y = 0 ; y < cellsNum.value ; y ++) {
    insertRow.insertCell(0) ;
  }
}

}

sPicker.addEventListener('submit' ,function (evt) {
  pixelCanvas.innerHTML = "" ; // to clear the old cavans
  evt.preventDefault() ; // to tell the browser we don't want it to act

makeGrid() ;

} ) ;

// if the user clicks on a cell , cahnge the color to his choice
pixelCanvas.addEventListener('click' , function(evt) {
  if (evt.target.nodeName === 'TD') {
    evt.target.style.backgroundColor = colorPicker.value ;
  }
} ) ;
