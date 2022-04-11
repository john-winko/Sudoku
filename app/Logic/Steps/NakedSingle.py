import json
from app.Logic.SolutionStep import SolutionStep
from app.Logic.SudokuCell import SudokuCell


class NakedSingleStep(SolutionStep):
    def __init__(self, naked_cell: SudokuCell, candidates: list[SudokuCell]):
        super().__init__(
            solve_type="Naked Single",
            solve_cells=[naked_cell],
            candidates=candidates,
            values=[naked_cell.value]
        )

    def __repr__(self):
        output = f"\n only candidate value '{self.values}'"
        if len(self.candidates) > 0:
            output += f"\n possibilities removed from ({self.candidates})"
        return super().__repr__() + output


def solve_naked_singles(cells: list[SudokuCell], steps: list[SolutionStep], func_remove_candidates) -> bool:
    naked_singles = [b for b in cells if b.value == '0' and len(b.possibilities) == 1]
    for naked_single in naked_singles:
        naked_single.value = naked_single.possibilities[0]
        candidates = func_remove_candidates(naked_single)
        step = NakedSingleStep(naked_single, candidates)
        step.board = json.dumps(cells, default=lambda x: x.__dict__)
        steps.append(step)
    return len(naked_singles) > 0
