function getWeek(year,month,day){

    month += 1; //use 1-12
    var a = Math.floor((14-(month))/12);
    var y = year+4800-a;
    var m = (month)+(12*a)-3;
    var jd = day + Math.floor(((153*m)+2)/5) + 
                 (365*y) + Math.floor(y/4) - Math.floor(y/100) + 
                 Math.floor(y/400) - 32045;      // (gregorian calendar)
    //var jd = (day+1)+Math.Round(((153*m)+2)/5)+(365+y) + 
    //                 Math.round(y/4)-32083;    // (julian calendar)
    
    //now calc weeknumber according to JD
    var d4 = (jd+31741-(jd%7))%146097%36524%1461;
    var L = Math.floor(d4/1460);
    var d1 = ((d4-L)%365)+L;
    NumberOfWeek = Math.floor(d1/7) + 1;
    return NumberOfWeek; 
    console.log(NumberOfWeek);       
}
