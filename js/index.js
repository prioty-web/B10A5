// donation functionality
document.getElementById('noakhali-donate').addEventListener('click',function(){
    BalanceUpdate( 'noakhali-amount' , 'main-balance','noakhali-donate-blance','noakhali');
})
document.getElementById('feni-donate' ).addEventListener("click", function(){
    BalanceUpdate("feni-amount", 'main-balance', "feni-donate-blance",'feni' )
})
document.getElementById('quota-donate' ).addEventListener("click", function(){
    BalanceUpdate("quota-amount", 'main-balance', "quota-donate-blance", 'quota' )
})
// donation history
document.getElementById("donation").addEventListener('click',function(){
    ButtonTab('donation' , 'history');
})
document.getElementById("history").addEventListener('click',function(){
    ButtonTab('history', 'donation');
})
// button works 
document.getElementById("donation").addEventListener('click',function(){
    HideNSeek('donation-events');
})
document.getElementById("history").addEventListener('click',function(){
    HideNSeek('donateHistory');
})











