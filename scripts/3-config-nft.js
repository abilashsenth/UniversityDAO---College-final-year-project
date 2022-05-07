import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  "0x5fBBf3e235526AD614FB129Dcc83180706B4286D"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Uni Coin",
        description: "This NFT will give you access to UniversityDAO!",
        image: readFileSync("scripts/assets/goldcoin.png"),
      },
    ]);
    console.log("🐸 NFT created in the drop!");
  } catch (error) {
    console.log(error);
  }
})();
