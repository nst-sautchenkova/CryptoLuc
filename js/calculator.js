////////////////////////
//calculator-tab-1
///////////////////////

//choose-currency
$(document).on("ready", function () {
    $("#calculator-tab-1 ul.currency-block li").click(function () {
        $("#calculator-tab-1 ul.currency-block li").removeClass("active");
		$(this).addClass("active");
		var id  = $(this).attr('id');
		
		var el = document.getElementById('rezult-choose1');
		el.value = id;
		
		var valcurrency = document.getElementById('value-1');
		valcurrency.innerHTML = id;
		
		
    });	
    
});

//RANGE
var $range = $("#calculator-tab-1 .js-range-slider"),
    $input = $("#calculator-tab-1 .js-input"),
    instance,
    min = 10,
    max = 100000;

//
//Параметры для подсчета итого
//
var par1 = 2;
var par2 = 4;	
var total1 = document.getElementById('in-total-1');
//End

$range.ionRangeSlider({
    hide_min_max: true,
    grid: true,
	type: "single",
    min: min,
    max: max,
    from: 10,
            
    onStart: function (data) {
        $input.prop("value", data.from);
    },
    onChange: function (data) {
        $input.prop("value", data.from);
		
		//изменение итого при ползунке
		total1.innerHTML = par1 + par2 + data.from;
		//
    }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        from: val
    });
	
});




////////////////////////
//calculator-tab-2
///////////////////////

//choose-currency
$(document).on("ready", function () {
    $("#calculator-tab-2 ul.currency-block li").click(function () {
        $("#calculator-tab-2 ul.currency-block li").removeClass("active");
		$(this).addClass("active");
		var id  = $(this).attr('id');
		
		var el2 = document.getElementById('rezult-choose2');
		el2.value = id;
		
		var valcurrency2 = document.getElementById('value-2');
		valcurrency2.innerHTML = id;
    });	
    
});

//RANGE
var $range2 = $("#calculator-tab-2 .js-range-slider"),
    $input2 = $("#calculator-tab-2 .js-input"),
    instance2,
    min = 10,
    max = 200000;
	
//
//Параметры для подсчета итого
//
var par3 = 5;
var par4 = 99;	
var total2 = document.getElementById('in-total-2');
//End

$range2.ionRangeSlider({
    hide_min_max: true,
    grid: true,
	type: "single",
    min: min,
    max: max,
    from: 10,
            
    onStart: function (data) {
        $input2.prop("value", data.from);
    },
    onChange: function (data) {
        $input2.prop("value", data.from);
		
		//изменение итого при ползунке
		total2.innerHTML = par3 + par4 + data.from;
		//
    }
});

instance2 = $range2.data("ionRangeSlider");

$input2.on("change keyup", function () {
    var val2 = $(this).prop("value");
    
    // validate
    if (val2 < min) {
        val2 = min;
    } else if (val2 > max) {
        val2 = max;
    }
    
    instance2.update({
        from: val2
    });
});

////////////////////////
//calculator-tab-3
///////////////////////

//choose-currency
$(document).on("ready", function () {
    $("#calculator-tab-3 ul.currency-block li").click(function () {
        $("#calculator-tab-3 ul.currency-block li").removeClass("active");
		$(this).addClass("active");
		var id  = $(this).attr('id');
		
		var el3 = document.getElementById('rezult-choose3');
		el3.value = id;
		
		var valcurrency3 = document.getElementById('value-3');
		valcurrency3.innerHTML = id;
    });	
    
});

//RANGE
var $range3 = $("#calculator-tab-3 .js-range-slider"),
    $input3 = $("#calculator-tab-3 .js-input"),
    instance3,
    min = 10,
    max = 300000;
	
//
//Параметры для подсчета итого
//
var par5 = 5;
var par6 = 99;	
var total3 = document.getElementById('in-total-3');
//End

$range3.ionRangeSlider({
    hide_min_max: true,
    grid: true,
	type: "single",
    min: min,
    max: max,
    from: 10,
            
    onStart: function (data) {
        $input3.prop("value", data.from);
    },
    onChange: function (data) {
        $input3.prop("value", data.from);
		
		//изменение итого при ползунке
		total3.innerHTML = par5 + par6 + data.from;
		//
    }
});

instance3 = $range3.data("ionRangeSlider");

$input3.on("change keyup", function () {
    var val3 = $(this).prop("value");
    
    // validate
    if (val3 < min) {
        val3 = min;
    } else if (val3 > max) {
        val3 = max;
    }
    
    instance3.update({
        from: val3
    });
});


////////////////////////
//calculator-tab-4
///////////////////////

//choose-currency
$(document).on("ready", function () {
    $("#calculator-tab-4 ul.currency-block li").click(function () {
        $("#calculator-tab-4 ul.currency-block li").removeClass("active");
		$(this).addClass("active");
		var id  = $(this).attr('id');
		
		var el4 = document.getElementById('rezult-choose4');
		el4.value = id;
		
		var valcurrency4 = document.getElementById('value-4');
		valcurrency4.innerHTML = id;
    });	
    
});

//RANGE
var $range4 = $("#calculator-tab-4 .js-range-slider"),
    $input4 = $("#calculator-tab-4 .js-input"),
    instance4,
    min = 10,
    max = 400000;
	
//
//Параметры для подсчета итого
//
var par7 = 5;
var par8 = 99;	
var total4 = document.getElementById('in-total-4');
//End

$range4.ionRangeSlider({
    hide_min_max: true,
    grid: true,
	type: "single",
    min: min,
    max: max,
    from: 10,
            
    onStart: function (data) {
        $input4.prop("value", data.from);
    },
    onChange: function (data) {
        $input4.prop("value", data.from);
		
		//изменение итого при ползунке
		total4.innerHTML = par7 + par8 + data.from;
		//
    }
});

instance4 = $range4.data("ionRangeSlider");

$input4.on("change keyup", function () {
    var val4 = $(this).prop("value");
    
    // validate
    if (val4 < min) {
        val4 = min;
    } else if (val4 > max) {
        val4 = max;
    }
    
    instance4.update({
        from: val4
    });
});




////////////////////////
//settings
///////////////////////

//choose-currency

//RANGE
var $ranges = $("#settings .js-range-slider"),
    $inputs = $("#settings .js-input"),
    instances,
    min = 0,
    max = 100;


$ranges.ionRangeSlider({
    hide_min_max: true,
    grid: true,
	type: "single",
    min: min,
    max: max,
    from: 0,
            
    onStart: function (data) {
        $inputs.prop("value", data.from);
    },
    onChange: function (data) {
        $inputs.prop("value", data.from);
    }
});

instances = $ranges.data("ionRangeSlider");

$inputs.on("change keyup", function () {
    var vals = $(this).prop("value");
    
    // validate
    if (vals < min) {
        vals = min;
    } else if (vals > max) {
        vals = max;
    }
    
    instances.update({
        from: vals
    });
	
});




