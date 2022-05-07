import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xDDA0A80355698911CcAFb7Bc2dC0E89cf04E14C6");

(async () => {
  try {
    const allRoles = await token.roles.getAll();
    console.log("👀 Roles that exist right now:", allRoles);

    //revoke all the superpowers your wallet had over the erc20 token
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🔥 All roles revoked!" + "\n" + "roles after revoking:",
      await token.roles.getAll()
    );
  } catch (error) {
    console.log("failed to revoke ourselves from the DAO treasury" + error);
  }
})();
