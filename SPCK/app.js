document.addEventListener('DOMContentLoaded', function () {
    const chessboard = document.getElementById('chessboard');
    let selectedPiece = null;

    // Hàm tạo bàn cờ và quân cờ
    function createChessboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', handleCellClick);
                chessboard.appendChild(cell);
            }
        }

        createPieces();
    }

    function createPieces() {
        // Thêm quân cờ trắng
        addPiece('white', 'rook', 0, 0);
        addPiece('white', 'knight', 0, 1);
        addPiece('white', 'bishop', 0, 2);
        addPiece('white', 'queen', 0, 3);
        addPiece('white', 'king', 0, 4);
        addPiece('white', 'bishop', 0, 5);
        addPiece('white', 'knight', 0, 6);
        addPiece('white', 'rook', 0, 7);

        for (let col = 0; col < 8; col++) {
            addPiece('white', 'pawn', 1, col);
        }

        // Thêm quân cờ đen
        addPiece('black', 'rook', 7, 0);
        addPiece('black', 'knight', 7, 1);
        addPiece('black', 'bishop', 7, 2);
        addPiece('black', 'queen', 7, 3);
        addPiece('black', 'king', 7, 4);
        addPiece('black', 'bishop', 7, 5);
        addPiece('black', 'knight', 7, 6);
        addPiece('black', 'rook', 7, 7);

        for (let col = 0; col < 8; col++) {
            addPiece('black', 'pawn', 6, col);
        }
    }

    function addPiece(color, type, row, col) {
        const piece = document.createElement('div');
        piece.classList.add(type);
        piece.classList.add(color);
        chessboard.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`).appendChild(piece);
    }

    // Hàm xử lý sự kiện click vào ô cờ
    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedRow = parseInt(clickedCell.dataset.row);
        const clickedCol = parseInt(clickedCell.dataset.col);

        if (!selectedPiece) {
            // Nếu chưa có quân cờ được chọn, chọn quân cờ nếu ô cờ không trống
            if (cellHasPiece(clickedRow, clickedCol)) {
                selectPiece(clickedRow, clickedCol);
            }
        } else {
            // Nếu đã có quân cờ được chọn, thực hiện di chuyển nếu ô cờ đích hợp lệ
            if (isValidMove(selectedPiece.row, selectedPiece.col, clickedRow, clickedCol)) {
                movePiece(selectedPiece.row, selectedPiece.col, clickedRow, clickedCol);
            }

            // Bỏ chọn quân cờ sau khi thực hiện xong nước đi
            unselectPiece();
        }
    }

    // TODO: Thêm các hàm kiểm tra và thực hiện di chuyển quân cờ

    // Khởi tạo bàn cờ khi trang web được tải
    createChessboard();
});
