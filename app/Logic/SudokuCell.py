from json import JSONEncoder

COL_MAP = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
ROW_MAP = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
SQ_MAP = ['1', '2', '3', '4', '5', '6', '7', '8', '9']



class SudokuCell:

    def __init__(self, value, row, column, square):
        # always ensure unfilled values are 0 (for when we get a blank, dot or something else). sq_map happens
        # to already have the values as characters needed
        self.value = value if value in SQ_MAP else "0"
        self.row = row
        self.column = column
        self.square = square

        self.cell_id = ROW_MAP[int(row)] + COL_MAP[int(column)]
        # fill in possibilities 1-9 for a blank cell
        # always keep the value in the possibilities for later cross-comparisons
        self.possibilities = [str(x) for x in list(range(1, 10))] if self.value == "0" else [self.value]

    def __repr__(self):
        return f"{self.cell_id} - {' '.join(self.possibilities)}"

    def encode(self):
        return {
            "cell_id": self.cell_id,
            "possibilities": self.possibilities,
            "value":self.value,
            "row":self.row,
            "column":self.column,
            "square":self.square
        }
    # def get_state(self):
    #     """Back filling possibilities, so it is easier to see possibilities in a 9x9 grid holding 10 values
    #     (actual value plus 9 possibilities"""
    #     output = self.value
    #     for poss in range(1, 10):
    #         if str(poss) in self.possibilities:
    #             output += str(poss)
    #         else:
    #             output += "0"
    #     return output

    @staticmethod
    def create_cells(board: str):
        cells = []
        for index in range(0, 81):
            # row, col, sq using zero based index / grid size of 3x3
            row, col = divmod(index, 3 * 3)
            # squares increment left to right top to bottom
            sq = (col // 3) + (row // 3) + ((index // 3 ** 3) * 2)
            cells.append(SudokuCell(board[index], row, col, sq))
        return cells


class SudokuCellEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__
