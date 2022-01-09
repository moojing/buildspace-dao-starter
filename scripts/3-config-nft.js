import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.NFT_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Web3kongFuDAO Membership NFT",
        description: "This NFT will give you access to Web3kongFuDAO!",
        image: readFileSync("scripts/assets/member.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()