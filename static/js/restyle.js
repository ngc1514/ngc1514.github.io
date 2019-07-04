function restyle(strStyle)
{
	var font = document.getElementsByTagName('font');
	var headers = document.getElementsByTagName('h1');
	var uls = document.getElementsByTagName('li');

	if(strStyle === 'white')
	{
		document.body.style.background = "url(https://www.shesky17.com/static/bkg_img/whiteIndex.png)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('credit').innerHTML = '';
		for(var i=0; i<font.length; i++)
		{
			font[i].style.color = "#000000";
		}
		for(var i=0; i<headers.length; i++)
		{
			headers[i].style.color = "#000000";
		}
	}
	else if(strStyle === 'dark')
	{
		document.body.style.background = "#141d26";
		document.getElementById('credit').innerHTML = '';
		for(var i=0; i<font.length; i++)
		{
			font[i].style.color = "#ffffff";
		}
		for(var i=0; i<headers.length; i++)
		{
			headers[i].style.color = "#ffffff";
		}
		for(var i=0; i<uls.length; i++)
		{
			uls[i].style.color = "#1b2737";
		}
	}
	else if(strStyle === 'gray')
	{
		document.body.style.background = "url(https://www.shesky17.com/static/bkg_img/grayIndex.png)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('credit').innerHTML = '';for (var i=0; i<font.length; i++);
		for(var i=0; i<font.length; i++)
		{
			font[i].style.color = "#000000";
		}
		for(var i=0; i<headers.length; i++)
		{
			headers[i].style.color = "#000000";
		}
	}
	else if(strStyle === 'stars')
		{
			document.body.style.background = "url(https://www.shesky17.com/static/bkg_img/stars.jpg) no-repeat center center fixed";
			document.body.style.backgroundSize = "cover";

			document.getElementById('credit').innerHTML = '';
			for(var i=0; i<font.length; i++)
			{
				font[i].style.color = "#ffffff";
			}
			for(var i=0; i<headers.length; i++)
			{
			headers[i].style.color = "#ffffff";
		}
	}
	else if(strStyle === 'matterhorn')
	{
		document.body.style.background = "url(https://www.shesky17.com/static/bkg_img/stars.jpg) no-repeat center center fixed";
		document.body.style.backgroundSize = "cover";

		document.getElementById('credit').innerHTML = '';
		for(var i=0; i<font.length; i++)
		{
			font[i].style.color = "#ffffff";
		}
		for(var i=0; i<headers.length; i++)
		{
			headers[i].style.color = "#ffffff";
		}
	}
	else if(strStyle === 'night')
	{
		document.body.style.background = "url(https://www.shesky17.com/static/bkg_img/night.jpg)";
		document.body.style.backgroundSize = "cover";
		document.getElementById('credit').innerHTML = "<center><font size='4' color='white'>Background credit to: <br> Leung Jonathan. 'Amazing Summer Night.' <i>Flickr</i>, 24 Aug. 2014, https://www.flickr.com/photos/jonathan-leung/15425904419/.</font></center>";
		for(var i=0; i<font.length; i++)
		{
			font[i].style.color = "#ffffff";
		}
		for(var i=0; i<headers.length; i++)
		{
			headers[i].style.color = "#ffffff";
		}
	}
}