import sdk from "./1-initialize-sdk.js";

//this is our governance contract
const vote = sdk.getVote("0x99A1fDB2492f44DB9c462B64D560930De4AFEd56");

//this is our ERC-20 token contract
const token = sdk.getToken("0xDDA0A80355698911CcAFb7Bc2dC0E89cf04E14C6");

(async () => {
  try {
    //give our treasury the power to mint aditional tokens if needed
    await token.roles.grant("minter", vote.getAddress());
    console.log("💰 Granted minter role to treasury");
  } catch (error) {
    console.log("Failed to grant minter role to treasury:", error);
    process.exit(1);
  }

  try {
    //grab our wallet's MDAO token balance
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);
    //grab 90% of the supply we hold
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = (Number(ownedAmount) / 100) * 90;
    //transfer 90% of the supply to our governance contract
    await token.transfer(vote.getAddress(), percent90);

    console.log("💰 Transferred 90% of the supply to governance contract");
  } catch (error) {
    console.log(
      "Failed to transfer 90% of the supply to governance contract:",
      error
    );
    process.exit(1);
  }
})();
