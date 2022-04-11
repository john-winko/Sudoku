import random

from .Logic.sample_data import boards_dict
from .models import SudokuBoard as SudokuBoardModel
from .Logic.SudokuBoard import SudokuBoard


def create_game(board_string, user=None):
    if board_string is None:
        board_string = random.choice(list(boards_dict))
    board = SudokuBoard(board_string)
    new_board = SudokuBoardModel(board_string=board.board)
    new_board.cells = [c.__dict__ for c in board.cells]
    new_board.user = user if user.is_authenticated else None
    new_board.save()

    return new_board


def encode_hint(data):
    return {
        "solveType": data.solve_type,
        # These will not have value/possibility info at the time they were added since it references the cell
        # rather than copy it [solvecells, candidates]
        "solve_cells": [x.cell_id for x in data.solve_cells],
        "candidates": [x.cell_id for x in data.candidates],
        "values": data.values,
        "possibilities": data.possibilities
    }


def get_hint(board_string):
    board = SudokuBoard(board_string)
    hint = board.get_hint()
    encoded = encode_hint(hint)
    return encoded
