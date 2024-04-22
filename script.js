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
            }
        }
    }


    const button = document.querySelector("#makeGrid");
    button.addEventListener("click", function (e) {
        createGrid(16);
    });
}

main();