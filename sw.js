if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(a[b])return;let c={};const d=e=>i(e,b),n={module:{uri:b},exports:c,require:d};a[b]=Promise.all(s.map((e=>n[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Phraserium"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutPage-en-C0JcNUQB.js",revision:"4f73450e7a1c089a1f709eaa14bd1634"},{url:"assets/AboutPage-fzwSxQIE.js",revision:"9bd37ee48b78bf12aae8e767a8be96a1"},{url:"assets/AboutPage-he-Dk7EBV_y.js",revision:"2604d06a435b1ced8dbdf445cdff2fdd"},{url:"assets/AboutPage-ru-CkV86QFK.js",revision:"4e11a145a8d8791d763323740ad89975"},{url:"assets/BackupPage-Dt8DDX2y.js",revision:"eb430b2149442a0ce057526a9da81455"},{url:"assets/constants-DhvNFzvt.js",revision:"aa612a93ad92f9284f6a8e7ea35241f7"},{url:"assets/DrawerToggleBtn-4YO49KwD.js",revision:"6a9f47214cbbe8a4fcd0e3af8b0bc9f5"},{url:"assets/DrawerToggleBtn-CSKrhQLy.css",revision:"558fc29bc9ed6eeca87969aa1e51aed7"},{url:"assets/EntriesList-CBzvsuxy.css",revision:"725a079cf747aac590b56496f0a04abc"},{url:"assets/EntriesList-Ci-yKFd2.js",revision:"df91fc468ca9c1a093d2dcd736577d8d"},{url:"assets/EntriesPage-CWVGAeD9.css",revision:"063a94fd3adddb53f67e1a466d22607f"},{url:"assets/EntriesPage-D1aHdbpW.js",revision:"d6c1a047d6c5c8a109a5e48294950885"},{url:"assets/ErrorNotFound-uulUFhRT.js",revision:"9dee213a79dbb880c0e236a16a8c5d9f"},{url:"assets/FavoritesPage-DGz2bNhy.js",revision:"fdef3b6752cb962132de1abf3e01a343"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format-CJebrXOQ.js",revision:"11958f3adde8ac79ab165d39e7b54bab"},{url:"assets/i18n-DeieErXd.js",revision:"4b26971e9e7e220ce213897b00823480"},{url:"assets/index-D1nlLIt7.js",revision:"d335cf6fdcab7c723ac92cfd0756a630"},{url:"assets/index-DgoFnMMn.css",revision:"786f188e971e5dc2bea20cc025bcf972"},{url:"assets/MainLayout-CkroWuFx.js",revision:"f433b34e572a69615e5f583f426524e1"},{url:"assets/NotesPage-24vVP7Y6.js",revision:"672c83a6fad3c06d8dee5cc2db50a5e9"},{url:"assets/NotesPage-B94rI2DB.css",revision:"1ad5318506bd4ac26b3f207185ee8d18"},{url:"assets/QBtnDropdown-DMNqbgzY.js",revision:"87619e19394949ac74f36ba957c10a32"},{url:"assets/QChip-BlHW0e0D.js",revision:"87f3840b26e6538343dd2e69ca9b886e"},{url:"assets/QExpansionItem-Bwg2ZThf.js",revision:"a5dfcaddaa8e3ef84057b04da28c3bd8"},{url:"assets/QImg-Bchzr_HB.js",revision:"2f507d55fcf531a75720627d9913b463"},{url:"assets/QItem-DVkrpjjO.js",revision:"f65b4dd29a34f7881788fb3ced1bcf3a"},{url:"assets/QList-CCAwV262.js",revision:"f7710db7907bba67bf4a82b20a3d7af1"},{url:"assets/QMenu-aSgRhdZP.js",revision:"cfd942623e811f3e75ed258b0ac07192"},{url:"assets/QPage-k_HO56vU.js",revision:"1912f9be9e5cbe8337caaeae1dd27851"},{url:"assets/QResizeObserver-BDSMeDHN.js",revision:"66108d349891e0b5458346d7b84d37a8"},{url:"assets/rtl-DFPa-2ov.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/selection-CSuqfDVu.js",revision:"c879b3247685fe8b15453066e6831423"},{url:"assets/SettingsPage-B5QEsDXj.js",revision:"b2893082557f168118a3a7db56073dc2"},{url:"assets/StartPage-D6YNYUbu.js",revision:"fcca30c8ada12151b2af1b14a07d5d70"},{url:"assets/TopicsPage-4PvkyM_o.js",revision:"df6d49b76b64647b3632fe1a3162d146"},{url:"assets/TopicsPage-C1Oa--q9.css",revision:"5563cccd8c9290d8b95832dc82d6cd0a"},{url:"assets/use-quasar-DW4_Zn-T.js",revision:"eb574002982faaa599cfc136cdc2c61f"},{url:"favicon.ico",revision:"14cd4148d22ba8b51216496f912888a0"},{url:"goatcounter.min.js",revision:"2e0eac2b3bb4f0a9f9c5196278309d90"},{url:"icons/apple-icon-120x120.png",revision:"cdbb906682948946babdcefac734eed4"},{url:"icons/apple-icon-152x152.png",revision:"f98c25276ff3bc00b54242525e1833b2"},{url:"icons/apple-icon-167x167.png",revision:"e2d9b5dc6a1989a4567a6fb8260aa802"},{url:"icons/apple-icon-180x180.png",revision:"40a87b4cf447575697d59a6be6e13eb4"},{url:"icons/cambridge.png",revision:"a968edbc8cf7a25031547ff5a664aeea"},{url:"icons/favicon-128x128.png",revision:"911cc38d0b13813a25d0db530564f7e8"},{url:"icons/favicon-16x16.png",revision:"9090f88dac645d9f4a5a521672e2603d"},{url:"icons/favicon-32x32.png",revision:"9c2aa96c6a53cffcfb60629363dbc766"},{url:"icons/favicon-96x96.png",revision:"9a159cb922bece6c269e5d806751773d"},{url:"icons/icon-128x128.png",revision:"911cc38d0b13813a25d0db530564f7e8"},{url:"icons/icon-192x192.png",revision:"84ad935b59eb01e1f2c4aa6000901ed2"},{url:"icons/icon-256x256.png",revision:"b1659d7b49b8677b0838454d7f64708d"},{url:"icons/icon-384x384.png",revision:"b0870b3b576e3c84c89ca05786101dbd"},{url:"icons/icon-512x512.png",revision:"e3bc348bbc3a214d7fbb84ff9f1ce7fe"},{url:"icons/ms-icon-144x144.png",revision:"28ed2102d15050ade952dfa2aa1c6abd"},{url:"icons/pealim.png",revision:"a87a294f2882834d32442171e5e30953"},{url:"icons/qr-code.png",revision:"5b75964f4b83c6a85356e78487684805"},{url:"icons/reverso.png",revision:"2fc93d10e14ee94de338ba390f21a5ae"},{url:"icons/safari-pinned-tab.svg",revision:"d383ff09efdbe1b6e9f80c13a0d1fdd2"},{url:"icons/yin-yang.png",revision:"fd4f862dc43514da95a0ead563f8ce04"},{url:"images/art/angle.png",revision:"ede0f0afead726cdede1fdb022d98dce"},{url:"images/art/circle.png",revision:"b0bdc72a0251b9c951a42974896c9ddf"},{url:"images/art/crayons.webp",revision:"ac6a9ba903cee46eb3244475e9152a02"},{url:"images/art/curve.png",revision:"c08faa99b3fc99594abb16e97c9c4a37"},{url:"images/art/dot.png",revision:"605a362b795f45cb36211e85d6fddde4"},{url:"images/art/line.png",revision:"f0879c29fa50ec9af79a5d50a7261712"},{url:"images/art/oval.png",revision:"61dd926040a8b154c2b6c733a0990972"},{url:"images/art/rectangle.png",revision:"cf8960bc2982dcc02b13b95ad1ba7258"},{url:"images/art/rhombus.png",revision:"c08f3cb6d3f1b07aaa65fcbc13c0fb80"},{url:"images/art/square.png",revision:"e63aae5685c75088e2d1bfa6bef3644d"},{url:"images/art/trapezoid.png",revision:"8997303e769e6b6b6ef3ea75f9976cd5"},{url:"images/art/triangle.png",revision:"3539f7b00ff69eee0c96ac51814b8506"},{url:"images/berries/barberry.webp",revision:"59791b9b08702a2e07b8657d0abc8bb4"},{url:"images/berries/bilberry.webp",revision:"ac43bf59643968b55be29488d1a3d270"},{url:"images/berries/blackberry.webp",revision:"e44663a6fc71a75d72e3d8c62bdf56f4"},{url:"images/berries/blueberry.webp",revision:"c65d84ee83b375f242480f8275b34f96"},{url:"images/berries/chokeberry.webp",revision:"9b8ada710c5ad407b89ddeebbb45464c"},{url:"images/berries/cloudberry.webp",revision:"48b3a4ac5bb8bbaccb1648bf0cb3ea3a"},{url:"images/berries/cornel.webp",revision:"cbc56007d75b6152913665b353e36406"},{url:"images/berries/cranberry.webp",revision:"7d4d47388371bfaca1a38422a95e200d"},{url:"images/berries/currant.webp",revision:"a8954296130676b3b542b482b6dde8d5"},{url:"images/berries/gooseberry.webp",revision:"05ee43cf21c42d7570a67790cd91134a"},{url:"images/berries/honeyberry.webp",revision:"601d9c36356a555fe69fe88899564bdf"},{url:"images/berries/lingonberry.webp",revision:"1a5a2e4bb2521a3771af67d5f4b26f00"},{url:"images/berries/mulberry.webp",revision:"75aead734466dab6ba3fbefd60157c37"},{url:"images/berries/raspberry.webp",revision:"e3d727cdc1ed507c451f2c289d820b27"},{url:"images/berries/rosehip.webp",revision:"68dd16b8b636fc5c5e13e16862b03a50"},{url:"images/berries/rowan.webp",revision:"36107f37734dd6d05f263ba8162dee92"},{url:"images/berries/sea_buckthorn.webp",revision:"c6c32ac87b1db1344865b34233b17aa3"},{url:"images/berries/sloe.webp",revision:"38bf3b77139af68e3a536498e6d10d6e"},{url:"images/berries/strawberry.webp",revision:"b619303b5be0bee1d4482192ab625dfe"},{url:"images/berries/wild_strawberry.webp",revision:"65142320df5e132d1340d3d585d58e8e"},{url:"images/bg-square.jpg",revision:"1c7101616b8cf5da6b4690c0736b79a8"},{url:"images/fruits/apple.webp",revision:"04ef3aad178f222ce3fab305151825a5"},{url:"images/fruits/apricot.webp",revision:"486059afab54f0af0fb01307f8b0c75a"},{url:"images/fruits/avocado.webp",revision:"2cf9b9ad8c169ff8b54ae92cb53edd87"},{url:"images/fruits/banana.webp",revision:"9eaddc30b2424ee28a3724840f387707"},{url:"images/fruits/cherries.webp",revision:"0ebd96ee5e840abfcbd85d066c8449fe"},{url:"images/fruits/cherry_plum.webp",revision:"a2f83ff6a792e25b7770205b348f8fba"},{url:"images/fruits/cherry.webp",revision:"97f90e59e5d4a669dda8bde42547d1d2"},{url:"images/fruits/citron.webp",revision:"1e5abfdff733421062072a7909cdae5e"},{url:"images/fruits/clementine.webp",revision:"748c4c5f785c667e50858a3f9015f36d"},{url:"images/fruits/coconut.webp",revision:"e5c4d184473ade4a5301d8a213cff09b"},{url:"images/fruits/date.webp",revision:"150843b899c71d8e3e9c06444f401541"},{url:"images/fruits/feijoa.webp",revision:"10fbd9743d3e36ab3e3e53f423fed65a"},{url:"images/fruits/fig.webp",revision:"ab669ad10112d19e8ee18fe28215ae29"},{url:"images/fruits/grapefruit.webp",revision:"005478191d61f63a143e4842c07c97d5"},{url:"images/fruits/guava.webp",revision:"ffa5942a3e1a96f15d239ca61cac06fa"},{url:"images/fruits/kiwi.webp",revision:"c609ee861ffe3f7becdbb89dda222d9a"},{url:"images/fruits/lemon.webp",revision:"c67a69470b01dbe15a73d86dab48b9ed"},{url:"images/fruits/lime.webp",revision:"f83c60c2af5a114016eb46513087898e"},{url:"images/fruits/lychee.webp",revision:"2e7c0e1e914740de1aebb239bd193e0b"},{url:"images/fruits/mandarin.webp",revision:"ad4694750d088166fd52c90bc6511fb5"},{url:"images/fruits/mango.webp",revision:"3ffc5c52e3664a34915ba44cb883bdee"},{url:"images/fruits/melon.webp",revision:"686e9d580930aaa36becbf54fa5ea0d4"},{url:"images/fruits/nectarine.webp",revision:"71ef3a6bc1f60b111ddb91e307ed2461"},{url:"images/fruits/orange.webp",revision:"bd8932006d7b7c231da8bb7cd34b2d67"},{url:"images/fruits/papaya.webp",revision:"48c5d7f2547a83720dd3622669827923"},{url:"images/fruits/passion_fruit.webp",revision:"a2609d9815b022d5420ccd2caf761d73"},{url:"images/fruits/peach.webp",revision:"7015e3771d758f069ea7d5e67431e00e"},{url:"images/fruits/pear.webp",revision:"8e6799eccf626c25bef5e12174d20e48"},{url:"images/fruits/persimmon.webp",revision:"38758007eaa553230d449dd8a7d369cf"},{url:"images/fruits/pineapple.webp",revision:"384af6cd5bc128b0bc994b67a7d52209"},{url:"images/fruits/pitaya.webp",revision:"a48cc83028325cac8a9895d1a2954969"},{url:"images/fruits/plum.webp",revision:"409b1397478b69661178951ce490856f"},{url:"images/fruits/pomegranate.webp",revision:"ac41ff4f32bc4087cd8e084287a9fc7e"},{url:"images/fruits/pomelit.webp",revision:"038ba872df31a6d36eb249bb51cb39ed"},{url:"images/fruits/pomelo.webp",revision:"428fecc30503f65fb2158ad15e2ec820"},{url:"images/fruits/prunes.webp",revision:"8981fbe0421737a57b629f79c13adcbd"},{url:"images/fruits/watermelon.webp",revision:"88e8ba0b550f311ba9b6b5774307e449"},{url:"images/landscape/galaxy.png",revision:"7bee063202b12bcab6a345f5cbc5fbd4"},{url:"images/landscape/mars.png",revision:"d44e4a7bef46cb4d240ab6789c0ce09c"},{url:"images/landscape/rosewind.png",revision:"b31021efc4957899241bfbeb516b998d"},{url:"images/landscape/venus.png",revision:"48c0ba9045b0aabc6a4de309a028c7ff"},{url:"images/numbers/henum-1.webp",revision:"78e4d56e3961742aeca7f8bbf3a11026"},{url:"images/numbers/henum-10.webp",revision:"b12327426c5dfdd69327ee255b166d10"},{url:"images/numbers/henum-100.webp",revision:"75af412028579720f340d43fcc1bf7ad"},{url:"images/numbers/henum-2.webp",revision:"690a1b58bf818b7186aa04a60f62326f"},{url:"images/numbers/henum-20.webp",revision:"edf38e84515f90abdf3f97edbb77b4eb"},{url:"images/numbers/henum-200.webp",revision:"f181141b327bc99a5f127295891d9cab"},{url:"images/numbers/henum-3.webp",revision:"b7a826115b25dea88a51b337189ee3d8"},{url:"images/numbers/henum-30.webp",revision:"99323764d1be85c6e80f6c68243997bc"},{url:"images/numbers/henum-300.webp",revision:"0b366dc878f80a4bb029c6300c62ffd2"},{url:"images/numbers/henum-4.webp",revision:"235867074993779f38d60ca1ea7ad6d2"},{url:"images/numbers/henum-40.webp",revision:"e75908d701a6b1805c636ac2daec8107"},{url:"images/numbers/henum-400.webp",revision:"3238bde0aaf945065d4b258f9d37e0c8"},{url:"images/numbers/henum-5.webp",revision:"2cffac76943c92775dfc865ac971d088"},{url:"images/numbers/henum-50.webp",revision:"55a003b51f44f26a215621e0525ef2ae"},{url:"images/numbers/henum-500.webp",revision:"9ce95453d699f7ecb2831e2b7aebbc6c"},{url:"images/numbers/henum-6.webp",revision:"3e7307aa3d37b50e0d63d01096d7158f"},{url:"images/numbers/henum-60.webp",revision:"6a36abd11175df4ac7185116c06a4861"},{url:"images/numbers/henum-600.webp",revision:"88029f2e1984534732a65a269df48c4a"},{url:"images/numbers/henum-7.webp",revision:"2dbdafb6c00cc0f48e247d071aa574d9"},{url:"images/numbers/henum-70.webp",revision:"03c278be6c20d90f3d5ce5a0ee3bd30e"},{url:"images/numbers/henum-700.webp",revision:"19e7f2651f200e7ff6a728909b76b5a6"},{url:"images/numbers/henum-8.webp",revision:"42663f8dc6fa27ae438bbc33dcc8f232"},{url:"images/numbers/henum-80.webp",revision:"bce609d278d573050be11ebc14cf3130"},{url:"images/numbers/henum-800.webp",revision:"106346c9c3eef066b8b77fadc0133f3e"},{url:"images/numbers/henum-9.webp",revision:"e4eaf553ea2d69b7750e6d1f9cf00fed"},{url:"images/numbers/henum-90.webp",revision:"6941b1ef968d4f0f4d13c642cb9eab1a"},{url:"images/numbers/henum-900.webp",revision:"3c1fcfcc993188a5794c4805a75c747c"},{url:"images/urban/land_of_israel.webp",revision:"43235d68091ddc75e04616e074fccf9e"},{url:"images/veggies/arugula.webp",revision:"3b13719cc15e70f0ae1babbfc0143f8c"},{url:"images/veggies/bay_leaf.webp",revision:"1309fa2f9f30a069d040b3cd7d044ae5"},{url:"images/veggies/bean.webp",revision:"a7f49d82d721de7e69042e337ae7bd63"},{url:"images/veggies/beet.webp",revision:"7483aab9e76813249d7b0377c9310347"},{url:"images/veggies/bell_pepper.webp",revision:"3bd8fc514dfee5905a4b56fc846eeac0"},{url:"images/veggies/broccoli.webp",revision:"5c8f8e9c8d16fa6206b34a53ea9b96d9"},{url:"images/veggies/cabbage.webp",revision:"7f4f2e43a80cf7c365783547db599fff"},{url:"images/veggies/carrot.webp",revision:"1353624c7ec182f77d9070c289dce34b"},{url:"images/veggies/cauliflower.webp",revision:"5a9401bb33f32ec49e20f337fc3f06e0"},{url:"images/veggies/celery.webp",revision:"b67cb54aa63634be14dfd2848595465a"},{url:"images/veggies/cilantro.webp",revision:"902f142cbda26693ebfa9b3f30cab9f6"},{url:"images/veggies/cucumber.webp",revision:"8bd404d72c83866bd0b8f4b95be0547b"},{url:"images/veggies/eggplant.webp",revision:"c155fcfa3a509ccaa7512b821a40b812"},{url:"images/veggies/fennel.webp",revision:"fdf99e32aaae14209a5adb123be749a4"},{url:"images/veggies/garlic.webp",revision:"05c207e6ec257f3487e56c850a48369b"},{url:"images/veggies/ginger.webp",revision:"ab893f37e24d562e34dd0fb0c8a808bd"},{url:"images/veggies/green_bean.webp",revision:"7d201d399ed5ab64c1dd0c234e7baabc"},{url:"images/veggies/horseradish.webp",revision:"22af822bf306ec6b2c99c858c0ca0072"},{url:"images/veggies/hot_pepper.webp",revision:"b5fb57b650058ec372898468ec3969da"},{url:"images/veggies/jalapeno.webp",revision:"f3082dec8a9a36a9a24e158eb901ab2f"},{url:"images/veggies/mushroom.webp",revision:"e066d22e833e4f9418473b06e893dd9d"},{url:"images/veggies/olive.webp",revision:"0ab23f2829faaf0da20ac645168151be"},{url:"images/veggies/onion.webp",revision:"cfa1a383ebaa91651bbcbdcf2802c027"},{url:"images/veggies/parsley.webp",revision:"7c8ffab4a5b1139a2786dd8a83e95943"},{url:"images/veggies/pea.webp",revision:"3cd7767a4d606eb4b9e6d279ec719147"},{url:"images/veggies/potato.webp",revision:"5fd984701ec4e4f25e48b3b66673b00d"},{url:"images/veggies/pumpkin.webp",revision:"a65e04e6404147d66942b985bcad61d8"},{url:"images/veggies/radish.webp",revision:"cc5c12ebcc34bdbe5c31087a6c5eb291"},{url:"images/veggies/rutabaga.webp",revision:"e9afef533ef312cda363bf9ce5c3330d"},{url:"images/veggies/spinach.webp",revision:"b073f8de79c5d8ac8b474bd0c50a888c"},{url:"images/veggies/sweet_potato.webp",revision:"67a252260e0b9941086573ee5ec755ea"},{url:"images/veggies/tomato.webp",revision:"7821bf5a6ede007cd0498ad9eb2de34c"},{url:"images/veggies/turnip.webp",revision:"604f03acdebd7d761e04a232a7ead487"},{url:"images/veggies/zucchini.webp",revision:"cbe1747ef8105e406529d9ff75c4e2a2"},{url:"images/weather/aurora.jpg",revision:"a130dfae56937174c6cbf6890622b4cc"},{url:"images/weather/icicle.png",revision:"9e69c728cd7ffb072c4706622f149f0e"},{url:"images/weather/lunar_eclipse.png",revision:"cc68e9868c2bd2604c5233f7f845f3cc"},{url:"images/weather/solar_eclipse.png",revision:"26a7a5ccaafaa7be695a33ed85599b18"},{url:"index.html",revision:"64589f68cbda231a04f083e86549560d"},{url:"manifest.json",revision:"14df93e679663782c7f589c37e0e1336"},{url:"updates.json",revision:"150a30c607ab924f8cbe7dca04624083"},{url:"vocabulary/icons/carrot.png",revision:"8367e306e2d82150a89056e7390aa117"},{url:"vocabulary/icons/fast-food.png",revision:"53ab1881022806943ad05dde24184101"},{url:"vocabulary/icons/first-aid.png",revision:"9b1a0a62d9a74b0828ad73a809398c3e"},{url:"vocabulary/icons/foods.png",revision:"2b1aac0c9553df479524aedbffa09ab8"},{url:"vocabulary/icons/fruits.png",revision:"4ac4649e5fe9e8c53db2fba619e90bd0"},{url:"vocabulary/icons/geometric.png",revision:"2391ed6ab8a689db3549431d15cf62a4"},{url:"vocabulary/icons/house.png",revision:"ce9482944ef29cc179b6ff32f0822596"},{url:"vocabulary/icons/landscape.png",revision:"e81aa999b42cc0b7e248bb0b45570846"},{url:"vocabulary/icons/mailbox.png",revision:"d7d6b9bdd41df0c411ae2cddc0bcbcdf"},{url:"vocabulary/icons/palette.png",revision:"0b3958ef6d4a5b42cf6f79378d77ca33"},{url:"vocabulary/icons/sack.png",revision:"8879419e1389e628ddf59e3e714207bb"},{url:"vocabulary/icons/scales.png",revision:"648310768d23abcff4f8b366d814d42a"},{url:"vocabulary/icons/shopping-cart.png",revision:"2e2a70c33b9f1f74a98799ad213c5747"},{url:"vocabulary/icons/strawberries.png",revision:"f50d998a23bb480d27e26060b07d10af"},{url:"vocabulary/icons/weather.png",revision:"10be2d557edc71bdd850e69b5e4ff2f7"},{url:"vocabulary/topics.json",revision:"83d0fdb6552e839b3d11db6137932c93"},{url:"vocabulary/topics/art.json",revision:"3b41a3a83291c4f82ee8662d220db017"},{url:"vocabulary/topics/foods.json",revision:"68c85d173bab0fe68dd006e354c935a4"},{url:"vocabulary/topics/fruits.json",revision:"205cc933df563f7a4a00f6ee7ea60f09"},{url:"vocabulary/topics/groceries.json",revision:"0085c750c9e10872f11b92824c2465ba"},{url:"vocabulary/topics/landscape.json",revision:"1170ae4f1a999362013f136a3c318a29"},{url:"vocabulary/topics/misc.json",revision:"8d7446b51adcd44f911c64486ac8a24c"},{url:"vocabulary/topics/numbers.json",revision:"04fc565a14e7cd15f72931e18b5aac9c"},{url:"vocabulary/topics/pronouns.json",revision:"0e12c2b39ebc585b7b70ef119a1dd043"},{url:"vocabulary/topics/shop.json",revision:"bdf46c1ce4da238ae0c3a4d000e24e0b"},{url:"vocabulary/topics/time.json",revision:"1c5a4392975dedcf15428cc6224fc84b"},{url:"vocabulary/topics/urban.json",revision:"3bf2e324fac451f8cc49f2e473c71cd9"},{url:"vocabulary/topics/weather.json",revision:"b00b92e5e4108a5ec6ff30e2f9842245"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
