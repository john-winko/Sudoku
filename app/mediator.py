from random import random

from .Logic.sample_data import boards_dict
from .models import SudokuBoard as SudokuBoardModel, SudokuCell as SudokuCellModel
from .Logic import SudokuBoard


def encode_cell(data):
    return {
        "value": data.value,
        "cell_id": data.cell_id,
        "row": data.row,
        "column": data.column,
        "possibilities": data.possibilities
    }


def encode_board(data):
    return {
        "board_string": data.board,
        "cells": [encode_cell(x) for x in data.cells]
    }


def create_game(board_string):
    if board_string is None:
        board_string = random.choice(list(boards_dict))
    board = SudokuBoard(board_string)
    new_board = SudokuBoardModel(board_string=board.board)
    new_board.save()

    cells = [SudokuCellModel(value=cell.value, row=cell.row, column=cell.column, square=cell.square,
                             cell_id=cell.cell_id, possibilities="".join(cell.possibilities))
             for cell in board.cells]
    bulk = SudokuCellModel.objects.bulk_create(cells)
    new_board.cells.add(*bulk)

    new_board.save()
    return new_board
