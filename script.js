const container = document.getElementById('container');
const containerSize = 11;

const stateArray = [];

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
        stateArray.push(cell);
        container.appendChild(cell);
    }
}

// console.log(stateArray);

//run the game
const mosaicArray = [];
const curCell = [5, 5];

const curTar = 10; //from mosaicArray

for(let i = 0; i < stateArray.length; i++){
    if(stateArray[i].dataset.column == curCell[0] && stateArray[i].dataset.row == curCell[1]){
        console.log(stateArray[i], 'logging current cell');
    }
}



