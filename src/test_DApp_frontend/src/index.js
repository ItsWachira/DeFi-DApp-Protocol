import {test_DApp_backend} from "../../declarations/test_DApp_backend";


// show current acc balance
window.addEventListener("load", async function (){
  update();
});

document.querySelector("form").addEventListener("submit", async function(event){
   event.preventDefault(); 

   const btn = event.target.querySelector("#submit-btn") 
   btn.setAttribute("disabled", true)
  
   const TopUpAmount = parseFloat(document.getElementById("input-amount").value);
   const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  
  
   console.log(withdrawAmount);
  
  if (TopUpAmount.length != 0){
    await test_DApp_backend.addFunds(TopUpAmount);
 
  };

  // if (withdrawAmount.length != 0){
  //   await test_DApp_backend.withdrawFunds(withdrawAmount);
 
  // };


  
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await test_DApp_backend.withdraw(withdrawAmount);
  }
   
  await test_DApp_backend.compound();

  update();
  
  document.getElementById("input-amount").value= "";
  document.getElementById("withdrawal-amount").value = "";
  btn.removeAttribute("disabled")

  
});

async function update(){
  const currentBalance = await test_DApp_backend.checkBalance();
  document.getElementById("value").innerText = currentBalance.toFixed(2);
};
