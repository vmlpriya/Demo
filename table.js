var currentRow = 0;
var currentCol = 0;
function createTable() {
    rn = window.prompt("Input number of rows");
    cn = window.prompt("Input number of columns");
    var table = document.getElementById('myTable');
    for (var r = 0; r < parseInt(rn, 10); r++) {
    var row = table.insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
    var cell = row.insertCell(c);
    cell.innerHTML = "";
    }
}
            placeIcon(0, 0);
        }

        function placeIcon(row, col) {
            var previousCell = document.querySelector('.icon');
            if (previousCell) {
                previousCell.classList.remove('icon');
                previousCell.innerHTML = "";
            }

            var table = document.getElementById('myTable');
            var cell = table.rows[row].cells[col];
            cell.innerHTML = '<div class="icon"><i class="fa-solid fa-person-dress"></i></div>'; 
            currentRow = row;
            currentCol = col;
        }

        function moveIcon(direction) {
            var newRow = currentRow;
            var newCol = currentCol;

            switch (direction) {
                case 'left':
                    newCol = currentCol==0? alert('No more moves') : currentCol -1;
                    break;
                case 'right':
                    newCol = (currentCol==(parseInt(rn, 10) - 1))? alert('No more moves'): currentCol + 1;
                    break;
                case 'up':
                    newRow = currentRow == 0? alert('No more moves'): currentRow - 1;
                    break;
                case 'down':
                    newRow = (currentRow==(parseInt(cn, 10) - 1))? alert('No more moves'): currentRow + 1;
                    break;
                default:
                    break;
            }

            placeIcon(newRow, newCol);
        }