/********\

* Title: CleanFox.js 1.0.0

* Copyright 2022 Mikyn

( Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. )

\*******/ 

/* General */ 

/* Disable accessibility services */
user_pref("accessibility.force_disabled", 1);
/* Remove about:config warning screen */
user_pref("browser.aboutConfig.showWarning", false);
/* Remove about:protections Annoyances */
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
/* Disable New Tab Annoyances */
user_pref("browser.newtabpage.activity-stream.asrouter.disable-captive-portal-vpn-promo", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
/* Remove PartnerLink */
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.partnerlink.campaign.topsites", "");
/* Hide Vpn Ad in Private Browsing */ 
user_pref("browser.privatebrowsing.vpnpromourl", "");
/* Disable Check Default Browser */
user_pref("browser.shell.checkDefaultBrowser", false);
/* Disable Top Sites Url Bar Suggestions */
user_pref("browser.urlbar.suggest.topsites", false);
/* Remove VPN Promo */
user_pref("browser.vpn_promo.enabled", false);
/* Hide MFM Button from about:preferences */
user_pref("browser.preferences.moreFromMozilla", false);

/* Telemetry/Studies/Crash Reports */

user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.discovery.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* Privacy/Security */

/* Disable Beacon */
user_pref("beacon.enabled", false);
/* Set Tracking Protection to Strict*/
user_pref("browser.contentblocking.category", "strict");
/* Disable Ui Tour */
user_pref("browser.uitour.enabled", false);
/* Prevent scripts from resizing windows */
user_pref("dom.disable_window_move_resize", true);
/* Use only Https mode */
user_pref("dom.security.https_only_mode", true);
/* Disable Https Background Request */
user_pref("dom.security.https_only_mode_send_http_background_request", false);
/* Disable Pocket */
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.onSaveRecs", false);
user_pref("extensions.pocket.showHome", false);
/* Change Geo Provider URL */
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
/* Show Punycode */
user_pref("network.IDN_show_punycode", true);
/* Cookie Settings */
user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("network.cookie.sameSite.schemeful", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
/* Disable Prefetch */
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", "0");
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
/* Disable PDF scripting */
user_pref("pdfjs.enableScripting", false);
/* Privacy Settings */
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.resistFingerprinting", false);                  ! Breakage !
/* Security Settings */
user_pref("security.OCSP.require", true);
user_pref("security.family_safety.mode", 0);
user_pref("security.sandbox.content.win32k-disable", true);
user_pref("security.ssl.require_safe_negotiation", true);
/* Google Safe Browsing Downloads Privacy Settings */
/* WHY: For privacy questions GSF (Downloads) is disabled */
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
/* Disable Before Unload */
user_pref("dom.disable_beforeunload", true);
/* Disable Firefox Suggestions */
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", false);
user_pref("browser.urlbar.quicksuggest.remoteSettings.enabled", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.quicksuggest.allowPositionInSuggestions", false);
user_pref("browser.urlbar.merino.enabled", false);
/* Pop-up Events (Make Your Own Setup) */
user_pref("dom.popup_allowed_events", "click dblclick");
/* Disable about:addons Recommendations */
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.showPane", false);
/* Disable WebCompact Reporter Extension */
user_pref("extensions.webcompat-reporter.enabled", false);
/* Prevent Leaking Single Words */
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", "0");
/* Prevent Cross-origin to open authentication dialogs */
user_pref("network.auth.subresource-http-auth-allow", "1");
/* Disable TLS 0rrt_data */
user_pref("security.tls.enable_0rtt_data", false);
/* Block all sha-1 requests (SHA-1 is no longer maintained */
user_pref("security.pki.sha1_enforcement_level", "1");
/* Enable CRLite */
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", "2");
/* Autoplay Settings */
user_pref("media.autoplay.blocking_policy", "2");
user_pref("media.autoplay.default", "5");
/* Disable new sponsored shortcuts */
user_pref("browser.topsites.contile.enabled", false);
/* Referer Settings */
user_pref("network.http.referer.XOriginPolicy", "2");
user_pref("network.http.referer.XOriginTrimmingPolicy", "2");

/* Features */

user_pref("browser.compactmode.show", true);
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.tabs.tabmanager.enabled", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("image.jxl.enabled", true);
user_pref("layout.forms.reveal-password-button.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/* Fixes */

user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.theme.dark-private-windows", true);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.toolbars.bookmarks.showOtherBookmarks", false);
user_pref("browser.display.use_system_colors", false);

/* Extras */

user_pref("browser.startup.homepage.abouthome_cache.enabled", true);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
