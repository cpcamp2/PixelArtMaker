// Create makeGrid function

function makeGrid(){
  // Define grid height/width and pixelcanvas table
  const canvas = document.querySelector("#pixel_canvas");
  let height = document.querySelector("#input_height").value;
  let width = document.querySelector("#input_width").value;

  // Remove all children from canvas so if makeGrid gets called again it cleans the canvas
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  // Loop for height and add tr to canvas
  for (let x = 0; x < height; x++) {
    const row = document.createElement('tr');
    canvas.appendChild(row);

    for (let y = 0; y < width; y++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
  }
}
// Add eventlisteners to cells
function addEventListenersToCells() {
  const cells = document.querySelectorAll('td');
  for (let z = 0; z < cells.length; z++) {
    cells[z].addEventListener('click', function(e){
      let targetCell = e.target;
      let color = document.querySelector("#color_picker").value;
      targetCell.setAttribute('bgcolor', color);
    });
  }
}


// Assign the form submit to a variable and put an eventlistener on click that runs makeGrid
document.getElementById('size_picker').addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
  addEventListenersToCells();
})
