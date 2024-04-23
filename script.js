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

    const resetButton = document.querySelector("#resetGrid");
    resetButton.addEventListener("click", function (e) {
        const squares = document.querySelectorAll("square");
        for (var i = 0; i < squares.length; i ++) {
            squares[i].style.backgroundColor = "pink";
        }
    });

    const button = document.querySelector("#makeGrid");
    button.addEventListener("click", function (e) {
        var input = document.querySelector("input");
        var gridSize = input.value;
        input.value = '';
        createGrid(gridSize);
    });
}

main();