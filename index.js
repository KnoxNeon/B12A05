const increaseHeart = () =>{
    let heartValue = document.getElementById("heart-value").innerHTML;
    let heartValueConverted = parseInt(heartValue);
    heartValueConverted = heartValueConverted + 1;

    let heartValueUpdate = document.getElementById("heart-value");
    heartValueUpdate.innerHTML = heartValueConverted;
}

const decreaseCoin = () =>{
    let coinValue = document.getElementById("coin-value").innerHTML
    let coinValueConverted = parseInt(coinValue);

    if(coinValueConverted == 0){
        alert("You do not have sufficient coins")
    }
    else{
        let coinValue = document.getElementById("coin-value").innerHTML
        let coinValueConverted = parseInt(coinValue);
        coinValueConverted = coinValueConverted - 20;
        let coinValueUpdate = document.getElementById("coin-value");
        coinValueUpdate.innerHTML = coinValueConverted;
    }
    
}   

const increaseCopy = () =>{
    let copyValue = document.getElementById("copy-value").innerHTML
    let copyValueConverted = parseInt(copyValue);
    copyValueConverted = copyValueConverted + 1;

    let copyValueUpdate = document.getElementById("copy-value");
    copyValueUpdate.innerHTML = copyValueConverted;
}   