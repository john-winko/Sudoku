import json

from app.Logic.SolutionStep import SolutionStep
from app.Logic.SudokuCell import SudokuCell, SQ_MAP, COL_MAP, ROW_MAP


class HiddenSingleStep(SolutionStep):
    def __init__(self, hidden_cell: SudokuCell, candidates: list[SudokuCell], row, col, sq):
        self.direction, self.location = self.get_location(hidden_cell, row, col, sq)
        super().__init__(
            solve_type="Hidden Single",
            solve_cells=[hidden_cell],
            candidates=candidates,
            values=[hidden_cell.value]
        )

    @staticmethod
    def get_location(hidden_cell, row, col, sq):
        if row:
            return "row", ROW_MAP[hidden_cell.row]
        elif col:
            return "column", COL_MAP[hidden_cell.column]
        elif sq:
            return "square", SQ_MAP[hidden_cell.square]
        else:
            raise Exception("We shouldn't hit this")

    def __repr__(self):
        output = f"\n only cell in {self.direction} {self.location} with value {self.values}"
        if len(self.candidates) > 0:
            output += f"\n possibilities removed from ({self.candidates})"
        return super().__repr__() + output


def solve_hidden_single(cells, steps, func_remove_candidates):
    empty_cells = [b for b in cells if b.value == '0']
    for cell in empty_cells:
        for possibility in cell.possibilities:
            # only possibility within a given row, column or square
            p_row = len([b for b in cells if b.row == cell.row and possibility in b.possibilities]) == 1
            p_col = len([b for b in cells if b.column == cell.column and possibility in b.possibilities]) == 1
            p_sq = len([b for b in cells if b.square == cell.square and possibility in b.possibilities]) == 1

            if p_row or p_col or p_sq:
                # description = get_hidden_single_description(cell, p_row, p_col, p_sq)
                cell.possibilities = [possibility]
                cell.value = possibility
                candidates = func_remove_candidates(cell)
                solution_step = HiddenSingleStep(cell, candidates, p_row, p_col, p_sq)
                solution_step.board = json.dumps(cells, default=lambda x: x.__dict__)
                steps.append(solution_step)
                return True  # solving a cell changes possibilities so restart algo
    return False
