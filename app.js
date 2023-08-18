var generatebtn = document.getElementById("button")
generatebtn.onclick =() =>{
    var chosenNumber = document.getElementById("number").value;
    var circleChoice = document.getElementById("circle")
    var squareChoice = document.getElementById("square")
    var rectangleChoice = document.getElementById("rectangle")
    var container = document.getElementById("box")
    var numberinshape = 1

    var n = (Number(chosenNumber))

    for(let j = 1; j<=n; j++){
        var shapecreated = document.createElement("div")
        shapecreated.innerHTML += j
        if(squareChoice.checked){
            shapecreated.classList.add("square")
        }else if(circleChoice.checked){
            shapecreated.classList.add("circle")
        }else if(rectangleChoice.checked){
            shapecreated.classList.add("rectangle")
        }else{
            alert("Invalid input")
        }

        container.appendChild(shapecreated);
        // numberinshape++

    }

}