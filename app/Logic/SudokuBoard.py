from .SudokuCell import SudokuCell
from .Steps.NakedSingle import solve_naked_singles
from .Steps.NakedPair import solve_naked_pair
from .Steps.HiddenSingle import solve_hidden_single
from .Steps.HiddenPair import solve_hidden_pair
from .Steps.PointedPair import solve_pointed_pair


class SudokuBoard:
    def __init__(self, board, solution=None):
        # TODO add clean for using non-zero blank elements (i.e. -,.)
        self.board = board
        self.solution = solution
        self.cells = SudokuCell.create_cells(board)
        self.steps = []
        self.create_board()

    def remove_candidates(self, cell):
        """ Removes the cell's solved value from the possibilities of other cells in the row/column/square"""
        candidates = [b for b in self.cells if cell.value in b.possibilities and b.value == '0' and
                      (cell.row == b.row or cell.column == b.column or cell.square == b.square)]
        for candidate in candidates:
            candidate.possibilities.remove(cell.value)
        return candidates

    def solve(self):
        solved = False
        while not solved:
            # Easy
            if solve_naked_singles(self.cells, self.steps, self.remove_candidates):
                continue
            if solve_hidden_single(self.cells, self.steps, self.remove_candidates):
                continue
            # Medium
            if solve_pointed_pair(self.cells, self.steps):
                continue
            if solve_naked_pair(self.cells, self.steps):
                continue
            # Challenging
            if solve_hidden_pair(self.cells, self.steps):
                continue
            # Hard
            # TODO X-Wing
            # Extreme
            self.solution = "".join([c.value for c in self.cells])
            solved = True
        return True

    def create_board(self):
        # initial run through, remove possibilities in associated row/col/sq for given solved cells value
        for cell in [b for b in self.cells if b.value != '0']:
            self.remove_candidates(cell)

    def get_hint(self):
        # TODO maybe refactor out for each to return the solution step instead of true/false
        solution_step = []
        if solve_naked_singles(self.cells, solution_step, self.remove_candidates):
            return solution_step[0]
        if solve_hidden_single(self.cells, solution_step, self.remove_candidates):
            return solution_step[0]
        # Medium
        if solve_pointed_pair(self.cells, solution_step):
            return solution_step[0]
        if solve_naked_pair(self.cells, solution_step):
            return solution_step[0]
        # Challenging
        if solve_hidden_pair(self.cells, solution_step):
            return solution_step[0]
        return []

    # def find_wrong_guesses(self, board_string):
    #     # TODO maybe move this logic into the constructor to make the solution string
    #     self.solve()
    #     wrong_answers = []
    #     for (index, cell) in enumerate(self.cells):
    #         if board_string[index] != "0" and board_string[index] != cell.value:
    #             wrong_answers.append(cell.cell_id)
    #     return wrong_answers
