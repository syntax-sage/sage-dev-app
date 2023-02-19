export default function Head() {
  return (
    <>
      <title>Syntax Sage</title>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=no"
        name="viewport"
      />
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
      {/* <!-- Search Eengine and Browser Meta Tags. --> */}
      <meta
        name="description"
        content="Embark on a journey of wonder and unlock the hidden secrets of coding. 🧑‍💻"
      />
      <meta
        name="abstract"
        content="Embark on a journey of wonder and unlock the hidden secrets of coding. 🧑‍💻"
      />
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Base URL to use for all relative URLs contained within the document --> */}
      {/* <base href="https://example.com/"> */}
      {/* <!-- Geo Positioning Meta Tags. --> */}
      {/* <meta name="geo.position"  content="50.97590;0.01722"> */}
      {/* <meta name="geo.region"    content="GB"> */}
      {/* <meta name="geo.placename" content="London, United Kingdom"> */}
      {/* <meta name="ICBM"          content="50.9759, 0.0172"> */}
      {/* <meta name="DC.title"      content="Location Name"> */}
      {/* <meta name="abstract"    content=""> <!-- Keep uder 100 characters --> */}
      {/* <meta name="rating"      content=""> <!-- General, 14 Years, Mature or Restricted --> */}
      {/* <!-- Open Graph Meta Tags (ogp.me) --> */}
      {/* <meta property="og:image"            content="http://example.com/image.jpg">  <!-- Web page thumbnail --> */}
      {/* <meta property="og:image"            content="http://example.com/image2.jpg"> <!-- Web page thumbnail (can be multiple) --> */}
      {/* <meta property="og:site_name"        content="Site Name">                     <!-- Web site title --> */}
      {/* <meta property="og:title"            content="Page Title">                    <!-- Web page title --> */}
      {/* <meta property="og:description"      content="Description of this web page">  <!-- Web page description --> */}
      {/* <meta property="og:type"             content="article">                       <!-- Content type ["product", "blog", "website", "book", "movie", ... ] --> */}
      {/* <meta property="og:url"              content="http://example.com/index.html"> <!-- Url to this web page --> */}
      {/* <meta property="og:locale"           content="en_GB">                         <!-- Main Language --> */}
      {/* <meta property="og:locale:alternate" content="fr_FR">                         <!-- Alternate Language --> */}
      {/* <meta property="og:locale:alternate" content="es_ES">                         <!-- Alternate Language --> */}
      {/* <meta property="og:latitude"         content="50.97590">                      <!-- Geographical coordenate --> */}
      {/* <meta property="og:longitude"        content="0.017221">                      <!-- Geographical coordenate --> */}
      {/* <meta property="og:street-address"   content="Flat 1, 26 Street Name">        <!-- Postal Address --> */}
      {/* <meta property="og:locality"         content="London">                        <!-- Locality --> */}
      {/* <meta property="og:region"           content="London">                        <!-- Region --> */}
      {/* <meta property="og:postal-code"      content="N1 PLE">                        <!-- Post code --> */}
      {/* <meta property="og:country-name"     content="UK">                            <!-- Country --> */}
      {/* <meta property="og:email"            content="email@example.com">             <!-- Contact email --> */}
      {/* <meta property="og:phone_number"     content="+44 123 456 7622">              <!-- Contact phone number --> */}
      {/* <meta property="og:video"            content="http://example.com/video.flv">  <!-- Video file url--> */}
      {/* <meta property="og:video:height"     content="640">                           <!-- Video height --> */}
      {/* <meta property="og:video:width"      content="385">                           <!-- Video width --> */}
      {/* <meta property="og:video:type"       content="application/x-shockwave-flash"> <!-- Video file format type --> */}
      {/* <meta property="og:audio"            content="http://example.com/audio.mp3">  <!-- Audio file url --> */}
      {/* <meta property="og:audio:title"      content="Song Title">                    <!-- Audio title --> */}
      {/* <meta property="og:audio:artist"     content="Name of Band">                  <!-- Audio artist --> */}
      {/* <meta property="og:audio:album"      content="Album Title">                   <!-- Audio album title--> */}
      {/* <meta property="og:audio:type"       content="application/mp3">               <!-- Audio file format type --> */}
      {/* <meta property="og:upc"              content="885909367481">                  <!-- UPC EAN barcodes--> */}
      {/* <meta property="og:isbn"             content="1873520786">                    <!-- Book ISBN number--> */}
      {/* <!-- Facebook Meta Tags. --> */}
      {/* <meta property="fb:app_id" content="123456789"> */}
      {/* <!-- Twitter Meta Tags. --> */}
      {/* <meta name="twitter:card" content="summary"> */}
      {/* <meta name="twitter:site" content="@site_account"> */}
      {/* <meta name="twitter:creator" content="@individual_account"> */}
      {/* <meta name="twitter:url" content="https://example.com/page.html"> */}
      {/* <meta name="twitter:title" content="Content Title"> */}
      {/* <meta name="twitter:description" content="Content description less than 200 characters"> */}
      {/* <meta name="twitter:image" content="https://example.com/image.jpg"> */}
      {/* <!-- Pinterest. --> */}
      {/* <meta name="pinterest" content="nopin" description="Sorry, you can't save from my website!">  <!-- Prevents sharing of content by Pinterest users. --> */}
      {/* <!-- News Feed Meta Tags. --> */}
      {/* <link rel="alternate" type="application/rss+xml"  title="Example (Feedburner)" href="//feeds.feedburner.com/example"> */}
      {/* <link rel="alternate" type="application/atom+xml" title="Example (Atom 0.3)"   href="//example.com/atom.xml"> */}
      {/* <link rel="alternate" type="application/rss+xml"  title="Example (RSS 2.0)"    href="//example.com/rss.xml"> */}
      {/* <!-- Favicon Meta Tags.  --> */}
      {/* <link rel="icon" href="/graphics/favicon.ico"> */}
      {/* <link rel="icon" href="/graphics/favicon-16.png"  sizes="16x16"   type="image/png"> */}
      {/* <link rel="icon" href="/graphics/favicon-32.png"  sizes="32x32"   type="image/png"> */}
      {/* <link rel="icon" href="/graphics/favicon-48.png"  sizes="48x48"   type="image/png"> */}
      {/* <link rel="icon" href="/graphics/favicon-62.png"  sizes="62x62"   type="image/png"> */}
      {/* <link rel="icon" href="/graphics/favicon-128.png" sizes="128x128" type="image/png"> */}
      {/* <link rel="icon" href="/graphics/favicon-192.png" sizes="192x192" type="image/png"> */}
      {/* <!-- Web App Settings. --> */}
      {/* <meta name="application-name" content="Application Name"> */}
      {/* <meta name="mobile-web-app-capable" content="yes"> */}
      {/* <!-- Apple iOS Settings. --> */}
      {/* <meta name="apple-mobile-web-app-capable" content="yes"> */}
      {/* <meta name="apple-mobile-web-app-status-bar-style" content="black"> */}
      {/* <meta name="apple-mobile-web-app-title" content="App Title"> */}
      {/* <meta name="apple-itunes-app" content="app-id=APP_ID, affiliate-data=AFFILIATE_ID, app-argument=http/url-sample.com"> <!-- App Banner. --> */}
      {/* <meta name="format-detection" content="telephone=no"> */}
      {/* <link rel="apple-touch-icon" href="/graphics/apple-touch-icon.png"> */}
      {/* <link rel="apple-touch-icon-precomposed" href="/graphics/apple-touch-icon-precomposed.png"> */}
      {/* <link rel="apple-touch-icon" sizes="57x57" href="/graphics/apple-icon-57.png"> */}
      {/* <link rel="apple-touch-icon" sizes="72x72" href="/graphics/apple-icon-72.png"> */}
      {/* <link rel="apple-touch-icon" sizes="114x114" href="/graphics/apple-icon-114.png"> */}
      {/* <link rel="apple-touch-icon" sizes="144x144" href="/graphics/apple-icon-144.png"> */}
      {/* <link rel="alternate" href="ios-app://APP-ID/http/url-sample.com"> <!-- Apple iOS app deep linking. --> */}
      {/* <meta property="al:ios:url" content="applinks://docs"> */}
      {/* <meta property="al:ios:app_store_id" content="12345"> */}
      {/* <meta property="al:ios:app_name" content="App Links"> */}
      {/* <!-- Google Android. --> */}
      {/* <meta name="theme-color" content="#E64545"> */}
      {/* <meta name="google-play-app" content="app-id=package-name"> */}
      {/* <link rel="alternate" href="android-app://package-name/http/url-sample.com"> <!-- Android app deep linking. --> */}
      {/* <meta property="al:android:url" content="applinks://docs"> */}
      {/* <meta property="al:android:app_name" content="App Links"> */}
      {/* <meta property="al:android:package" content="org.applinks"> */}
      {/* <!-- Apple Safari Pinned Site. --> */}
      {/* <link rel="mask-icon" href="path/to/icon.svg" color="red"> */}
      {/* <!-- Google Chrome. --> */}
      {/* <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID"> */}
      {/* <meta name="google" value="notranslate"> */}
      {/* <!-- Windows Internet Explorer. --> */}
      {/* <meta http-equiv="cleartype" content="on"> */}
      {/* <meta name="skype_toolbar" content="skype_toolbar_parser_compatible"> */}
      {/* <meta name="msapplication-tap-highlight" content="no"> */}
      {/* <meta name="application-name" content="Contoso Pinned Site Caption"> */}
      {/* <meta name="msapplication-tooltip" content="Example Tooltip Text"> */}
      {/* <meta name="msapplication-starturl" content="/"> */}
      {/* <meta name="msapplication-allowDomainApiCalls" content="true"> */}
      {/* <meta name="msapplication-allowDomainMetaTags" content="true"> */}
      {/* <meta name="msapplication-badge" content="frequency=30; polling-uri=http://example.com/id45453245/polling.xml"> */}
      {/* <meta name="msapplication-navbutton-color" content="#FF3300"> */}
      {/* <meta name="msapplication-notification" content="frequency=60;polling-uri=http://example.com/livetile"> */}
      {/* <meta name="msapplication-square150x150logo" content="/graphics/ie-logo.png"> */}
      {/* <meta name="msapplication-square310x310logo" content="/graphics/ie-logo-large.png"> */}
      {/* <meta name="msapplication-square70x70logo" content="/graphics/ie-logo-small.png"> */}
      {/* <meta name="msapplication-wide310x150logo" content="/graphics/ie-logo-wide.png"> */}
      {/* <meta name="msapplication-task" content="name=Check Order Status;action-uri=./orderStatus.aspx?src=IE9;icon-uri=./favicon.ico"> */}
      {/* <meta name="msapplication-task-separator" content="1"> */}
      {/* <meta name="msapplication-TileColor" content="#FF3300"> */}
      {/* <meta name="msapplication-TileImage" content="path/to/tileimage.jpg"> */}
      {/* <meta name="msapplication-window" content="width=1024;height=768"> */}
      {/* <!-- External Stylesheets. --> */}
      {/* <link rel="stylesheet" href="/stylesheets/styles.css"> */}
      {/* <!-- Typekit. --> */}
      {/* <script src="//use.typekit.com/XXXXXXX.js"></script> */}
      {/* <!-- Humans --> */}
      {/* <link rel="author" href="/humans.txt"> */}
      {/* <link rel="copyright" href="/copyright.html"> */}
      {/* <!-- Alternative Languages. --> */}
      {/* <link rel="alternate" href="https://ja.example.com/" hreflang="ja"> */}
      {/* <!-- HMTL5 Prefetching --> */}
      {/* <link rel="prefetch" href="//example.com">            <!-- Prefetch the full page --> */}
      {/* <link rel="prefetch" href="//example.com/sprite.png"> <!-- Prefetch a single asset --></link> */}
    </>
  );
}
