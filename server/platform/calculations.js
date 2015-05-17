

exports.annualizeReturn = function(date1, date2, periodReturn) {

    var millisInAYear = 86400000
    var daysInYear = 365

    var days = Math.floor(( Date.parse(date1) - Date.parse(date2) ) / millisInAYear);
    var days = 365

    console.log(periodReturn)

    var annualizedReturn = (Math.pow((1+periodReturn/100), (days/daysInYear)) -1) * 100;

    console.log((1+periodReturn/100), days/daysInYear)

    return annualizedReturn;
}