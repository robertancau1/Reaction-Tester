var start = new Date().getTime();
var counter = 0;
var sum = 0;
var average = 0;
var fastestclick = 10000000000;
var slowestclick = 0;
function DisplayShape(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    var heightAndWidth = 0;
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (Math.random() >= 0.5)
    {
        document.getElementById("shape").style.borderRadius = 50 + "%";
    }
    else
    {
        document.getElementById("shape").style.borderRadius = 0 + "%";
    }
    heightAndWidth = document.getElementById("shape").style.width = (Math.random() * 150 ) + 20 + "px";
    document.getElementById("shape").style.height = heightAndWidth;
    document.getElementById("shape").style.top = (Math.random() * 700) + "px";
    document.getElementById("shape").style.left = (Math.random() * 1500) + "px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}
setTimeout(DisplayShape,(Math.random() * 2000))
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var lastclick = (end - start) / 1000;
    sum+=lastclick;
    counter++;
    average = sum/counter;
    if (lastclick < fastestclick)
    {
        fastestclick = lastclick;
    }
    if (lastclick > slowestclick)
    {
        slowestclick = lastclick;
    }
    document.getElementById("timespent").innerHTML = sum.toPrecision(3);
    document.getElementById("slowest").innerHTML = slowestclick.toPrecision(3);
    document.getElementById("fastest").innerHTML = fastestclick.toPrecision(3);
    document.getElementById("average").innerHTML = average.toPrecision(3);
    document.getElementById("lastclick").innerHTML = lastclick;
    setTimeout(DisplayShape,(Math.random() * 2000))
}
