const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let crplr;
let gameGrid;

const winposition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// lets initakize the game 
function initGame() {
    crplr = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // initalixr boxes with intial style
        box.classList=`box box${index+1} `


    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player -${crplr}`;
    

}
function swapturn() {
    if (crplr === "X") {
        crplr = "0";
    }
    else {
        crplr = "X";
    }
    // ui updae
    gameInfo.innerText = `Current Player -${crplr}`
}

function gameover() {
    // 
    let answer = "";
    winposition.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {
            // newGameBtn.classList.add("active");
            // gameInfo.innerText===`Player ${gameGrid[position[1]]} is Winner`;
            if (gameGrid[position[0]] === "X") {
                answer = "X";
            } else {
                answer = "0";
            }
            // DIsable pointer EventTarget
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");

            });


        }

    });

    // 
    if (answer !== "") {
        gameInfo.innerText = `Winner Player ${answer}`;
        newGameBtn.classList.add("active");

        return;
    }

    // when there is no winner
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillCount++;
        }

    })
    if (fillCount = 9) {
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
    }

}
function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = crplr;
        gameGrid[index] = crplr;
        boxes[index].style.pointerEvents = "none";
        // ?swap turn?
        swapturn();
        // Checkgameover
        gameover();

    }
}


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);

    })

});
newGameBtn.addEventListener("click", initGame)
initGame();