import json

from app.Logic.SolutionStep import SolutionStep


class NakedPairStep(SolutionStep):
    def __init__(self, solve_cells, direction, possibilities, candidates):
        self.direction = direction
        super().__init__(
            solve_type="Naked Pair",
            solve_cells=solve_cells,
            candidates=candidates,
            possibilities=possibilities
        )

    def __repr__(self):
        # candidate_str = ", ".join([b.cell_id for b in self.candidates])
        output = f"\n only these cells can have candidate values {self.possibilities} for {self.direction}" \
                 f"\n possibilities removed from {self.candidates} "
        return super().__repr__() + output


def solve_naked_pair(cells, steps):
    cells_two_possibilities = [b for b in cells if b.value == '0' and len(b.possibilities) == 2]
    for cell in cells_two_possibilities:
        if remove_naked_pair_row(cells_two_possibilities, cell, cells, steps):
            return True
        if remove_naked_pair_col(cells_two_possibilities, cell, cells, steps):
            return True
        if remove_naked_pair_sq(cells_two_possibilities, cell, cells, steps):
            return True
    return False


def remove_naked_pair(p1, p2, matched, candidates, direction):
    # remove those elements
    for cell in candidates:
        if p1 in cell.possibilities:
            cell.possibilities.remove(p1)
        if p2 in cell.possibilities:
            cell.possibilities.remove(p2)
    return NakedPairStep(matched, direction, [p1, p2], candidates)


def remove_naked_pair_row(cells_two_possibilities, cell, cells, steps):
    matched_row = [b for b in cells_two_possibilities
                   if cell.possibilities == b.possibilities
                   and b.row == cell.row]
    if len(matched_row) == 2:
        # removed other poss from column
        p1 = matched_row[0].possibilities[0]
        p2 = matched_row[0].possibilities[1]
        row = [b for b in cells if b.row == matched_row[0].row and b not in matched_row]
        candidates = [b for b in row if p1 in b.possibilities or p2 in b.possibilities]
        if len(candidates) > 0:
            step = remove_naked_pair(p1, p2, matched_row, candidates, "row")
            step.board = json.dumps(cells, default=lambda x: x.__dict__)
            steps.append(step)
            return True
    return False


def remove_naked_pair_col(cells_two_possibilities, cell, cells, steps):
    matched_col = [b for b in cells_two_possibilities
                   if cell.possibilities == b.possibilities
                   and b.column == cell.column]
    if len(matched_col) == 2:
        # removed other poss from column
        p1 = matched_col[0].possibilities[0]
        p2 = matched_col[0].possibilities[1]
        col = [b for b in cells if b.column == matched_col[0].column and b not in matched_col]
        candidates = [b for b in col if p1 in b.possibilities or p2 in b.possibilities]
        if len(candidates) > 0:
            step = remove_naked_pair(p1, p2, matched_col, candidates, "col")
            step.board = json.dumps(cells, default=lambda x: x.__dict__)
            steps.append(step)
            return True
    return False


def remove_naked_pair_sq(cells_two_possibilities, cell, cells, steps):
    matched_sq = [b for b in cells_two_possibilities
                  if cell.possibilities == b.possibilities
                  and b.square == cell.square]
    if len(matched_sq) == 2:
        # removed other poss from column
        p1 = matched_sq[0].possibilities[0]
        p2 = matched_sq[0].possibilities[1]
        col = [b for b in cells if b.square == matched_sq[0].square and b not in matched_sq]
        candidates = [b for b in col if p1 in b.possibilities or p2 in b.possibilities]
        if len(candidates) > 0:
            step = remove_naked_pair(p1, p2, matched_sq, candidates, "sq")
            step.board = json.dumps(cells, default=lambda x: x.__dict__)
            steps.append(step)
            return True
    return False
