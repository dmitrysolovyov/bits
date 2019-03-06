var date_array = ['20-JUN-19', '3-Mar-19'];
function transformDate(date){
    var a = date.split('-');
    var day = a[0], month = a[1], year = a[2];
    function transformDay(d){
        var day = (
            d.length == 1 ? '0'+d : d
        );
        return day;
    }
    function transformMonth(m){
        m = m.toLowerCase();
        var month = (
            m == 'jan' ? '01' :
            m == 'feb' ? '02' :
            m == 'mar' ? '03' :
            m == 'apr' ? '04' :
            m == 'may' ? '05' :
            m == 'jun' ? '06' :
            m == 'jul' ? '07' :
            m == 'aug' ? '08' :
            m == 'sep' ? '09' :
            m == 'oct' ? '10' :
            m == 'nov' ? '11' :
            m == 'dec' ? '12' :
            null
        );
        return month;
    }
    var transformed = transformDay(day) +'-'+ transformMonth(month) +'-'+ '20'+year;
    return transformed;
}
date_array.forEach(element => {
    var newDate = transformDate(element);
    console.warn('Date is: '+ newDate);
});
