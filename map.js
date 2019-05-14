function loadMap()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200)
        {
            var buffalo_pieParams = getPieParams(this.response);
            Plotly.plot('buffalo_pie', buffalo_pieParams.data, buffalo_pieParams.layout);
        }
    };
    xhttp.open("GET", "/buffalo_data");
    xhttp.send();
}

function loadMap3()
{
    Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1Ijoic2hlc2t5MTciLCJhIjoiY2pvMzhwazUxMHBqZjNxcW43cW00ZjdiaCJ9.sST_YIfl6pQhQpncH4kuzg'
    });

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200)
        {
            var mapParams = getMapParams(this.response);
            Plotly.plot('map', mapParams.data, mapParams.layout);
        }
    };
    xhttp.open("GET", "/merged_data");
    xhttp.send();
}

function loadMap2()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200)
        {
            var chicago_pieParams = getPieParams2(this.response);
            Plotly.plot('chicago_pie', chicago_pieParams.data, chicago_pieParams.layout);
        }
    };
    xhttp.open("GET", "/chicago_data");
    xhttp.send();
}

// return data
function setupMapData(inputArray)
{
    var data = [{
          type:'scattermapbox',
        mode:'markers',
        marker: {size: 5, color: 'rgb(255,0,0)'},
        lat: [], // contain all lat from input array
        lon: [], // contain all lon from input array
        text: []
        }];

    // add lat, lon, and text from input to data dictionary
    // keep the order
    for(var arr of inputArray)
    {
        var latitude = arr[0];
        var longitude = arr[1];
        var textDescription = arr[2];
        data[0].lat.push(latitude);
        data[0].lon.push(longitude);
        data[0].text.push(textDescription);
    }
    return data;
}

// return layout
function setupMapLayout(array) //input arr in same format
{
    var layout = { 
        mapbox: 
            {
                style: "satellite-streets", 
                zoom: 6, 
                center: {
                            lat: 41.651031,//42.9274702345929,//findCenter(array)[0], // should change to center of downtown
                            lon: -83.541939//-78.889920823980 //findCenter(array)[1] // write a findCenter2()
                        } 
            }
        };
    return layout;
}

function findCenter(array) //input arr in same format
{
    var latList = [];
    for(var arr of array)
    {
        var lat1 = arr[0];
        latList.push(lat1);
    }

    var lonList = [];
    for(var arr of array)
    {
        var lon1 = arr[1]
        lonList.push(lon1);
    }

    var avgLatLonList = [];

    var minLat = Math.min.apply(Math, latList);
    var maxLat = Math.max.apply(Math, latList);
    var minLon = Math.min.apply(Math, lonList);
    var maxLon = Math.max.apply(Math, lonList);

    avgLatLonList.push((maxLat+minLat)/2); 
    avgLatLonList.push((maxLon+minLon)/2);

    return avgLatLonList;
}

// crimeDict - {'Theif': 10, 'Rob': 93}
function setupPieData(crimeDict)
{
    var sum = 0;
    var data = [{
                  values: [], // count for crime type
                  labels: [], // lable for crime
                  type: 'pie'
                }];

    for(var key in crimeDict)
    {
        sum += crimeDict[key];
    }

    for(var key1 in crimeDict)
    {
        data[0].values.push(100*(crimeDict[key1]/sum));
        data[0].labels.push(key1);
    }
    return data;
}

// [lat, lon, description]
// count num of crime from different type
function getCrimeDataDict(inputArr)
{
    var crimeDataDict = {'Theft': 0};
    for(var arr of inputArr)
    {
        var keyCrimeName = arr[2];
        if(keyCrimeName in crimeDataDict)
        {
            crimeDataDict[keyCrimeName] += 1;
        }
        else
        {
            crimeDataDict[keyCrimeName] = 1;
        }
    }
    return crimeDataDict;
}


function getPieParams(jsonString)
{
    var returnDict = {};
    var dataArray = JSON.parse(jsonString);

    var pieData = setupPieData(getCrimeDataDict(dataArray));
    var pieLayout = {
                        height: 400,
                        width: 500
                    };
    
    returnDict['data'] = pieData;
    returnDict['layout'] = pieLayout;
    return returnDict;
}

function getPieParams2(jsonString)
{
    var returnDict = {};
    var dataArray = JSON.parse(jsonString);

    var pieData = setupPieData(getCrimeDataDict(dataArray));
    var pieLayout = {
                        height: 400,
                        width: 800
                    };
    
    returnDict['data'] = pieData;
    returnDict['layout'] = pieLayout;
    return returnDict;
}
// var testArr = [[20.3,-56.8,"test point 1"],[26.3,-59.8,"test point 2"],[21.3,-50.8,"test point 3"]];
function getMapParams(jsonString)
{
    var returnDict = {};
    var arrayOfArrays = JSON.parse(jsonString);

    var data = setupMapData(arrayOfArrays);
    var layout = setupMapLayout(arrayOfArrays);
    returnDict['data'] = data;
    returnDict['layout'] = layout;

    return returnDict;
}