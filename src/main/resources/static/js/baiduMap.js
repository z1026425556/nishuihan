$(function(){

    initMap();

});

function initMap(){

    // 创建地图实例
    var map = new BMap.Map("container");

    // 创建点坐标
    // 经纬度查询网址：http://api.map.baidu.com/lbsapi/getpoint/index.html
    var point = new BMap.Point(116.404, 39.915);

    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 15);

    //开启鼠标滚轮缩放
    // map.enableScrollWheelZoom(true);

    /*
    地图控件：
        平移缩放控件		NavigationControl		PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
        缩略地图			OverviewMapControl		默认位于地图右下方，是一个可折叠的缩略地图
        比例尺				ScaleControl			默认位于地图左下方，显示地图的比例关系
        地图类型			MapTypeControl			默认位于地图右上方
        版权				CopyrightControl		默认位于地图左下方
        定位				GeolocationControl		针对移动端开发，默认位于地图左下方
    */
    // map.addControl(new BMap.NavigationControl());
    // map.addControl(new BMap.ScaleControl());

    // var marker = new BMap.Marker(point);        // 创建标注
    // map.addOverlay(marker);                     // 将标注添加到地图中

    //添加折线
    /*var polyline = new BMap.Polyline([
        new BMap.Point(116.399, 39.910),
        new BMap.Point(116.405, 39.920)
        ],
        {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
    map.addOverlay(polyline);*/

}






























