$(document).ready(function(){
    var targetValue;
    var total;
    var blueGemValue;
    var greenGemValue;
    var orangeGemValue;
    var redGemValue;
    var wins = 0;
    var losses = 0;

    resetGame();

    function updateTotal(value){
        total = total + value;
        $('#total').html(total);

        if (total === targetValue) {
           wins = wins + 1;
           $('#wins').html(wins);
           resetGame();
        } else if (total > targetValue) {
           losses = losses + 1;
           $('#losses').html(losses);
           resetGame();
        }
    }

    function resetGame() {
        targetValue = getTargetValue();
        total = 0;
        blueGemValue = getGemValue();
        greenGemValue = getGemValue();
        orangeGemValue = getGemValue();
        redGemValue = getGemValue();

        $('#target').html(targetValue);
        $('#total').html(total);

        $('#blue-gem').off().on('click', updateTotal.bind(this, blueGemValue));
        $('#green-gem').off().on('click', updateTotal.bind(this, greenGemValue));
        $('#orange-gem').off().on('click', updateTotal.bind(this, orangeGemValue));
        $('#red-gem').off().on('click', updateTotal.bind(this, redGemValue));
    }
});

function getGemValue() {
    return Math.round(11 * Math.random() + 1);
}

function getTargetValue() {
    return Math.round(101 * Math.random() + 19);
}