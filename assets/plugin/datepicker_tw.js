// Code goes here


var chineseSetting = {
	_phoenixGenerateMonthYearHeader: $.datepicker._generateMonthYearHeader,

	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
		secondary, monthNames, monthNamesShort) {
		var result = $($.datepicker._phoenixGenerateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort));
		result.children("select.ui-datepicker-year").children().each(function() {
			$(this).text('民國' + ($(this).text() - 1911) + '年');
		});
		if (inst.yearshtml) {
			var origyearshtml = inst.yearshtml;
			setTimeout(function() {
				//assure that inst.yearshtml didn't change.
				if (origyearshtml === inst.yearshtml) {
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
					inst.dpDiv.find('select.ui-datepicker-year').children().each(function() {
						$(this).text('民國' + ($(this).text() - 1911) + '年');
					});
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
		//return result.html();
		return $("<div class='ui-datepicker-title'></div>").append(result.clone()).html();
	},

	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
				this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return (date.getFullYear() - 1911) + "/" +
			(date.getMonth() <= 8 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" +
			(date.getDate() <= 9 ? "0" + date.getDate() : date.getDate());
	},

};

var Cwww = {
	_phoenixGenerateMonthYearHeader: $.datepicker._generateMonthYearHeader,

	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
		secondary, monthNames, monthNamesShort) {
		var result = $($.datepicker._phoenixGenerateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort));
		result.children("select.ui-datepicker-year").children().each(function() {
			$(this).text('民國' + ($(this).text() - 1911) + '年');
		});
		if (inst.yearshtml) {
			var origyearshtml = inst.yearshtml;
			setTimeout(function() {
				//assure that inst.yearshtml didn't change.
				if (origyearshtml === inst.yearshtml) {
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
					inst.dpDiv.find('select.ui-datepicker-year').children().each(function() {
						$(this).text('民國' + ($(this).text() - 1911) + '年');
					});
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
		//return result.html();
		return $("<div class='ui-datepicker-title'></div>").append(result.clone()).html();
	},

	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
				this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return (date.getFullYear() - 0) + "/" +
			(date.getMonth() <= 8 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" +
			(date.getDate() <= 9 ? "0" + date.getDate() : date.getDate());
	},

};

$(function() {

	$.datepicker.regional['zh-TW'] = {
		closeText: '關閉',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: '今天',
		monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
			'七月', '八月', '九月', '十月', '十一月', '十二月'
		],
		monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月',
			'七月', '八月', '九月', '十月', '十一月', '十二月'
		],
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
		weekHeader: '周',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true
	};
	$.datepicker.setDefaults($.datepicker.regional['zh-TW']);

	ChineseDatePicker();
	ChineseDatePicker_www();

});

function ChineseDatePicker() {

	$.extend($.datepicker, chineseSetting);

	$(".date_from_tw_0").datepicker({
		changeMonth: true,
		changeYear: true,
		/*onSelect: function(selectedDate, input) {
			$(".date_to_tw_0").datepicker('option', 'minDate', $.datepicker._getDate(input));
		},*/
	});

}

function ChineseDatePicker_www() {

	$.extend($.datepicker, Cwww);

	$(".date_from_western").datepicker({
	});

}

