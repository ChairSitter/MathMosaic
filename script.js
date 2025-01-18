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

class Cell {
    #value;
    #column;
    #name;
    #row;
    #div;

    constructor(column, row){
        this.#column = column;
        this.#row = row;
        this.#name = `Cell ${column}, ${row}`;
    }

    setDiv(){

    }
    
    setValue(value){
        this.#value = value;
    }
    getValue(){
        return this.#value;
    }

    getColumn(){
        return this.#column;
    }
    getRow(){
        return this.#row;
    }
    getName(){
        return this.#name;
    }
}

//creates the game grid
for(let column = 0; column < containerSize; column++){
    for(let row = 0; row < containerSize; row++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.column = column;
        cell.dataset.row = row;
        cell.dataset.value = 0;
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
            cellArray[column][row].dataset.value = 1;
            cellArray[column-1][row+1].textContent = 1;
            cellArray[column][row].dataset.value = 2;
            cellArray[column][row+1].textContent = 2;
            cellArray[column][row].dataset.value = 3;
            cellArray[column+1][row+1].textContent = 3;
            cellArray[column][row].dataset.value = 4;
            cellArray[column+1][row].textContent = 4;
            cellArray[column][row].dataset.value = 5;
            cellArray[column+1][row-1].textContent = 5;
            cellArray[column][row].dataset.value = 6;
            cellArray[column][row-1].textContent = 6;
            cellArray[column][row].dataset.value = 7;
            cellArray[column-1][row-1].textContent = 7;
            cellArray[column][row].dataset.value = 8;
            cellArray[column-1][row].textContent = 8;
        }
    }
}



