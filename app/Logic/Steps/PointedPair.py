import json

from app.Logic.SolutionStep import SolutionStep
from app.Logic.SudokuCell import SudokuCell, ROW_MAP, SQ_MAP, COL_MAP


class PointedPairStep(SolutionStep):
    def __init__(self, solve_cells: list[SudokuCell], direction, possibility, candidates: list[SudokuCell]):
        self.direction = direction
        super().__init__(
            solve_type="Pointed Pair",
            solve_cells=solve_cells,
            possibilities=[possibility],
            candidates=candidates
        )
        self.location = self.get_location()

    def get_location(self):
        if self.direction == "row":
            return ROW_MAP[self.solve_cells[0].row]
        elif self.direction == "column":
            return COL_MAP[self.solve_cells[0].column]
        elif self.direction == "square":
            return SQ_MAP[self.solve_cells[0].square]
        else:
            raise Exception("We shouldn't hit this")

    def __repr__(self):
        output = f"\n only cells in {self.direction} {self.location}" \
                 f"\n possibilities removed from ({self.candidates})"
        return super().__repr__() + output


def solve_pointed_pair(cells: list[SudokuCell], steps: list[SolutionStep]):
    for rowcolsq in range(0, 9):
        for possibility in range(1, 10):
            # list of all empty cells with a given possibility
            cells_with_possibility = [b for b in cells if str(possibility) in b.possibilities and b.value == '0']

            row_result = find_pointed_pair_row(cells_with_possibility, rowcolsq)
            column_result = find_pointed_pair_col(cells_with_possibility, rowcolsq)
            square_result = find_pointed_pair_sq(cells_with_possibility, rowcolsq)
            solution_step = None

            # tuple is the pointed pair, candidates
            if row_result:
                solution_step = remove_pointed_pair(row_result[0], "row", str(possibility), row_result[1])
            elif column_result:
                solution_step = remove_pointed_pair(column_result[0], "column", str(possibility), column_result[1])
            elif square_result:
                solution_step = remove_pointed_pair(square_result[0], "square", str(possibility), square_result[1])
            if solution_step:
                solution_step.board = json.dumps(cells, default=lambda x: x.__dict__)
                steps.append(solution_step)
                return True
    return False


def remove_pointed_pair(pair, direction, possibility, candidates):
    for pp in candidates:
        pp.possibilities.remove(possibility)
    return PointedPairStep(pair, direction, possibility, candidates)


def pointed_pair_exists(lst):
    """Takes in a row/column/square and returns a tuple of whether the respective row/column/square are distinct
    compares all other items in list to the first item and the tuple for the respective row/col/sq only if all other
    items have the same row/col/sq"""
    if len(lst) > 0:
        row_only, column_only, square_only = True, True, True
        for cell in list(lst)[1:]:
            if lst[0].row != cell.row:
                row_only = False
            if lst[0].column != cell.column:
                column_only = False
            if lst[0].square != cell.square:
                square_only = False
        return row_only, column_only, square_only
    else:
        return False, False, False


def find_pointed_pair_row(cells_with_possibility, row):
    """further filter down the cells with the possibility to the row
    then check if there is a pointed pair within that row"""
    poss_row = [b for b in cells_with_possibility if b.row == row]
    _, column, square = pointed_pair_exists(poss_row)
    candidates = []
    if column:
        candidates = [b for b in cells_with_possibility if b.column == poss_row[0].column and b.row != row]
    if square:
        candidates = [b for b in cells_with_possibility if b.square == poss_row[0].square and b.row != row]
    if candidates:
        return poss_row, candidates
    return None


def find_pointed_pair_col(poss, col):
    """further filter down the cells with the possibility to the column
    then check if there is a pointed pair within that column"""
    poss_cols = [b for b in poss if b.column == col]
    row, _, square = pointed_pair_exists(poss_cols)
    candidates = []
    if row:
        candidates = [b for b in poss if b.row == poss_cols[0].row and b.column != col]
    if square:
        candidates = [b for b in poss if b.square == poss_cols[0].square and b.column != col]
    if candidates:
        return poss_cols, candidates
    return None


def find_pointed_pair_sq(poss, sq):
    """further filter down the cells with the possibility to the square
    then check if there is a pointed pair within that square"""
    poss_sq = [b for b in poss if b.square == sq]
    row, column, _ = pointed_pair_exists(poss_sq)
    candidates = []
    if row:
        candidates = [b for b in poss if b.row == poss_sq[0].row and b.square != sq]
    if column:
        candidates = [b for b in poss if b.column == poss_sq[0].column and b.square != sq]
    if candidates:
        return poss_sq, candidates
    return None
