const container = document.getElementById('container');
const containerSize = 11;

//change to array of arrays
const cellArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//creates the game grid

for(let column = 0; column < containerSize; column++){
    for(let row = 0; row < containerSize; row++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.column = column;
        cell.dataset.row = row;
        if(column === 5 && row === 5){
            cell.classList.add('center');
        }
        cellArray[column][row] = cell;
        container.appendChild(cell);
    }
}

console.log(cellArray);

//game variables
const mosaicArray = [];
const curCell = [5, 5];
const curVal = 5;

const curTar = 10; //from mosaicArray

//access specific cell using curCell variable
for(let column = 0; column < containerSize; column++){
    for(let row = 0; row < containerSize; row++){
        if(cellArray[column][row].dataset.column == curCell[0] && cellArray[column][row].dataset.row == curCell[1]){
            console.log(cellArray[column][row], 'logging current cell');
            cellArray[column][row].textContent = curVal;
            cellArray[column-1][row+1].textContent = 1;
            cellArray[column][row+1].textContent = 2;
            cellArray[column+1][row+1].textContent = 3;
            cellArray[column+1][row].textContent = 4;
            cellArray[column+1][row-1].textContent = 5;
            cellArray[column][row-1].textContent = 6;
            cellArray[column-1][row-1].textContent = 7;
            cellArray[column-1][row].textContent = 8;
        }
    }
}



