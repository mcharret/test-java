// create a table of 9 boxes out of 9 
let to_verify = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

// function to convert 1D array into 2D array
function F11() {
    for (let i = 0; i < 9; i++) {
        to_verify[i] = array_number[i].split(' ').map(Number);
    }
}

// function to display the table in the form of an HTLM table
function F12() {
    const tableContainer = document.getElementById('sudoku-table');
    let tableHTML = '<table border="1">';
    
    for (let i = 0; i < 9; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 9; j++) {
            tableHTML += `<td>${to_verify[i][j]}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    
    tableContainer.innerHTML = tableHTML;
}

F11();
F12();


