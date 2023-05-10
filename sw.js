const adblockRuleID = 2; // give any id to indetify the rule but must be greater than 1
chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: [
      {
        action: {
          type: "block",
        },
        condition: {
          urlFilter: "cdn.wyleex.com", // block URLs that starts with this
          domains: ["www.lacapital.com.ar"], // on this domain
        },
        id: adblockRuleID,
        priority: 1,
      },
    ],
    removeRuleIds: [adblockRuleID], // this removes old rule if any
  },
  () => {
    console.log("block rule added");
  }
);