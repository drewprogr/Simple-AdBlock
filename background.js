





const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://*.doubleclick.com/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.googleadservices.com/*",
	"*://*.omniture.com/*",
	"*://*.intellitxt.com/*",
	"*://*.2o7.net/*",
	"*://*.207.net/*",
	"*://*.sharethis.com/*",
	"*://*.shopthetv.com/*",
	"*://*.acoda.net/*",
	"*://*.targetingmarketplace.com/*",
	"*://*.youknowbest.com/*",
	"*://*.adsense.com/*",
	"*://*.adblade.com/*",
	"*://*.247realmedia.com/*",
	"*://*.2mdn.net/*",
	"*://*.foxnetworks.com/*",
	"*://*.gravity.com/*",
	"*://*.hitbox.com/*",
	"*://*.nielsen-online.com/*",
	"*://*.quantcast.com/*",
	"*://*.esomniture.com/*",
	"*://*.atwola.com/*",
	"*://*.channelintelligence.com/*",
	"*://*.aquantive.com/*",
	"*://*.addthis.com/*",
	"*://*.afy11.net/*",
	"*://*.ru4.com/*",
	"*://*.samsungadhub.com/*",
	"*://*.myads.com/*",
	"*://*.rmxads.com/*",
	"*://*.nexac.com/*",
	"*://*.imrworldwide.com/*",
	"*://*.leadback.com/*",
	"*://*.offermatica.com/*",
	"*://*.admob.com/*",
	"*://*.adsonar.com/*",
	

]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

