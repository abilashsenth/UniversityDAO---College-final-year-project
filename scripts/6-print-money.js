import sdk from "./1-initialize-sdk.js";

//this is the address of our erc20 token  (MDAO)
const tokenAddress = "0xDDA0A80355698911CcAFb7Bc2dC0E89cf04E14C6";
const token = sdk.getToken(tokenAddress);

(async () => {
  try {
    //What's the max supply you want to set? 1,000,000 is a nice number
    const maxSupply = 1000000;
    //intereact with erc20 contract and mint the token
    await token.mint(maxSupply);
    const totalSupply = await token.totalSupply();

    //print out the total supply
    console.log("💰 Token module deployed at:", tokenAddress);
    console.log("💰 Total supply of $UNIDAO :", totalSupply.displayValue);
  } catch (error) {
    console.log("Failed to print money:", error);
  }
})();
