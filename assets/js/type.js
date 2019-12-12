$(document).ready(function() {


	/* 選單 hover */
	$(".menu_layer .item_title").hover(
		function () {
			$(this).children().children(".icon_menu").hide();
			$(this).children().children(".icon_menu.off").show();
			$(this).children().children("span").addClass("action");
		},
		function () {
			$(this).children().children(".icon_menu").show();
			$(this).children().children(".icon_menu.off").hide();
			$(this).children().children("span").removeClass("action");
		}
	);


	/* 停用行動版放大功能 */
	window.onload=function () {
		document.addEventListener('touchstart',function (event) {
			if(event.touches.length>1){
				event.preventDefault();
			}
		});
		var lastTouchEnd=0;
		document.addEventListener('touchend',function (event) {
			var now=(new Date()).getTime();
			if(now-lastTouchEnd<=300){
				event.preventDefault();
			}
			lastTouchEnd=now;
		},false);
		document.addEventListener('gesturestart', function (event) {
			event.preventDefault();
		});
	}

	/* 輪播事件：Swiper 大輪播 */
	var swiper = new Swiper('.swiper_box.style_full .swiper-container', {

		slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,

		effect: "slide",
		direction: "horizontal",
		mousewheel: false,
		centeredSlides: true,
		grabCursor: true,
		loop: true,
		loopFillGroupWithBlank: true,

		speed: 600,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		autoplay: true,

		lazy: {
			loadPrevNext: true,
		},
		lazy: true,

		/* 分頁點 */
		pagination: {
			el: '.swiper_box.style_full .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

	});


	/* 輪播事件：Swiper 3D封面流 */
	var swiper = new Swiper('.style_3d_coverflow .swiper-container', {
		slidesPerView: 3,
		centeredSlides: false,
		grabCursor: true,
		loop: true,
		loopFillGroupWithBlank: true,

		speed: 600,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		autoplay: true,

		/* 延遲加載 */
		lazy: {
			loadPrevNext: true,
		},
		lazy: true,

		effect: 'coverflow',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 200,
			modifier: 1,
			slideShadows : true,
		},
		pagination: {
			el: '.style_3d_coverflow .swiper-pagination',
			clickable: true,
		},
	});


	/* 輪播事件：Swiper 跑馬燈 */
	var swiper = new Swiper('.swiper_box.style_arquee .swiper-container', {
		slidesPerView: '1',
		spaceBetween: 30,

		centeredSlides: false,
		grabCursor: true,
		loop: true,
		loopFillGroupWithBlank: true,

		speed: 3000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		autoplay: true,

	});


	/* 首頁 行動版BAR */
	$(".quick_key_bar .bt_action.action_left").click(function(){
		$(".quick_key_bar .left_default").toggle(0);
		$(".quick_key_bar .left_open").toggle(0);
		$(".index_news_box").slideToggle(400);
		$(".quick_key_bar .right_default").show();
		$(".quick_key_bar .right_open").hide();
		$(".index_quick_key_box").hide();
	});
	$(".quick_key_bar .bt_action.action_right").click(function(){
		$(".quick_key_bar .right_default").toggle(0);
		$(".quick_key_bar .right_open").toggle(0);
		$(".index_quick_key_box").slideToggle(400);
		$(".quick_key_bar .left_default").show();
		$(".quick_key_bar .left_open").hide();
		$(".index_news_box").hide();
	});


	/* 首頁 快速鍵 */
	$(".index_quick_key_box .item").hover(
		function () {
			$(this).addClass("action");
		},
		function () {
			$(this).removeClass("action");
		}
	);


	/* 首頁 線上投保商品*/
	$(".index_commodity_box .item").hover(
		function () {
			$(this).addClass("action");
			$(this).children().children().children(".description_text").stop(true,false);
			$(this).children().children().children(".description_text").delay(300).slideDown(400);
		},
		function () {
			$(this).removeClass("action");
			$(this).children().children().children(".description_text").stop(true,false);
			$(this).children().children().children(".description_text").delay(300).slideUp(400);
		}
	);

	/* 首頁 時事分享*/
	$(".index_news_box .item").hover(
		function () {
			$(this).addClass("action");
			$(this).children().children().children(".description_text").stop(true,false);
			$(this).children().children().children(".description_text").delay(300).slideDown(400);
		},
		function () {
			$(this).removeClass("action");
			$(this).children().children().children(".description_text").stop(true,false);
			$(this).children().children().children(".description_text").delay(300).slideUp(400);
		}
	);


	/* 標籤切換表格 */
	$(".tag_action_box .tag").click(function(){
		$(".tag_action_box .tag_content").hide();
	});
	$(".tag_action_box .tag.no1").click(function(){
		$(".tag_action_box .tag_content.no1").show();
	});
	$(".tag_action_box .tag.no2").click(function(){
		$(".tag_action_box .tag_content.no2").show();
	});


	/* 全局日期選擇器：jQuery 點選圖片連動日期選擇框*/
	$(".img_btn").click(function() {
		$(this).prev().focus();
		$(this).prev().addClass("color_change");
	});

	/* 全局日期選擇器：文字顏色變更 */
	$(".data_time").click(function() {
		$(this).addClass("color_change");
	});
	$(".time_str").click(function() {
		$(this).addClass("color_change");
	});
	$(".time_end").click(function() {
		$(this).addClass("color_change");
	});
	$(".date_interval").click(function() {
		$(this).addClass("color_change");
	});

	/* input事件：日期選擇器(支援ie) 全局設置日期格式 */
	$.datepicker.setDefaults({ dateFormat: 'yy/mm/dd' });

	/* 全局日期選擇器：jQuery 預設框架(支援ie)*/
	$(".time_picker").datepicker();


	/*全局輸入框：搜尋自動完成*/
	$(".selector_key").wxSelect({
		data:[
			{"name":"wwunion.com","value":10},
			{"name":"hotmail.com","value":11},
			{"name":"gmail.com","value":12}
		]
	});


	/* 全局輸入框：select 預設框架 */
	$("select").on('change', function() {
		if ($(this).val() !== "0") {
			$(this).addClass("color_change");
		} else {
			$(this).removeClass("color_change");
		}
	});


	/* radio 單選觸發事件：身份別 */
	$(".identity").click(function() {
		var isPermanentValue = $('input[name="identity"]:checked ').val();
		if (isPermanentValue == 1) {
			$(".taiwanese").show();
			$(".foreign").hide();
			$(".legal_person").hide();
		}
		if (isPermanentValue == 2) {
			$(".taiwanese").hide();
			$(".foreign").show();
			$(".legal_person").hide();
		}
		if (isPermanentValue == 3) {
			$(".taiwanese").hide();
			$(".foreign").hide();
			$(".legal_person").show();
		}
	})


	//信用卡 連續輸入 條件：字元數
	$("#continuous_input_01_1").keyup(function() {
		if ($(this).val().length == $(this).attr("maxlength"))
			$("#continuous_input_01_2").focus();
	});
	$("#continuous_input_01_2").keyup(function() {
		if ($(this).val().length == $(this).attr("maxlength"))
			$("#continuous_input_01_3").focus();
	});
	$("#continuous_input_01_3").keyup(function() {
		if ($(this).val().length == $(this).attr("maxlength"))
			$("#continuous_input_01_4").focus();
	});


	/* 車險收合資訊 */
	$(".car_input_box .bt_collapse").click(function(){
		$(this).parents().next(".input_type").slideToggle(400);
		$(this).parents(".car_input_box").toggleClass("action");;
		$(this).parents(".col_title_box").toggleClass("action");;
	});


});
