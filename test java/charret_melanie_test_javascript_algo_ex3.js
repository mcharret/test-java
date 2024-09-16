// Function to check errors in lines using F21, and to show an error message
function F31() {
    for (let i = 0; i < 9; i++) {
        if (F21(to_verify[i]) === false) {
            console.log(`Error in row ${i + 1}:`, to_verify[i]);
        }
    }
}

// Function to check errors in columns using F21, and to show an error message
function F32() {
    for (let j = 0; j < 9; j++) {
        let column = [];
        for (let i = 0; i < 9; i++) {
            column.push(to_verify[i][j]);
        }
        if (F21(column) === false) {
            console.log(`Error in column ${j + 1}:`, column);
        }
    }
}

// Function to check errors in regions using F21, and to show an error message
function F33() {
    const regionIndices = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6]
    ];

    for (let idx = 0; idx < 9; idx++) {
        let region = [];
        let [startRow, startCol] = regionIndices[idx];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                region.push(to_verify[startRow + i][startCol + j]);
            }
        }
        
        if (F21(region) === false) {
            console.log(`Error in region ${idx + 1}:`, region);
        }
    }
}
F31();
F32();
F33();


