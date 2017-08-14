var northEncoded = -9278080;
var eastEncoded = -13426760;
HTTP_GET_VARS=new Array();
strGET=document.location.search.substr(1,document.location.search.length);
if(strGET!='')
    {
    gArr=strGET.split('&');
    for(i=0;i<gArr.length;++i)
        {
        v='';vArr=gArr[i].split('=');
        if(vArr.length>1){v=vArr[1];}
        HTTP_GET_VARS[unescape(vArr[0])]=unescape(v);
        }
    }
var code = HTTP_GET_VARS["code"];
north = "" + (northEncoded + parseInt(code));
east = "" + (eastEncoded + parseInt(code));

$('#north').html("<h2>N "+ north.substr(0,2) + "° " + north.substr(2,2) + "." + north.substr(4,3) + "</h3>");
$('#east').html("<h2>E 00"+ east.substr(0,1) + "° " + east.substr(1,2) + "." + east.substr(3,3) + "</h3>");

function cont(){
	location.href="simon2.html?key=" + code;
}	
