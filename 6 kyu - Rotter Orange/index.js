// Wait long enough and a single rotten orange can turn a whole box of oranges to trash.

// You will be given a box of oranges. Find out how long it takes until all oranges are rotten.

// a rotten orange will rot every neighboring orange (use Von Neumann neighborhood)
// a box of oranges will be given to you as an int[][] orangeBox (or a list of lists orange_box in Python)
// all inner lists have an equal length
// rotten oranges are represented by 2
// fresh oranges are represented by 1
// empty spaces are represented by 0
// return an int value noting the time needed to fully rot the box
// return -1 in case the box will never completely rot
// Example:
// orangeBox:

// 2 1 1
// 1 1 1 
// orangeBox after 1 time unit:

// 2 2 1
// 2 1 1
// orangeBox after 2 time units:

// 2 2 2 
// 2 2 1
// orangeBox after 3 time units:

// 2 2 2
// 2 2 2

function calcRotTime(box){
    const rows = box.length;
    const cols = box[0].length;
    const queue = [];
    let freshOranges = 0;
    let time = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (box[i][j] === 2) queue.push([i, j]);
            if (box[i][j] === 1) freshOranges++;
        }
    }

    queue.push([-1, -1]);

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        if (x === -1 && y === -1) {
            if (queue.length > 0) {
                time++;
                queue.push([-1, -1]);
            }
        } else {
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for (const [dx, dy] of directions) {
                const newRow = x + dx;
                const newCol = y + dy;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && box[newRow][newCol] === 1) {
                    box[newRow][newCol] = 2;
                    freshOranges--;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
    return freshOranges === 0 ? time : -1;
}