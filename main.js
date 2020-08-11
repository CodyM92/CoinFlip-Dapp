var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(abi, "0xF8ea91aF9b784EfbB07319d4c29e70e771a45Ac4", {from: accounts[0] });
      console.log(contractInstance);
    });

    $("#place_bet_button").click(placeBet)
    $("#withdrawAll_button").click(withdraw)
});

function placeBet() {
    let bet_amount = $("#bet_amount").val();
    if(!isNaN(bet_amount)) {
      if(bet_amount > 2) alert("You can't bet more than 2 Ether");
      else if(bet_amount < 0.001) alert("You must bet at least 0.001 Ether");
      else {
        console.log(bet_amount);
        let input = bet_amount;
        config = {value: web3.utils.toWei(bet_amount)};
        contractInstance.methods.flipCoin().send(config)
        .on("receipt", function(receipt) {
          console.log(receipt)
        })
        /*.then(function(){
        if (web3.eth.events.status == true) $("#Output").text("You have WON!");
        else $("#Output").text("Sorry, Give it another try!");
      })
      */
    }
  }
}

function withdraw() {
  contractInstance.methods.withdrawAll().send();
}
