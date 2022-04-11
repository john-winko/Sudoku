import random

from .Logic.sample_data import boards_dict
from .models import SudokuBoard as SudokuBoardModel
from .Logic.SudokuBoard import SudokuBoard
#
#
# def encode_cell(data):
#     return {
#         "value": data.value,
#         "cell_id": data.cell_id,
#         "row": data.row,
#         "column": data.column,
#         "possibilities": data.possibilities
#     }


def create_game(board_string, user=None):
    if board_string is None:
        board_string = random.choice(list(boards_dict))
    board = SudokuBoard(board_string)
    new_board = SudokuBoardModel(board_string=board.board)
    new_board.cells = [c.__dict__ for c in board.cells]
    new_board.user = user if user.is_authenticated else None
    new_board.save()

    return new_board
