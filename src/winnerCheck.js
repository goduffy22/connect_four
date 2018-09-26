//Note: For testing purposes comment out the export line at the bottom of the page.
var testGrid = [
    ["O","O","O","X","X","X","X"],
    ["X","O","X","X","O","X","X"],
    ["O","O","O","X","X","X","X"],
    ["X","X","X","X","O","O","O"],
    ["X","O","X","O","X","O","X"],
    ["X","X","X","O","O","O","O"],
];

//NOTE: This algorithm doesn't count the first counter so must
//enter the player that has just played. if you do the opposite O X O O is counted as a win if counting
// from the X



function winnerCheck(row, column, player, grid){
    let a = checkHorizontal(row, column, player, grid);
    let b = checkVertical(row, column, player, grid);
    let c = checkLeftDiagonal(row, column, player, grid);
    let d = checkRightDiagonal(row, column, player, grid);
    //TODO Exercise: Optimize the speed of this
    return a > 2 || b > 2 || c > 2 || d > 2;
}

function checkHorizontal(row, column, player, grid) {
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (valid(row, column - i, grid) && (grid[row][column - i] === player)) {
            count++;
        } else {
            break;
        }
    }
    if (count === 3) {
        return count;
    }
    for (let i = 1; i < 4; i++) {
        if (valid(row, column + i, grid) && (grid[row][column + i] === player)) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}

function checkVertical(row, column, player, grid){
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (valid(row - i, column, grid) && (grid[row - i][column] === player)) {
            count++;
        } else {
            break;
        }
    }
    if (count === 3) {
        return count;
    }
    for (let i = 1; i < 4; i++) {
        if (valid(row + i, column, grid) && (grid[row + i][column] === player)) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}

function checkLeftDiagonal(row, column, player, grid){
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (valid(row - i, column - i, grid) && (grid[row - i][column - i] === player)) {
            count++;
        } else {
            break;
        }
    }
    if (count === 3) {
        return count;
    }
    for (let i = 1; i < 4; i++) {
        if (valid(row + i, column + i, grid) && (grid[row + i][column + i] === player)) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}

function checkRightDiagonal(row, column, player, grid){
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (valid(row - i, column + i, grid) && (grid[row - i][column + i] === player)) {
            count++;
        } else {
            break;
        }
    }
    if (count === 3) {
        return count;
    }
    for (let i = 1; i < 4; i++) {
        if (valid(row + i, column - i, grid) && (grid[row + i][column - i] === player)) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}

function valid(row, column, grid){
    let result = false;
    if (row >= 0 && row < grid.length && column >=0 && column < grid[row].length){
        result = true;
    }
    return result;
}

//Note: For testing purposes comment out the export line.
export {winnerCheck, checkRightDiagonal, checkLeftDiagonal, checkHorizontal, checkVertical};