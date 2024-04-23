/*
Script.js
Etch-a-Sketch
Keith S.
*/

function main() {

    function createGrid(size) {
        const container = document.querySelector(".grid-container");
        for (var row = 0; row < size; row++) {
            const docrow = document.createElement("row" + row);
            docrow.id = "row";
            container.appendChild(docrow);
            for (var i = 0; i < size; i++) {
                const square = document.createElement("square");
                docrow.appendChild(square);
                square.addEventListener("mouseover", function (e) {
                    square.style.backgroundColor = "gray";
                });
                square.addEventListener("click", function (e) {
                    square.style.backgroundColor = "blue";
                });
            }
        }
    }

    function clearGrid() {
        const container = document.querySelector(".grid-container");
        const allrows = document.querySelectorAll("#row");
        for (row in allrows) {
            container.removeChild(container.lastChild);
        }
    }

    const resetButton = document.querySelector("#resetGrid");
    resetButton.addEventListener("click", function (e) {
        const squares = document.querySelectorAll("square");
        for (var i = 0; i < squares.length; i ++) {
            squares[i].style.backgroundColor = "pink";
        }
    });

    const button = document.querySelector("#makeGrid");
    button.addEventListener("click", function (e) {
        if (document.querySelector(".grid-container").firstChild) {
            document.querySelector("#error").textContent = "Please clear the grid prior to resizing."
            return
        }
        var input = document.querySelector("input");
        var gridSize = input.value;
        input.value = '';
        createGrid(gridSize);
    });

    const clearButton = document.querySelector("#clearGrid");
    clearButton.addEventListener("click", function (e) {
        document.querySelector("#error").textContent = "";
        clearGrid();
    });
}

main();