function HideNSeek(x){
    document.getElementById('donation-events').classList.add(
        'hidden' );
    document.getElementById('donateHistory').classList.add(
        'hidden' );
    document.getElementById(x).classList.remove(
            'hidden' );
}
function ButtonTab(add, remove){
    document.getElementById(add).classList.add(
        'bg-[#B4F461]' );
    document.getElementById(remove).classList.remove(
        'bg-[#B4F461]' );
    document.getElementById(remove).classList.add(
            'bg-[#1111114D]' );
 
            
}

function BalanceUpdate(amount, mainBalance,donateBalance,x){
    
    const noakhaliAmount = parseFloat(document.getElementById(amount).value);
    let mainMoney = parseFloat(document.getElementById(mainBalance).innerHTML);
   
    if(noakhaliAmount > 0 && noakhaliAmount<= mainMoney ){
    const  noakhaliDonateBalance = document.getElementById(donateBalance );
  noakhaliDonateBalance.innerText = parseFloat(noakhaliDonateBalance.innerText) + noakhaliAmount;
  
    mainMoney = mainMoney - noakhaliAmount;
    document.getElementById(mainBalance).innerHTML = mainMoney; 


    // history section
    const historyItem = document.createElement("div");
    historyItem.className = 
    "bg-white p-10 rounded-lg border my-4 ";
    historyItem.innerHTML =`
    <p class="text-lg text-gray-600">${noakhaliAmount} Taka is ${document.getElementById(x).innerHTML} </p> 
    <p class="text-[1.2rem] font-semibold text-black">${new Date()}</p> 
       `;
    const historyContainer = document.getElementById("donateHistory");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)
    }
    else{
        alert("invalid data is found")
    }

}