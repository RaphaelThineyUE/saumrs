const https = require("https");
const fs = require("fs");

const PASSWORD = "KiteLife";

const pages = [
  { name: "home", url: "https://www.saumrs.com/" },
  { name: "five-pillars", url: "https://www.saumrs.com/five-pillars/" },
  { name: "ingredients", url: "https://www.saumrs.com/ingredients/" },
  { name: "protein", url: "https://www.saumrs.com/protein/" },
  { name: "subscriptions", url: "https://www.saumrs.com/subscriptions/" },
  { name: "contact", url: "https://www.saumrs.com/contact/" },
];

async function fetchWithAuth(url) {
  return new Promise((resolve, reject) => {
    // First request to get cookies
    https
      .get(url, (res) => {
        let cookies = res.headers["set-cookie"] || [];
        let data = "";

        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          // Check if password protected
          if (
            data.includes("ppw-swp-form") ||
            data.includes("password-protect")
          ) {
            console.log(`  → Password protection detected, authenticating...`);

            // Submit password
            const postData = `input_wp_protect_password=${PASSWORD}&action=ppw_postpass`;
            const urlObj = new URL(url);

            const options = {
              hostname: urlObj.hostname,
              path: urlObj.pathname + "?action=ppw_postpass",
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(postData),
                Cookie: cookies.join("; "),
              },
            };

            const req = https.request(options, (authRes) => {
              let authCookies = authRes.headers["set-cookie"] || [];
              allCookies = [...cookies, ...authCookies].join("; ");

              authRes.on("data", () => {});
              authRes.on("end", () => {
                // Now fetch the actual page with auth cookies
                const getOptions = {
                  hostname: urlObj.hostname,
                  path: urlObj.pathname,
                  headers: {
                    Cookie: allCookies,
                  },
                };

                https
                  .get(getOptions, (finalRes) => {
                    let finalData = "";
                    finalRes.on("data", (chunk) => (finalData += chunk));
                    finalRes.on("end", () => resolve(finalData));
                  })
                  .on("error", reject);
              });
            });

            req.on("error", reject);
            req.write(postData);
            req.end();
          } else {
            // No password protection, return data
            resolve(data);
          }
        });
      })
      .on("error", reject);
  });
}

(async () => {
  console.log("Downloading authenticated pages from saumrs.com...\n");

  for (const page of pages) {
    try {
      console.log(`Fetching ${page.name}...`);
      const html = await fetchWithAuth(page.url);

      // Check if we got the actual content or still password protected
      if (html.includes("ppw-swp-form")) {
        console.log(`  ✗ Still password protected (authentication failed)`);
      } else {
        const filename = `live-${page.name}-authenticated.html`;
        fs.writeFileSync(filename, html);
        console.log(`  ✓ Downloaded ${filename} (${html.length} bytes)`);
      }
    } catch (error) {
      console.error(`  ✗ Error fetching ${page.name}:`, error.message);
    }
  }

  console.log("\n✓ Download complete!");
})();
