/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){layui.use(["table","jquery","form","admin","setter"],function(){var e,a,t=layui.$,r=layui.admin,i=layui.setter,s=i.baseUrl,l=i.errorMsg,o=i.timeOutCode,d=i.timeOutMsg,n={"Access-Token":layui.data(i.tableName).access_token},m=1,y={shade:.3},u=sessionStorage.getItem("saa_key"),c=s+"/merchantOrderSummary",g="?key="+u,h=[],v=[],p=[];t.ajax({url:c+g,type:"get",async:!1,headers:n,beforeSend:function(){a=layer.load(m,y)},success:function(i){return i.status==o?(layer.msg(d),r.exit(),!1):(layer.close(a),200!=i.status?(layer.msg(i.message),!1):(layer.close(e),t(".order").html(i.data.total.order),t(".payment").html(i.data.total.payment),t(".delivery").html(i.data.total.delivery),t(".evaluate").html(i.data.total.evaluate),t(".safeguardingRights").html(i.data.total.safeguardingRights),t(".todayOrder").html(i.data.total.todayOrder),t(".todayPrice").html(i.data.total.todayPrice),h=i.data.day,v=i.data.num,p=i.data.price,h.reverse(),v.reverse(),void p.reverse()))},error:function(){layer.msg(l),layer.close(a)}});var x=echarts.init(document.getElementById("mainNum")),f={title:{text:"订单数量"},tooltip:{trigger:"axis"},xAxis:{boundaryGap:!1,data:h},yAxis:{minInterval:1},series:[{name:"微帖量",type:"line",data:v}],color:"#61a0a8"};x.setOption(f);var O=echarts.init(document.getElementById("mainPrice")),b={title:{text:"订单金额"},tooltip:{trigger:"axis"},xAxis:{boundaryGap:!1,data:h},yAxis:{minInterval:1},series:[{name:"评论数",type:"line",data:p}],color:"#61a0a8"};O.setOption(b)}),e("order/summary",{})});