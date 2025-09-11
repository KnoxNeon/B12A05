const increaseHeart = () =>{
    let heartValue = document.getElementById("heart-value").innerHTML;
    let heartValueConverted = parseInt(heartValue);
    heartValueConverted = heartValueConverted + 1;

    let heartValueUpdate = document.getElementById("heart-value");
    heartValueUpdate.innerHTML = heartValueConverted;
}

const decreaseCoin = (serviceName, serviceNumber) =>{
    let coinValue = document.getElementById("coin-value").innerHTML;
    let coinValueConverted = parseInt(coinValue);

    if(coinValueConverted == 0){
        alert("❌ You do not have sufficient coins! You need at least 20 coins to call.")
    }
    else{
        let coinValue = document.getElementById("coin-value").innerHTML;
        let coinValueConverted = parseInt(coinValue);
        coinValueConverted = coinValueConverted - 20;

        alert(`📞 Calling ${serviceName} ${serviceNumber}....`);
        let coinValueUpdate = document.getElementById("coin-value");
        coinValueUpdate.innerHTML = coinValueConverted;

        const history = document.getElementById("add-history");
        const historyUpdate = document.createElement("div")
        historyUpdate.innerHTML =`
        <div class="bg-[#FAFAFA] rounded-xl p-4 mb-4 flex justify-between items-center">
        <div>
            <p class="font-semibold text-lg">${serviceName}</p>
            <h3 class="font-normal text-lg text-[#5C5C5C]">${serviceNumber}</h3>
        </div>
        <div>${new Date().toLocaleTimeString()}</div>
        </div>
        `
        history.appendChild(historyUpdate);
    }    
}   

const clearHistory = () =>{
    const clearBtn = document.getElementById("add-history");
    clearBtn.innerHTML = '';
}

const increaseCopy = (serviceNumber) =>{
    let copyValue = document.getElementById("copy-value").innerHTML
    let copyValueConverted = parseInt(copyValue);
    copyValueConverted = copyValueConverted + 1;

    navigator.clipboard.writeText(serviceNumber)
    .then(alert(`Copied Number: ${serviceNumber}`));
    
    let copyValueUpdate = document.getElementById("copy-value");
    copyValueUpdate.innerHTML = copyValueConverted;
}   