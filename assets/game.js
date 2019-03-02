$(document).ready(function () {

    function restartGame() {
        currentPoint = 0;
        numberToGet = Math.floor(Math.random() * 100) + 40;
        $("#1").empty()
    $("#b").empty()
    $("#c").empty()
    $("#d").empty()
    $("#1").text(`Number to Get: ${numberToGet}`)
    $("#d").text(`Current Points: ${currentPoint}`)
    $("#b").text(`wins: ${wins}`);
    $("#c").text(`losses: ${losses}`);
        gun = Math.floor(Math.random() * 10) + 1;
        knife = Math.floor(Math.random() * 10) + 1;
        bomb = Math.floor(Math.random() * 10) + 1;
        needle = Math.floor(Math.random() * 10) + 1;

    }

    var currentPoint = 0;
    var numberToGet = Math.floor(Math.random() * 100) + 40;
    var wins = 0;
    var losses = 0;


    $("#1").text(`Number to Get: ${numberToGet}`)
    $("#d").text(`Current Points: ${currentPoint}`)
    $("#b").text(`wins: ${wins}`);
    $("#c").text(`losses: ${losses}`);


    var gun = Math.floor(Math.random() * 10) + 1;
    var knife = Math.floor(Math.random() * 10) + 1;
    var bomb = Math.floor(Math.random() * 10) + 1;
    var needle = Math.floor(Math.random() * 10) + 1;

    $("#item1").click(function () {
        $("#d").empty()
        $("#d").text(`Current Points: ${currentPoint += gun}`)
        checkWin();
    })
    $("#item2").click(function () {
        $("#d").empty()
        $("#d").text(`Current Points: ${currentPoint += knife}`)
        checkWin();
    })
    $("#item3").click(function () {
        $("#d").empty()
        $("#d").text(`Current Points: ${currentPoint += bomb}`)
        checkWin();
    })
    $("#item4").click(function () {
        $("#d").empty()
        $("#d").text(`Current Points: ${currentPoint += needle}`)
        checkWin();
    })

    function checkWin() {
        if (currentPoint === numberToGet) {
            $("b").empty()
            $("#b").text(`Wins: ${wins += 1}`)
            alert("you win");
            restartGame()
        }
        if (currentPoint >= numberToGet) {
            $("c").empty()
            $("#c").text(`Loses: ${losses += 1}`)
            alert("You Lost Sucka")
            restartGame()

        }

    }







});