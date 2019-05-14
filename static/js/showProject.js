function restyle(strStyle)
{
	var linkList = document.getElementsByTagName('a');
	var heads = document.getElementsByTagName('h1');

	if(strStyle === 'style1')
	{
		document.body.style.background = "url(https://shesky17.github.io/static/bkg_img/backgroundMain.jpg)";
		document.body.style.backgroundSize = "cover";

		document.getElementById('credit').innerHTML = "<center><font size='4' color='white'>Background credit to: <br> Leung Jonathan. 'Amazing Summer Night.' <i>Flickr</i>, 24 Aug. 2014, https://www.flickr.com/photos/jonathan-leung/15425904419/.</font></center>";
		
		for (var i=0; i<linkList.length; i++)
		{
			linkList[i].style.color = "white";
		}
		for (var i=0; i<heads.length; i++)
		{
			heads[i].style.color = "white";
		}
	}
	else if(strStyle === 'dark')
	{
		document.body.style.background = "black";
		document.getElementById('credit').innerHTML = '';
		
		for (var i=0; i<linkList.length; i++)
		{
			linkList[i].style.color = "#00FF00";
		}
		for (var i=0; i<heads.length; i++)
		{
			heads[i].style.color = "#00FF00";
		}
	}
	else if(strStyle === 'changeBackground1')
	{
		document.body.style.background = "url(https://shesky17.github.io/static/bkg_img/background2.jpg)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('credit').innerHTML = '';

		for (var i=0; i<linkList.length; i++)
		{
			linkList[i].style.color = "white";
		}
		for (var i=0; i<heads.length; i++)
		{
			heads[i].style.color = "white";
		}
	}
	else if(strStyle === 'changeBackground2')
	{
		document.body.style.background = "url(https://shesky17.github.io/static/bkg_img/background3.jpg)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('credit').innerHTML = '';

		for (var i=0; i<linkList.length; i++)
		{
			linkList[i].style.color = "white";
		}
		for (var i=0; i<heads.length; i++)
		{
			heads[i].style.color = "white";
		}
	}
}