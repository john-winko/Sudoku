import json

from app.Logic.SolutionStep import SolutionStep


class HiddenPairStep(SolutionStep):
    def __init__(self, solve_cells, possibilities, direction):
        self.direction = direction
        super().__init__(
            solve_type="Hidden Pair",
            solve_cells=solve_cells,
            possibilities=possibilities
        )

    def __repr__(self):
        output = f"\n on cells in {self.direction} with candidate values {self.possibilities} " \
                 f"removed all other possibilities"
        return super().__repr__() + output


def solve_hidden_pair(cells, steps):
    empty_cells = [b for b in cells if b.value == '0']
    for position in range(0, 9):
        position_result = get_position_result(empty_cells, position)
        for left in range(1, 10):
            left_match = get_side_match(position_result, left)
            if left_match[0] or left_match[1] or left_match[2]:
                for right in range(left + 1, 10):
                    right_match = get_side_match(position_result, right)
                    step = remove_hidden_pair(position_result, left_match, right_match, left, right)
                    if step:
                        step.board = json.dumps(cells, default=lambda x: x.__dict__)
                        steps.append(step)
                        return True
    return False


def remove_hidden_pair(position_result, left_match, right_match, left, right):
    candidates = []
    direction = ""
    step = None
    if right_match[0] and left_match[0]:
        direction = "row"
        candidates.extend([b for b in position_result[0]
                           if str(right) in b.possibilities
                           and str(left) in b.possibilities])
    if right_match[1] and left_match[1]:
        direction = "column"
        candidates.extend([b for b in position_result[1]
                           if str(right) in b.possibilities
                           and str(left) in b.possibilities])
    if right_match[2] and left_match[2]:
        direction = "square"
        candidates.extend([b for b in position_result[2]
                           if str(right) in b.possibilities
                           and str(left) in b.possibilities])
    if len(candidates) > 1:
        for k in candidates:
            if len(k.possibilities) != 2:
                # only make a step if there are possibilities to remove
                step = HiddenPairStep(candidates, [left, right], direction)
                k.possibilities = [str(left), str(right)]
    return step


def get_position_result(empty_cells, position):
    """returns tuple of emtpy cells by row, column, square by its position"""
    row = [b for b in empty_cells if b.row == position]
    col = [b for b in empty_cells if b.column == position]
    sq = [b for b in empty_cells if b.square == position]
    return row, col, sq


def get_side_match(position_result, side):
    """returns tuple of row, column, square if the number of cells within its bounding area is 2"""
    row_match = len([b for b in position_result[0] if str(side) in b.possibilities])
    col_match = len([b for b in position_result[1] if str(side) in b.possibilities])
    sq_match = len([b for b in position_result[2] if str(side) in b.possibilities])
    return row_match == 2, col_match == 2, sq_match == 2
