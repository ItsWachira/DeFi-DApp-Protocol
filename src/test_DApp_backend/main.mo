import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor DeFiDapp {
  stable var currentValue: Float = 400;


  stable var startTime = Time.now();



  // check balance function

  public query func checkBalance(): async Float{
    return currentValue;

  };
  

// function to add funds
 public func addFunds(amount: Float){
    currentValue += amount;
    
  };

 //fuction to widthdraw funds
  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large, currentValue less than zero.")
    }
  };


// function to compound interest 
   public func compound(){

    let  currentTime = Time.now();
    let timeElapsedS = (currentTime - startTime)/1000000000;
    currentValue:= currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime:= currentTime;
   };

}