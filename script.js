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
    value;
    row;
    column;
    name;
    div;

    topRight;
    right;
    botRight;
    bot;
    botLeft;
    left;
    topLeft;
    top;

    constructor(row, column, div){
        this.row = row; 
        this.column = column;
        this.div = div;
        this.name = `Cell ${row}, ${column}`;
    }

    getRow(){
        return this.row;
    }
    getColumn(){
        return this.column;
    }
    getDiv(){
        return this.div;
    }
    getName(){
        return this.name;
    }    
    
    setValue(value){
        this.value = value;
    }
    getValue(){
        return this.value;
    }
}

//creates the game grid
for(let row = 0; row < containerSize; row++){
    for(let column = 0; column < containerSize; column++){
        let cell = new Cell(row, column, document.createElement('div'));
        cell.div.classList.add('cell');
        cell.div.dataset.row = row;
        cell.div.dataset.column = column;
        cell.div.dataset.value = 0;
        if(row === 5 && column === 5){
            cell.div.classList.add('center');
        }
        cellArray[row][column] = cell;
        container.appendChild(cell.div);
    }
}

console.log(cellArray);

//game variables
const mosaicArray = [];
const curCell = [5, 5];
const curVal = 5;

const curTar = 10; //from mosaicArray

//assign relationships between cells
for(let row = 0; row < containerSize; row++){
    for(let column = 0; column < containerSize; column++){
        let thisCell = cellArray[row][column];
        if(row > 0 && column < 10) thisCell.topRight = cellArray[row-1][column+1];
        if(column < 10) thisCell.topRight = cellArray[row][column+1];
        if(row < 10 && column < 10) thisCell.topRight = cellArray[row+1][column+1];
        if(row < 10) thisCell.topRight = cellArray[row+1][column];
        if(row < 10 && column > 0) thisCell.topRight = cellArray[row+1][column-1];
        if(column > 0) thisCell.topRight = cellArray[row][column-1];
        if(row > 0 && column > 0) thisCell.topRight = cellArray[row-1][column-1];
        if(row > 0)thisCell.topRight = cellArray[row-1][column];
    }
}

//access specific cell using curCell variable
for(let row = 0; row < containerSize; row++){
    for(let column = 0; column < containerSize; column++){
        if(cellArray[row][column].div.dataset.row == curCell[0] && cellArray[row][column].getDiv().dataset.column == curCell[1]){
            console.log(cellArray[row][column], 'logging current cell');
            cellArray[row][column].div.textContent = curVal; //current

            cellArray[row-1][column+1].div.textContent = 1; //topRight
            cellArray[row][column+1].div.textContent = 2; //right
            cellArray[row+1][column+1].div.textContent = 3; //botRight
            cellArray[row+1][column].div.textContent = 4; //bot
            cellArray[row+1][column-1].div.textContent = 5; //botLeft
            cellArray[row][column-1].div.textContent = 6; //left
            cellArray[row-1][column-1].div.textContent = 7; //topLeft
            cellArray[row-1][column].div.textContent = 8; //top
        }
    }
}



