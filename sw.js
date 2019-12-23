/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ajax_footer.html",
    "revision": "a798b7c4a478bb9420c73b4cdc038e9d"
  },
  {
    "url": "ajax_header.html",
    "revision": "3dc859e4188f2db9cefd5584e2e25c21"
  },
  {
    "url": "assets/css/IndexedDB.css",
    "revision": "221eb9b8acd53e2cf99601dcdc27f968"
  },
  {
    "url": "assets/css/type_plug.css",
    "revision": "ec44f0097f1f2b5549f5da0419a9a07d"
  },
  {
    "url": "assets/css/type.css",
    "revision": "798011328bb7aa0db06be0132a1d7ff0"
  },
  {
    "url": "assets/images/activity/activity_01/bg_s0.jpg",
    "revision": "0376515920c86c3e59e5c59d313cc387"
  },
  {
    "url": "assets/images/activity/activity_01/bg_s1.jpg",
    "revision": "3c5d5f398da69296b230079a0334b228"
  },
  {
    "url": "assets/images/activity/activity_01/bg_s2.jpg",
    "revision": "a800fb92bdf92572b7cb3f0fdd77a6f9"
  },
  {
    "url": "assets/images/activity/activity_01/bg_s3.jpg",
    "revision": "77a47bb1875eb2177a8868d0edec50be"
  },
  {
    "url": "assets/images/activity/activity_01/icon_good.png",
    "revision": "9e06b7a0746234c6d11a82b0602fcd8f"
  },
  {
    "url": "assets/images/activity/activity_01/s0.png",
    "revision": "9c64adaf50682df35c9e61b60aca42c4"
  },
  {
    "url": "assets/images/activity/activity_01/s1_icon_link_1.png",
    "revision": "e8297fd505ab4a9729f72700013aa9a9"
  },
  {
    "url": "assets/images/activity/activity_01/s1_icon_link_2.png",
    "revision": "8934d131f76357196bcec157bfb43b62"
  },
  {
    "url": "assets/images/activity/activity_01/s1_icon_link_3.png",
    "revision": "6d08b7db9b3100294ff0048992d0760e"
  },
  {
    "url": "assets/images/activity/activity_01/s1_icon_link_4.png",
    "revision": "0ed4cf55a1b2551a2e3eca012998a659"
  },
  {
    "url": "assets/images/activity/activity_01/s1_title.png",
    "revision": "0f0d202b88aacc8abfba5fdf5fa3e838"
  },
  {
    "url": "assets/images/activity/activity_01/s1.png",
    "revision": "4b1e986caf8e26447e59f64668104bdb"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_1.png",
    "revision": "de1517ffff0fc47ca8c56b5ca9654a79"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_2.png",
    "revision": "cd7e926aac8d802511f767f8f146fc70"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_3.png",
    "revision": "26d5d056187c127d208a36ad52902343"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_4.png",
    "revision": "592c423435fe9e1c05dd551c06a25560"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_5.png",
    "revision": "2cc4276556946dc87a8f85d7ebb6a59c"
  },
  {
    "url": "assets/images/activity/activity_01/s2_step_6.png",
    "revision": "7851551ab8b4d161ac29c1ef343ba66d"
  },
  {
    "url": "assets/images/activity/activity_01/s2_title.png",
    "revision": "15624780d38019cde31bc6aeb53a10ec"
  },
  {
    "url": "assets/images/activity/activity_01/s2.png",
    "revision": "1547638975dc558cf619167a2386ade2"
  },
  {
    "url": "assets/images/activity/activity_01/s3_icon_link_1.png",
    "revision": "98f7f79f8c0ccc8f161ca67d1a8e4482"
  },
  {
    "url": "assets/images/activity/activity_01/s3_icon_link_2.png",
    "revision": "78c82c47969f7a99cc0ec6072a62351d"
  },
  {
    "url": "assets/images/activity/activity_01/s3_icon_link_3.png",
    "revision": "97d4e2961ae8d6ff896565fe0942c41e"
  },
  {
    "url": "assets/images/activity/activity_01/s3_icon_link_4.png",
    "revision": "a8b1d2646c9337f7d6555175fe186919"
  },
  {
    "url": "assets/images/activity/activity_01/s3_title.png",
    "revision": "ef21e6aa967ecaae27f3795dd24b38a9"
  },
  {
    "url": "assets/images/activity/activity_01/s3.png",
    "revision": "148f08f0a619aed559ab3abaec904ce4"
  },
  {
    "url": "assets/images/car/bg_car.svg",
    "revision": "ddf6b888e852ab324478d78e734719e1"
  },
  {
    "url": "assets/images/car/car_logo_0.jpg",
    "revision": "054cd9345ab24e61665aa5575cdb4dc0"
  },
  {
    "url": "assets/images/car/icon_input_car.svg",
    "revision": "bd0f0ea507d07d464ce73df79f45a17b"
  },
  {
    "url": "assets/images/car/icon_input_link.svg",
    "revision": "e95f0ae87351329f3311d49df32fb38f"
  },
  {
    "url": "assets/images/car/icon_payment_1.svg",
    "revision": "1625c985050f812fbeb5d750dff4381d"
  },
  {
    "url": "assets/images/car/icon_payment_2.svg",
    "revision": "d9b25d7639f96a0be7fc307c0465a13d"
  },
  {
    "url": "assets/images/car/icon_payment_3.svg",
    "revision": "8199fb7610bc5cb7b439521dce6e13f4"
  },
  {
    "url": "assets/images/car/icon_payment_4.svg",
    "revision": "535679913108570e88e0b0197e20964a"
  },
  {
    "url": "assets/images/car/icon_step_car.svg",
    "revision": "e15356d80777b19d2b437ce1a01537c0"
  },
  {
    "url": "assets/images/general/bg_signup.svg",
    "revision": "e59b34ff6813659d2a8f9809405faaa8"
  },
  {
    "url": "assets/images/general/code.png",
    "revision": "f549d9f431d9d742cc70643594f7fa5c"
  },
  {
    "url": "assets/images/general/favicon.ico",
    "revision": "4ffc4db2ff3e1634aac903bac1d50a1e"
  },
  {
    "url": "assets/images/general/icon_close.svg",
    "revision": "fb5e02f0777cb0e83d15173079cfcc12"
  },
  {
    "url": "assets/images/general/icon_logo_binding.svg",
    "revision": "9d80f030dafa647b0f01a25cc6f06ee7"
  },
  {
    "url": "assets/images/general/icon_logo_eown.svg",
    "revision": "8a8570fe69767a07b8ec2b92340d99a3"
  },
  {
    "url": "assets/images/general/icon_logo_fb.svg",
    "revision": "3b523ed01bbb7024ffa9293054e9429a"
  },
  {
    "url": "assets/images/general/icon_logo_line.svg",
    "revision": "af5cbfa8dcbb11add1a809eb1a196177"
  },
  {
    "url": "assets/images/general/icon_menu_0_h.svg",
    "revision": "088f62bd934bf7f5018b25463855ccea"
  },
  {
    "url": "assets/images/general/icon_menu_0_p.svg",
    "revision": "b9e9c893ad53eb6e3b377d262a6ee1f0"
  },
  {
    "url": "assets/images/general/icon_menu_0.svg",
    "revision": "aee3679c733fa5e7e4ba68ed4f2f5815"
  },
  {
    "url": "assets/images/general/icon_menu_1_h.svg",
    "revision": "85ef792d9f5004d595506f8b4815e907"
  },
  {
    "url": "assets/images/general/icon_menu_1_p.svg",
    "revision": "618b8640bea20b6b372ada5abba37e9a"
  },
  {
    "url": "assets/images/general/icon_menu_1.svg",
    "revision": "6e5264b2332d2860297c4ec6d747dd89"
  },
  {
    "url": "assets/images/general/icon_menu_2_h.svg",
    "revision": "ce70e2c1d899b9c1bf83cceb3635e11f"
  },
  {
    "url": "assets/images/general/icon_menu_2_p.svg",
    "revision": "bf521e0849c07782ce3fd6d67f900e12"
  },
  {
    "url": "assets/images/general/icon_menu_2.svg",
    "revision": "830117f441e4b51f45f31509ded2f6f2"
  },
  {
    "url": "assets/images/general/icon_menu_3_h.svg",
    "revision": "f2c85a5d105c70e68f00b64e3b5c0261"
  },
  {
    "url": "assets/images/general/icon_menu_3_p.svg",
    "revision": "58c69a110265afbd90db4f4421382718"
  },
  {
    "url": "assets/images/general/icon_menu_3.svg",
    "revision": "90b91aceae276917a0c60a12d785e675"
  },
  {
    "url": "assets/images/general/icon_menu_4_h.svg",
    "revision": "a0589d8bb83535f8cb81d4ff2134f876"
  },
  {
    "url": "assets/images/general/icon_menu_4_p.svg",
    "revision": "221e591232e760ef5afa77a1bf6eb75b"
  },
  {
    "url": "assets/images/general/icon_menu_4.svg",
    "revision": "1efa7892079399aa160dc04a6ee24ea3"
  },
  {
    "url": "assets/images/general/icon_menu_5_h.svg",
    "revision": "78cd84f258cd60c65f1896d9547937f7"
  },
  {
    "url": "assets/images/general/icon_menu_5_p.svg",
    "revision": "b2746a7e0b568c3fe0d79e0e0f80d1cb"
  },
  {
    "url": "assets/images/general/icon_menu_5.svg",
    "revision": "178e07485fd60791c839e47fd3bb67f7"
  },
  {
    "url": "assets/images/general/icon_menu_6_h.svg",
    "revision": "0ab5a8b682e9c081ef7edece73aaae3a"
  },
  {
    "url": "assets/images/general/icon_menu_6_p.svg",
    "revision": "eaad14c809ac3d37b8888c82853c2f9c"
  },
  {
    "url": "assets/images/general/icon_menu_6.svg",
    "revision": "4f101b2da76824eee543b7e242de6580"
  },
  {
    "url": "assets/images/general/icon_payment_ww.svg",
    "revision": "04030c1eb8fa89e29788da32f3cce01c"
  },
  {
    "url": "assets/images/general/icon_reload_code.svg",
    "revision": "8af1c6e09e1d9c84bcee892299f6aba1"
  },
  {
    "url": "assets/images/general/icon_send_code_m.svg",
    "revision": "c1c0e58f17c878f395f698553c8492ca"
  },
  {
    "url": "assets/images/general/icon_send_code_p.svg",
    "revision": "115b9ccde52b0888d80e65981bdaf30f"
  },
  {
    "url": "assets/images/general/input_icon_checks.svg",
    "revision": "7e4a98cdc67ad757dbfcb1422aa7e51f"
  },
  {
    "url": "assets/images/general/input_icon_date.svg",
    "revision": "16ef68708348b232c5a2346335221efd"
  },
  {
    "url": "assets/images/general/input_icon_link.svg",
    "revision": "a4377954781248e3a0d62b5639ea86a0"
  },
  {
    "url": "assets/images/general/input_icon_select.svg",
    "revision": "16ef68708348b232c5a2346335221efd"
  },
  {
    "url": "assets/images/general/logo_only.svg",
    "revision": "a3211089bb6949ac7441ca7e59bd9d6d"
  },
  {
    "url": "assets/images/general/logo_p.svg",
    "revision": "978f3ae9880bf23d7effeb165c01a27a"
  },
  {
    "url": "assets/images/general/logo_sub_p.svg",
    "revision": "89c37a7391a419eaf4a29765fac69196"
  },
  {
    "url": "assets/images/general/logo_sub.svg",
    "revision": "2612364f31ac3a3ad397082e905ae25e"
  },
  {
    "url": "assets/images/general/logo.svg",
    "revision": "676e1a276f71f502bd75c8e1591269a5"
  },
  {
    "url": "assets/images/general/menu_button_show_p.svg",
    "revision": "e26fc86ea2c348949bef9371a99b33aa"
  },
  {
    "url": "assets/images/general/menu_button_show.svg",
    "revision": "c8a62db3c0bbaf4c5833ea955ed9ddaf"
  },
  {
    "url": "assets/images/general/send_code_error.svg",
    "revision": "bec51560883fa8dc24993a470f46342b"
  },
  {
    "url": "assets/images/general/send_code_success.svg",
    "revision": "fb6ece749e2de9c5d86b711c578107c2"
  },
  {
    "url": "assets/images/general/send_registration_success.svg",
    "revision": "9752bfd776edd42b255dfd6857f1f757"
  },
  {
    "url": "assets/images/index/activity_0.jpg",
    "revision": "d829342b34298db8f3a29029aaa622ca"
  },
  {
    "url": "assets/images/index/activity_1.jpg",
    "revision": "c47caddc106de1e733567d290c7e5e01"
  },
  {
    "url": "assets/images/index/activity_2.jpg",
    "revision": "23ca7c5fa49afb479cf0bbee7c77d5c4"
  },
  {
    "url": "assets/images/index/activity_bg.jpg",
    "revision": "b43120de53fa5ae0c049b69d0f600c0b"
  },
  {
    "url": "assets/images/index/banner_top_0.jpg",
    "revision": "45019e340a9a3dc18c93fa8e979097ba"
  },
  {
    "url": "assets/images/index/commodity_0.jpg",
    "revision": "9f36e0e95750f0ef819bd9fd68fb1e19"
  },
  {
    "url": "assets/images/index/commodity_1.jpg",
    "revision": "660d059a11f046f4f1ede5130d32e44a"
  },
  {
    "url": "assets/images/index/commodity_2.jpg",
    "revision": "f38dce47f56c064d07ae3efceb7ace15"
  },
  {
    "url": "assets/images/index/commodity_3.jpg",
    "revision": "744460c4564d6d56ff31d0cdd18544b4"
  },
  {
    "url": "assets/images/index/icon_commodity_d.svg",
    "revision": "7717de9974191cf586c4d193bb5dc97f"
  },
  {
    "url": "assets/images/index/icon_commodity_h.svg",
    "revision": "fa5b82ac1e3b963e4bf1486552f913d8"
  },
  {
    "url": "assets/images/index/icon_more.svg",
    "revision": "e163e7d32ad840c29cfa5335a3b09de9"
  },
  {
    "url": "assets/images/index/icon_title.svg",
    "revision": "5e00fcf94bf68992f43bfb981eee6031"
  },
  {
    "url": "assets/images/index/news_0.jpg",
    "revision": "c9683f12fc4b4579d1f47bc44ddac7b5"
  },
  {
    "url": "assets/images/index/news_1.jpg",
    "revision": "5f2e48b3d6da93cb72a7883000cd9357"
  },
  {
    "url": "assets/images/index/news_2.jpg",
    "revision": "1f2d0c58a2519b025659a7244e7ae370"
  },
  {
    "url": "assets/images/index/news_3.jpg",
    "revision": "3a0de93da2e1e6fd0d1b4d9fc6b259ca"
  },
  {
    "url": "assets/images/index/news_4.jpg",
    "revision": "e2fcdd17a286e7cdc9eee299a4385e0d"
  },
  {
    "url": "assets/images/index/quick_bar_left_default.svg",
    "revision": "188f7b21f615546760209f5858a57d7e"
  },
  {
    "url": "assets/images/index/quick_bar_left_open.svg",
    "revision": "2258dd7b03f35906e542f643d605e970"
  },
  {
    "url": "assets/images/index/quick_bar_right_default.svg",
    "revision": "a67d8b2b1d232c6e817c5db74146bb88"
  },
  {
    "url": "assets/images/index/quick_bar_right_open.svg",
    "revision": "b0bfb0718cb42936b996642dd4b38224"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_0.svg",
    "revision": "5ff7f2414429692edcaa08ccb995379a"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_1.svg",
    "revision": "85af65fc0dcf2c1d10d12586de7fe86f"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_2.svg",
    "revision": "e34d2078ba875faf6e62daacc97ac1d3"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_3.svg",
    "revision": "ae84232561b9f14b07a7e47d08fd8ceb"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_4.svg",
    "revision": "abea72dcd2038e00e010198f7720c24a"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_5.svg",
    "revision": "f398fe8a3f7c9017a7dafa57095a6fe6"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_6.svg",
    "revision": "bd367e2cd95fac7728518733ef40d7a7"
  },
  {
    "url": "assets/images/index/quick_key_icon_d_7.svg",
    "revision": "4bc514422c6d2d2f8484663f86c6d393"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_0.svg",
    "revision": "a0017358c3f64548bb3fd546fad7c740"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_1.svg",
    "revision": "db7509a5c6c2af2717e55f2dc9d4ff6b"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_2.svg",
    "revision": "2c8cbd782c922eadf7e63f0364afe00b"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_3.svg",
    "revision": "2f0627ac6d434b2456db687164ee1577"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_4.svg",
    "revision": "d01d2652b8f87b518ae1dac1b9b45a94"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_5.svg",
    "revision": "99875595e0e5d67f7f85e2127b610f06"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_6.svg",
    "revision": "1028e7bc45857b054b13f6a7626e2cf8"
  },
  {
    "url": "assets/images/index/quick_key_icon_m_7.svg",
    "revision": "d08adc2bc68f8644cab3be0dd43eaf02"
  },
  {
    "url": "assets/js/IndexedDB_fail.js",
    "revision": "1ad356a3de29009db99caffbf99e8828"
  },
  {
    "url": "assets/js/IndexedDB_origin.js",
    "revision": "a4eab2f988d3e6f05fb2cdc8596e76bb"
  },
  {
    "url": "assets/js/IndexedDB_test.js",
    "revision": "9e06e1907881ece7252d3a0de9161337"
  },
  {
    "url": "assets/js/IndexedDB.js",
    "revision": "3eab4f3d72e2cdf4f4ab9e91c54dda48"
  },
  {
    "url": "assets/js/type.js",
    "revision": "56aa55f14a8577d225240f7589039b8b"
  },
  {
    "url": "assets/plugin/bootstrap/bootstrap-grid-customizing.css",
    "revision": "7642eb2a373f669e9726ed61a7888cee"
  },
  {
    "url": "assets/plugin/bootstrap/bootstrap.css",
    "revision": "d5fbcd8b4b9fafda35f29cb287260fe3"
  },
  {
    "url": "assets/plugin/bootstrap/bootstrap.min.js",
    "revision": "0a958254db529f99f475080fe2a6dcdb"
  },
  {
    "url": "assets/plugin/datepicker_globe_tw.js",
    "revision": "d6e9fa39845e35c7773bb0d07a3e0cf0"
  },
  {
    "url": "assets/plugin/datepicker_tw.js",
    "revision": "434a38e7b6453413fe5bbed59d067e66"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_444444_256x240.png",
    "revision": "79b89cc07096d272b27edefcce2da120"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_555555_256x240.png",
    "revision": "00dd0ec0a16a1085e714c7906ff8fb06"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_777620_256x240.png",
    "revision": "4e7e3e142f3939883cd0a7e00cabdaef"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_777777_256x240.png",
    "revision": "fef4dc5a79a6117235d7ed374987a212"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_cc0000_256x240.png",
    "revision": "2077b5eab79cbbc34dc270e93bf36bbc"
  },
  {
    "url": "assets/plugin/jquery_ui/images/ui-icons_ffffff_256x240.png",
    "revision": "a90930462f29cf706358262d88f1b626"
  },
  {
    "url": "assets/plugin/jquery_ui/jquery-ui.min.css",
    "revision": "215077014154308be415e1181a14646f"
  },
  {
    "url": "assets/plugin/jquery_ui/jquery-ui.min.js",
    "revision": "bcad1d60cf9cb3bb180a1a8339ed5529"
  },
  {
    "url": "assets/plugin/jquery.min.js",
    "revision": "5b5a269bd363e0886c17d855c2aab241"
  },
  {
    "url": "assets/plugin/lazyload2.min.js",
    "revision": "b447c8b6b508f8a0cb1b16ddd18798b8"
  },
  {
    "url": "assets/plugin/moment.js",
    "revision": "805d0c9742a3eb3a898e05328485d39c"
  },
  {
    "url": "assets/plugin/plumen.js",
    "revision": "b0725d7266068197bb8e07278f6916d7"
  },
  {
    "url": "assets/plugin/swiper.min.css",
    "revision": "a14f9e37faab8461a617c4dc3901b2f7"
  },
  {
    "url": "assets/plugin/swiper.min.js",
    "revision": "f73e23ebde1624296c284cbfdca7c615"
  },
  {
    "url": "car_step_1.html",
    "revision": "a06bbb1031d2e2c55ef8607d0de8833a"
  },
  {
    "url": "car_step_2.html",
    "revision": "40aa4eeb927de8d2b68f97ba720a30d2"
  },
  {
    "url": "car_step_5.html",
    "revision": "67832f47f3582b7619f10f62674fa596"
  },
  {
    "url": "car_step_6.html",
    "revision": "5e11cba38ef05e8a504a9a9276517d66"
  },
  {
    "url": "index.html",
    "revision": "b5f4bf7e3f6008f39de0980ba790fde0"
  },
  {
    "url": "index.php",
    "revision": "d95cd2b3fde5d219cced7631cb533534"
  },
  {
    "url": "IndexedDB_origin.html",
    "revision": "e418e81ef973d0a0712734b085602ef6"
  },
  {
    "url": "IndexedDB_test.html",
    "revision": "87696616afaf8f1910bca646f88e6c89"
  },
  {
    "url": "login.html",
    "revision": "f9e219146eaa184cf59de88693397ee4"
  },
  {
    "url": "manifest.json",
    "revision": "e6a2075a965d5a0c2469b629befccf53"
  },
  {
    "url": "member_general_registered.html",
    "revision": "028e58ed8b45a9f092ca3023131ee231"
  },
  {
    "url": "member_otp_maintenance.html",
    "revision": "49527209dab3087917a319d28cde4c09"
  },
  {
    "url": "package-lock.json",
    "revision": "84aa831e2bc5d6dfd621f74a72cb1dcf"
  },
  {
    "url": "page_activity_1.html",
    "revision": "5a6038a9c7d27c687bf09b62564b3ced"
  },
  {
    "url": "test.pdf",
    "revision": "846d3805522e0391a4aadd40b4ae5f77"
  },
  {
    "url": "type_car.html",
    "revision": "b197d2ad609f0218627e2bd43deb236a"
  },
  {
    "url": "type_input.html",
    "revision": "9ef917a2676d2337ac47263d320c6f7b"
  },
  {
    "url": "type_table.html",
    "revision": "6e6ba714210b5e8c7922b14a37afe657"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
