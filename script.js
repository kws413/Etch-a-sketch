function main() {

    function createGrid(gridDimensions) {
        const container = document.querySelector("grid-container");
        for (var i=0; i < gridDimensions; i++) {
            const newColumn = document.createElement("newColumn" + i);
            newColumn.style.display = "flex";
            for (var x=0; x < gridDimensions; x++) {
                const newSquare = document.createElement("newSquare" + i);
                setSquareProperties(newSquare);
                newColumn.appendChild(newSquare);
            }
            container.appendChild(newColumn);
        }
    }

    function setSquareProperties(square) {
        square.style.backgroundColor = "pink";
        square.style.borderStyle = "solid";
        square.style.height = "2em";
        square.style.width = "2em";
    }


    const button = document.querySelector("#makeGrid");
    button.addEventListener("click", function (e) {
        createGrid(16);
    });
    
}

main();