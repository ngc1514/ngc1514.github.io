function displayMessage()
{
    var today1 = new Date();
    var hour = today1.getHours();

    if (hour >= 23 && hour <= 4)
    {
       var msg = 'It&#39;s late. ';
       document.getElementById("msg").innerHTML = msg;
    }
    if (hour > 5 && hour < 12)
    {
    var msg = 'Good Morning. ';
    document.getElementById("msg").innerHTML = msg;
    }	
    if (hour >= 12 && hour <= 20)
    {
        var msg = 'Work Blyat';
        document.getElementById("msg").innerHTML = msg;
    }   	
}