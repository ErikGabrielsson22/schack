export function canMove(board, selected, destination) {
    const piece = board[selected.row][selected.column];
    
    let rowDifferrence = destination.row - selected.row;
    let columnDifference = destination.column - selected.column;

    if (rowDifferrence  === 0 && columnDifference === 0) {
        return false;
    }

    if (piece === 'w-pawn') {
        if (rowDifferrence === -1 && columnDifference === 0) return true;
    }
    if (piece === 'b-pawn') {
        if (rowDifferrence === 1 && columnDifference === 0) return true;
    }

    if (piece === 'w-rook' || piece === 'b-rook') {
        if (rowDifferrence === 0 || columnDifference === 0) return true;
    }

    if (piece === 'w-knight' || piece === 'b-knight') {
        if (rowDifferrence === -2 && columnDifference === 1) return true;
        if (rowDifferrence === -2 && columnDifference === -1) return true;
        if (rowDifferrence === 2 && columnDifference === 1) return true;
        if (rowDifferrence === 2 && columnDifference === -1) return true;
        if (rowDifferrence === -1 && columnDifference === 2) return true;
        if (rowDifferrence === 1 && columnDifference === 2) return true;
        if (rowDifferrence === -1 && columnDifference === -2) return true;
        if (rowDifferrence === 1 && columnDifference === -2) return true;
    }

    if (piece === 'w-bishop' || piece === 'b-bishop') {
        if (rowDifferrence === columnDifference || rowDifferrence === -columnDifference) {
            return true;
        }
    }

    if (piece === 'w-king' || piece === 'b-king') {
        if (rowDifferrence >= -1 && rowDifferrence <= 1 && columnDifference >= -1 && columnDifference <= 1) {
            return true;
        }
    }

    if (piece === 'w-queen' || piece === 'b-queen') {
        if (rowDifferrence === 0 || columnDifference === 0) return true;
        if (rowDifferrence === columnDifference || rowDifferrence === -columnDifference) return true;
    }

    return false;
}
