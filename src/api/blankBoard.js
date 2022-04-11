const defaultBoard = {
    "id": 24,
    "cells": [{
        "value": "0",
        "row": 0,
        "column": 0,
        "square": 0,
        "cell_id": "A1",
        "possibilities": ["1", "3", "4"]
    }, {
        "value": "0",
        "row": 0,
        "column": 1,
        "square": 0,
        "cell_id": "A2",
        "possibilities": ["1", "2", "4", "8", "9"]
    }, {"value": "5", "row": 0, "column": 2, "square": 0, "cell_id": "A3", "possibilities": ["5"]}, {
        "value": "0",
        "row": 0,
        "column": 3,
        "square": 1,
        "cell_id": "A4",
        "possibilities": ["2", "3", "7"]
    }, {
        "value": "0",
        "row": 0,
        "column": 4,
        "square": 1,
        "cell_id": "A5",
        "possibilities": ["1", "2", "3", "4", "7", "8"]
    }, {
        "value": "0",
        "row": 0,
        "column": 5,
        "square": 1,
        "cell_id": "A6",
        "possibilities": ["1", "4", "7", "8"]
    }, {
        "value": "0",
        "row": 0,
        "column": 6,
        "square": 2,
        "cell_id": "A7",
        "possibilities": ["3", "4", "9"]
    }, {
        "value": "0",
        "row": 0,
        "column": 7,
        "square": 2,
        "cell_id": "A8",
        "possibilities": ["3", "4", "8", "9"]
    }, {"value": "6", "row": 0, "column": 8, "square": 2, "cell_id": "A9", "possibilities": ["6"]}, {
        "value": "0",
        "row": 1,
        "column": 0,
        "square": 0,
        "cell_id": "B1",
        "possibilities": ["1", "3", "4", "6"]
    }, {"value": "7", "row": 1, "column": 1, "square": 0, "cell_id": "B2", "possibilities": ["7"]}, {
        "value": "0",
        "row": 1,
        "column": 2,
        "square": 0,
        "cell_id": "B3",
        "possibilities": ["1", "3", "6", "8"]
    }, {"value": "0", "row": 1, "column": 3, "square": 1, "cell_id": "B4", "possibilities": ["3", "6"]}, {
        "value": "0",
        "row": 1,
        "column": 4,
        "square": 1,
        "cell_id": "B5",
        "possibilities": ["1", "3", "4", "6", "8"]
    }, {"value": "9", "row": 1, "column": 5, "square": 1, "cell_id": "B6", "possibilities": ["9"]}, {
        "value": "0",
        "row": 1,
        "column": 6,
        "square": 2,
        "cell_id": "B7",
        "possibilities": ["3", "4", "5"]
    }, {"value": "2", "row": 1, "column": 7, "square": 2, "cell_id": "B8", "possibilities": ["2"]}, {
        "value": "0",
        "row": 1,
        "column": 8,
        "square": 2,
        "cell_id": "B9",
        "possibilities": ["3", "4", "8"]
    }, {
        "value": "0",
        "row": 2,
        "column": 0,
        "square": 0,
        "cell_id": "C1",
        "possibilities": ["3", "4", "6"]
    }, {
        "value": "0",
        "row": 2,
        "column": 1,
        "square": 0,
        "cell_id": "C2",
        "possibilities": ["2", "4", "6", "8", "9"]
    }, {
        "value": "0",
        "row": 2,
        "column": 2,
        "square": 0,
        "cell_id": "C3",
        "possibilities": ["2", "3", "6", "8", "9"]
    }, {"value": "5", "row": 2, "column": 3, "square": 1, "cell_id": "C4", "possibilities": ["5"]}, {
        "value": "0",
        "row": 2,
        "column": 4,
        "square": 1,
        "cell_id": "C5",
        "possibilities": ["2", "3", "4", "6", "8"]
    }, {"value": "0", "row": 2, "column": 5, "square": 1, "cell_id": "C6", "possibilities": ["4", "8"]}, {
        "value": "1",
        "row": 2,
        "column": 6,
        "square": 2,
        "cell_id": "C7",
        "possibilities": ["1"]
    }, {
        "value": "0",
        "row": 2,
        "column": 7,
        "square": 2,
        "cell_id": "C8",
        "possibilities": ["3", "4", "8", "9"]
    }, {"value": "7", "row": 2, "column": 8, "square": 2, "cell_id": "C9", "possibilities": ["7"]}, {
        "value": "8",
        "row": 3,
        "column": 0,
        "square": 3,
        "cell_id": "D1",
        "possibilities": ["8"]
    }, {
        "value": "0",
        "row": 3,
        "column": 1,
        "square": 3,
        "cell_id": "D2",
        "possibilities": ["2", "6", "9"]
    }, {"value": "4", "row": 3, "column": 2, "square": 3, "cell_id": "D3", "possibilities": ["4"]}, {
        "value": "1",
        "row": 3,
        "column": 3,
        "square": 4,
        "cell_id": "D4",
        "possibilities": ["1"]
    }, {"value": "5", "row": 3, "column": 4, "square": 4, "cell_id": "D5", "possibilities": ["5"]}, {
        "value": "0",
        "row": 3,
        "column": 5,
        "square": 4,
        "cell_id": "D6",
        "possibilities": ["7"]
    }, {
        "value": "0",
        "row": 3,
        "column": 6,
        "square": 5,
        "cell_id": "D7",
        "possibilities": ["2", "3", "7", "9"]
    }, {
        "value": "0",
        "row": 3,
        "column": 7,
        "square": 5,
        "cell_id": "D8",
        "possibilities": ["3", "6", "7", "9"]
    }, {
        "value": "0",
        "row": 3,
        "column": 8,
        "square": 5,
        "cell_id": "D9",
        "possibilities": ["2", "3", "9"]
    }, {
        "value": "0",
        "row": 4,
        "column": 0,
        "square": 3,
        "cell_id": "E1",
        "possibilities": ["1", "5", "6", "7"]
    }, {
        "value": "0",
        "row": 4,
        "column": 1,
        "square": 3,
        "cell_id": "E2",
        "possibilities": ["1", "2", "5", "6", "9"]
    }, {
        "value": "0",
        "row": 4,
        "column": 2,
        "square": 3,
        "cell_id": "E3",
        "possibilities": ["1", "2", "6", "9"]
    }, {"value": "8", "row": 4, "column": 3, "square": 4, "cell_id": "E4", "possibilities": ["8"]}, {
        "value": "0",
        "row": 4,
        "column": 4,
        "square": 4,
        "cell_id": "E5",
        "possibilities": ["4", "6", "7"]
    }, {"value": "3", "row": 4, "column": 5, "square": 4, "cell_id": "E6", "possibilities": ["3"]}, {
        "value": "0",
        "row": 4,
        "column": 6,
        "square": 5,
        "cell_id": "E7",
        "possibilities": ["2", "4", "7", "9"]
    }, {
        "value": "0",
        "row": 4,
        "column": 7,
        "square": 5,
        "cell_id": "E8",
        "possibilities": ["4", "6", "7", "9"]
    }, {
        "value": "0",
        "row": 4,
        "column": 8,
        "square": 5,
        "cell_id": "E9",
        "possibilities": ["1", "2", "4", "9"]
    }, {
        "value": "0",
        "row": 5,
        "column": 0,
        "square": 3,
        "cell_id": "F1",
        "possibilities": ["1", "3", "6", "7"]
    }, {"value": "0", "row": 5, "column": 1, "square": 3, "cell_id": "F2", "possibilities": ["1", "6"]}, {
        "value": "0",
        "row": 5,
        "column": 2,
        "square": 3,
        "cell_id": "F3",
        "possibilities": ["1", "3", "6"]
    }, {"value": "0", "row": 5, "column": 3, "square": 4, "cell_id": "F4", "possibilities": ["6", "7"]}, {
        "value": "9",
        "row": 5,
        "column": 4,
        "square": 4,
        "cell_id": "F5",
        "possibilities": ["9"]
    }, {"value": "2", "row": 5, "column": 5, "square": 4, "cell_id": "F6", "possibilities": ["2"]}, {
        "value": "8",
        "row": 5,
        "column": 6,
        "square": 5,
        "cell_id": "F7",
        "possibilities": ["8"]
    }, {
        "value": "0",
        "row": 5,
        "column": 7,
        "square": 5,
        "cell_id": "F8",
        "possibilities": ["3", "4", "6", "7"]
    }, {"value": "5", "row": 5, "column": 8, "square": 5, "cell_id": "F9", "possibilities": ["5"]}, {
        "value": "9",
        "row": 6,
        "column": 0,
        "square": 6,
        "cell_id": "G1",
        "possibilities": ["9"]
    }, {
        "value": "0",
        "row": 6,
        "column": 1,
        "square": 6,
        "cell_id": "G2",
        "possibilities": ["1", "4", "5", "8"]
    }, {"value": "7", "row": 6, "column": 2, "square": 6, "cell_id": "G3", "possibilities": ["7"]}, {
        "value": "0",
        "row": 6,
        "column": 3,
        "square": 7,
        "cell_id": "G4",
        "possibilities": ["2", "3"]
    }, {
        "value": "0",
        "row": 6,
        "column": 4,
        "square": 7,
        "cell_id": "G5",
        "possibilities": ["1", "2", "3", "8"]
    }, {"value": "6", "row": 6, "column": 5, "square": 7, "cell_id": "G6", "possibilities": ["6"]}, {
        "value": "0",
        "row": 6,
        "column": 6,
        "square": 8,
        "cell_id": "G7",
        "possibilities": ["2", "3", "4", "5"]
    }, {
        "value": "0",
        "row": 6,
        "column": 7,
        "square": 8,
        "cell_id": "G8",
        "possibilities": ["3", "4", "5", "8"]
    }, {
        "value": "0",
        "row": 6,
        "column": 8,
        "square": 8,
        "cell_id": "G9",
        "possibilities": ["2", "3", "4", "8"]
    }, {"value": "0", "row": 7, "column": 0, "square": 6, "cell_id": "H1", "possibilities": ["5", "6"]}, {
        "value": "3",
        "row": 7,
        "column": 1,
        "square": 6,
        "cell_id": "H2",
        "possibilities": ["3"]
    }, {"value": "0", "row": 7, "column": 2, "square": 6, "cell_id": "H3", "possibilities": ["6", "8"]}, {
        "value": "4",
        "row": 7,
        "column": 3,
        "square": 7,
        "cell_id": "H4",
        "possibilities": ["4"]
    }, {
        "value": "0",
        "row": 7,
        "column": 4,
        "square": 7,
        "cell_id": "H5",
        "possibilities": ["2", "7", "8"]
    }, {
        "value": "0",
        "row": 7,
        "column": 5,
        "square": 7,
        "cell_id": "H6",
        "possibilities": ["5", "7", "8"]
    }, {
        "value": "0",
        "row": 7,
        "column": 6,
        "square": 8,
        "cell_id": "H7",
        "possibilities": ["2", "5", "7", "9"]
    }, {"value": "1", "row": 7, "column": 7, "square": 8, "cell_id": "H8", "possibilities": ["1"]}, {
        "value": "0",
        "row": 7,
        "column": 8,
        "square": 8,
        "cell_id": "H9",
        "possibilities": ["2", "8", "9"]
    }, {"value": "2", "row": 8, "column": 0, "square": 6, "cell_id": "I1", "possibilities": ["2"]}, {
        "value": "0",
        "row": 8,
        "column": 1,
        "square": 6,
        "cell_id": "I2",
        "possibilities": ["1", "4", "5", "8"]
    }, {"value": "0", "row": 8, "column": 2, "square": 6, "cell_id": "I3", "possibilities": ["1", "8"]}, {
        "value": "0",
        "row": 8,
        "column": 3,
        "square": 7,
        "cell_id": "I4",
        "possibilities": ["3", "7", "9"]
    }, {
        "value": "0",
        "row": 8,
        "column": 4,
        "square": 7,
        "cell_id": "I5",
        "possibilities": ["1", "3", "7", "8"]
    }, {
        "value": "0",
        "row": 8,
        "column": 5,
        "square": 7,
        "cell_id": "I6",
        "possibilities": ["1", "5", "7", "8"]
    }, {"value": "6", "row": 8, "column": 6, "square": 8, "cell_id": "I7", "possibilities": ["6"]}, {
        "value": "0",
        "row": 8,
        "column": 7,
        "square": 8,
        "cell_id": "I8",
        "possibilities": ["3", "4", "5", "7", "8", "9"]
    }, {"value": "0", "row": 8, "column": 8, "square": 8, "cell_id": "I9", "possibilities": ["3", "4", "8", "9"]}],
    "board_string": "005000006070009020000500107804150000000803000000092805907006000030400010200000600",
    "user": null
}

export default defaultBoard;