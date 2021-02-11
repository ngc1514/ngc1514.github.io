function restyle(strStyle)
{
	var font = document.getElementsByTagName('font');
	var headers = document.getElementsByTagName('h1');
	var uls = document.getElementsByTagName('li');


	if(strStyle === 'dark')
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

	else if(strStyle === 'stars')
		{
			document.body.style.background = "url(../static/bkg_img/stars.jpg) no-repeat center center fixed";
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
}