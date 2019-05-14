function displayMessage()
{
    var today1 = new Date();
    var hour = today1.getHours();

    if (hour >= 0 && hour <= 7)
    {
       var msg = 'Hmmmm.. It&#39;s late. Time for bed. ';
       document.getElementById("msg").innerHTML = msg;
    }
    if (hour >= 5 && hour < 8)
    {
    var msg = 'Good Morning! Time to get up';
    document.getElementById("msg").innerHTML = msg;
    }	
    if (hour >= 8 && hour <= 17)
    {
        var msg = 'Work.. Work... Work...';
        document.getElementById("msg").innerHTML = msg;
    }   	
}