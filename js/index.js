

// const donationButton = document.getElementById("noakhali-donate");
// donationButton.addEventListener("click", function("noakhali-amount", "main-balance","noakhali-donate-blance"){
//     const noakhaliAmount = parseFloat(document.getElementById("noakhali-amount").value);
//     let mainMoney = parseFloat(document.getElementById("main-balance").innerHTML);
    

//     const  noakhaliDonateBalance = document.getElementById("noakhali-donate-blance" );
//   noakhaliDonateBalance.innerText = parseFloat(noakhaliDonateBalance.innerText) + noakhaliAmount;
  
//     mainMoney = mainMoney - noakhaliAmount;
//     document.getElementById("main-balance").innerHTML = mainMoney;
    


 
// });
document.getElementById('noakhali-donate').addEventListener('click',function(){
    BalanceUpdate( 'noakhali-amount' , 'main-balance','noakhali-donate-blance');
})
document.getElementById('feni-donate' ).addEventListener("click", function(){
    BalanceUpdate("feni-amount", 'main-balance', "feni-donate-blance" )
})
document.getElementById('quota-donate' ).addEventListener("click", function(){
    BalanceUpdate("quota-amount", 'main-balance', "quota-donate-blance" )
})

function BalanceUpdate(amount, mainBalance,donateBalance){
    
    const noakhaliAmount = parseFloat(document.getElementById(amount).value);
    let mainMoney = parseFloat(document.getElementById(mainBalance).innerHTML);
   
    if(noakhaliAmount > 0 && noakhaliAmount<= mainMoney ){
       
    
    

    const  noakhaliDonateBalance = document.getElementById(donateBalance );
  noakhaliDonateBalance.innerText = parseFloat(noakhaliDonateBalance.innerText) + noakhaliAmount;
  
    mainMoney = mainMoney - noakhaliAmount;
    document.getElementById(mainBalance).innerHTML = mainMoney; 
    }
    else{
        alert("invalid data is found")
    }
}
// history tab functionality
document.getElementById("donation").addEventListener('click',function(){
    ButtonTab('donation' , 'history');
})
document.getElementById("history").addEventListener('click',function(){
    ButtonTab('history', 'donation');
})
function ButtonTab(add, remove){
    document.getElementById(add).classList.add(
        'bg-[#B4F461]' );
    document.getElementById(remove).classList.remove(
        'bg-[#B4F461]' );
    document.getElementById(remove).classList.add(
            'bg-[#1111114D]' );
    
}

// document.getElementById("history").addEventListener("click", function(){
//   historyTab.classList.add(
//     'text-white',
//     'bg-[#B4F461]' );
     
// }) ;

// function ButtonColor(){
//   donationTab.classList.add(
//     'text-white',
//   'bg-[#B4F461]'
// );
  
//   historyTab.classList.remove(
//     'text-white',
//     'bg-[#B4F461]')
   
   
// })








