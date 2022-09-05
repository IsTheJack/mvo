/* globals */
window.startupOffset = window.startupOffset || +new Date();
function logWithOffset(message) {
  const diff = (+new Date()) - window.startupOffset;
  console.log(`[VNDA +${diff}] ${message}`);
}

if(afiliado_link !== null && afiliado_link !== '') {
  afiliado_link = afiliado_link;
} else {
  afiliado_link = "https://lp.vocenodigitalagora.com.br/flash/mvo/comprar";
}

console.log("= = = = = = = = = = = = = = = = = = = = = = = =\n\nVNDA® Template Flash.\n\n• Aumente Sua Taxa de Conversão\n• Tracking Otimizado\n• Ultra-rápido\n\nLeia mais em: " + afiliado_link + "\n\n= = = = = = = = = = = = = = = = = = = = = = = =");
logWithOffset("Initializing...... ");
logWithOffset("Domain: " + dominio);
const url = window.location.href;
let url_param = '';

if (url.includes('?')) {
  url_param = '&' + url.split("?")[1];
}

if (checkout_link.includes('?')) {
  checkout_link = checkout_link + "&mvo";
} else {
  checkout_link = checkout_link + "?mvo";
}




logWithOffset("Checkout: " + checkout_link + url_param);


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'lp_view_b',
'fb_pixel_01': fb_pixel_01,	
'fb_pixel_02': fb_pixel_02,	
'fb_pixel_03': fb_pixel_03,	
'fb_pixel_04': fb_pixel_04,	
'fb_pixel_05': fb_pixel_05,	
'fb_pixel_06': fb_pixel_06,	
'fb_pixel_07': fb_pixel_07,	
'fb_pixel_08': fb_pixel_08,	
'fb_pixel_09': fb_pixel_09,	
'fb_pixel_10': fb_pixel_10,	
'wp_num': wp_num,	
'tt_pixel': tt_pixel,	
'google_analytics': google_analytics,
'google_analytics_02': google_analytics_02,
'google_analytics_03': google_analytics_03,
'google_analytics_04': google_analytics_04,
'google_ads': google_ads,
'google_ads_02': google_ads,
'google_ads_03': google_ads,
'google_ads_04': google_ads,
});