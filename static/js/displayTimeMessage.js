function displayMessage()
{
    var today1 = new Date();
    var hour = today1.getHours();

    if (hour >= 23 && hour <= 5)
    {
       var msg = 'yOu sHoUld gO To bEd. ';
       document.getElementById("msg").innerHTML = msg;
    }
    if (hour > 5 && hour < 12)
    {
        var msg = 'Good Morning. ';
        document.getElementById("msg").innerHTML = msg;
    }	
    if (hour >= 12 && hour <= 20)
    {
        var msg = "Enough procrasting. Let's go. ";
        document.getElementById("msg").innerHTML = msg;
    }   	
}