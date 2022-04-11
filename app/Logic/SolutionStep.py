import json

from . import SudokuCell


class SolutionStep:
    """Base class for results from a solution step towards solving a Sudoku puzzle"""

    def __init__(self,
                 solve_type: str = "",
                 board: str = "",
                 solve_cells: list[SudokuCell] = None,
                 candidates: list[SudokuCell] = None,
                 values: list[str] = None,
                 possibilities: list[str] = None
                 ):
        self.solve_cells = solve_cells
        # self.solve_cells_flat = self.flatten(solve_cells)
        self.solve_type = solve_type
        self.candidates = candidates
        # self.candidates_flat = self.flatten(candidates)
        self.values = values
        self.possibilities = possibilities
        self.board = board

    # @staticmethod
    # def flatten(cells):
    #     """convert list to comma delimited string of cell id's"""
    #     return ', '.join(b.cell_id for b in cells)

    def __repr__(self):
        return f"{self.solve_type}"

    def encode(self):
        return {
            "solveType": self.solve_type,
            # These will not have value/possibility info at the time they were added since it references the cell
            # rather than copy it [solvecells, candidates]
            "solve_cells": [x.__dict__ for x in self.solve_cells],
            "candidates": [x.__dict__ for x in self.candidates],
            "values": self.values,
            "possibilities": self.possibilities,
            "board": json.loads(self.board)
        }
