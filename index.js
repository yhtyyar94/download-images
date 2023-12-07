const axios = require("axios");
const fs = require("fs");
const path = require("path");

const imageUrls = [];

let n = 248;

for (let i = 1; i <= n; i++) {
  imageUrls.push(
    `https://cdp.contentdelivery.nu/68224a56-4036-47b0-b46f-6539e58a105a/20161011085925/extract/assets/img/layout/${i}.jpg`
  );
}

async function downloadImage(url, imagePath) {
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "arraybuffer",
  });

  fs.writeFileSync(imagePath, response.data);
}

imageUrls.forEach(async (url, index) => {
  const imagePath = path.resolve(__dirname, "images", `image${index}.jpg`);
  await downloadImage(url, imagePath);
});
