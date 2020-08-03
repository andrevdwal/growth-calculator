function calculate() {

    start = +document.getElementById("start").value
    end = +document.getElementById("end").value
    period = +document.getElementById("period").value

    growth = calculateGrowth(start, end)
    averageGrowth = calculateAverageGrowth(start, end, period)
    compoundGrowth = calculateCompoundGrowth(start, end, period)

    // display values in console
    console.log("-- calculation --")
    console.log(start, end, period, growth)
    console.log(start, end, period, averageGrowth)
    console.log(start, end, period, compoundGrowth)
    
    // update ui
    document.getElementById("growth-perc").innerText = formatForDisplay(growth)
    document.getElementById("avg-growth-perc").innerText = formatForDisplay(averageGrowth)
    document.getElementById("cmp-growth-perc").innerText = formatForDisplay(compoundGrowth)

    document.getElementById("results").style.display = null
}

function calculateGrowth(start, end) {
    if(end == 0)
        return 0
    
    return (end/start) - 1
}

function calculateAverageGrowth(start, end, period) {
    growth = calculateGrowth(start, end)
    return growth / period
}

function calculateCompoundGrowth(start, end, period) {
    if(end == 0 || period == 0)
        return 0

    exp = 1/period
    return Math.pow(end/start, exp) -1
}

function formatForDisplay(rate) {
    return (Math.round(rate * 10000) / 100).toFixed(2) + "%"
}