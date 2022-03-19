const ThreeMonthPersent = 0.2;
const ThreeMonthPersentValue = "20%";

const SixMonthsPersentSpeedy = 0.22;
const SixMonthsPersentSpeedyTitle = "22%";
const SixMonthsPersentReuse = 0.2;
const SixMonthsPersentReuseTitle = "20%";
const NineMonthsPersentSpeedy = 0.23;
const NineMonthsPersentSpeedyTitle = "23%";
const OneYearPersentSpeedy = 0.24;
const OneYearPersentSpeedyTitle = "24%";
const OneYearPersentReuse = 0.22;
const OneYearPersentReuseTitle = "22%";
const OneYearHalfPersentSpeedy = 0.18;
const OneYearHalfPersentSpeedyTitle = "18%";
const OneYearHalfPersentReuse = 0.15;
const OneYearHalfPersentReuseTitle = "15%";
const TwoYearPersentSpeedy = 0.15;
const TwoYearPersentSpeedyTitle = "15%";
const TwoYearPersentReuse = 0.1;
const TwoYearPersentReuseTitle = "10%";


range = $('.range-slider > .input-range');
value = $('.range-slider > .range-value');
    
value.val(range.attr('value'));

range.on('input', function(){
  	//monparent=$(this).parent();
  monparent=this.parentNode;
 
  value=$(monparent).find('.range-value');
    $(value).val(this.value);
});

value.on('input', function(){
    monparent=this.parentNode;
  	range=$(monparent).find('.input-range');
    $(range).val(this.value);
 
});



document.getElementById('plata').innerHTML = "0 руб.";

function penc(){
  document.getElementById('stavka').innerHTML = "14.25%";
  var prc = 0.1425;
  calc();
}

function optima(){
  document.getElementById('stavka').innerHTML = "15%";
  var prc = 0.15;
  calc();
}


function activ(mes){


  if (mes == 3) {$('#m3').attr("checked", true);}
  if (mes == 6) {$('#m6').attr("checked", true);}
  if (mes == 12) {$('#m12').attr("checked", true);}
  if (mes == 9) {$('#m9').attr("checked", true);}
  if (mes == 18) {$('#1.5y').attr("checked", true);}
  if (mes == 24) {$('#2y').attr("checked", true);}
}

function calc(){
  var summa = document.getElementById('sum').value;

  if($('#m3').prop('checked')) {
    $('#p2').attr("disabled", true);  // если не нужно отключать для пополняемого, просто выкосить
    $('#p2').attr("checked", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = ThreeMonthPersentValue;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, ThreeMonthPersent, 3);

    return;
   }
  }

  
  if($('#m6').prop('checked')) {
    $('#p2').attr("disabled", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = SixMonthsPersentSpeedyTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, SixMonthsPersentSpeedy, 6);
    
    return;
   }

   if($('#p2').prop('checked')){
    document.getElementById('stavka').innerHTML = SixMonthsPersentReuseTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, SixMonthsPersentReuse, 6);
    
    return;
   }
  }
  
  if($('#m9').prop('checked')) {
     $('#p2').attr("disabled", true);  // если не нужно отключать для пополняемого, просто выкосить
    $('#p2').attr("checked", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = NineMonthsPersentSpeedyTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, NineMonthsPersentSpeedy, 9);
    
    return;
   }
  }
  
  if($('#m12').prop('checked')) {
    $('#p2').attr("disabled", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = OneYearPersentSpeedyTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, OneYearPersentSpeedy, 12);
    
    return;
   }

   if($('#p2').prop('checked')){
    document.getElementById('stavka').innerHTML = OneYearPersentReuseTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, OneYearPersentReuse, 12);
    
    return;
   }
  }
  
  if($('#m18').prop('checked')) {
    $('#p2').attr("disabled", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = OneYearHalfPersentSpeedyTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, OneYearHalfPersentSpeedy, 18);
    
    return;
   }

   if($('#p2').prop('checked')){
    document.getElementById('stavka').innerHTML = OneYearHalfPersentReuseTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, OneYearHalfPersentReuse, 18);
    
    return;
   }
  }
  
  if($('#m24').prop('checked')) {
    $('#p2').attr("disabled", false);

   if($('#p1').prop('checked')){
    document.getElementById('stavka').innerHTML = TwoYearPersentSpeedyTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, TwoYearPersentSpeedy, 24);
    
    return;
   }

   if($('#p2').prop('checked')){
    document.getElementById('stavka').innerHTML = TwoYearPersentReuseTitle;
    document.getElementById('plata').innerHTML = getSummaryMoney(summa, TwoYearPersentReuse, 24);
    
    return;
   }
  }
}



function getSummaryMoney(money, percentPerYear, countMonths) {
  monthPersent = percentPerYear / 12;

  for (let i = 0; i < countMonths; i++) {
    money = money * (1 + monthPersent);
  }

  return Math.trunc(money);
}