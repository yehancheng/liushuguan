var useNewService=true;
var locPageHost = pageConfig.FN_getDomain();
var StockSoaService = "http://st.3.cn/gsi.html";
var iplocation = {"����": { id: "1", root: 0, djd: 1,c:72 },"�Ϻ�": { id: "2", root: 1, djd: 1,c:78 },"���": { id: "3", root: 0, djd: 1,c:51035 },"����": { id: "4", root: 3, djd: 1,c:113 },"�ӱ�": { id: "5", root: 0, djd: 1,c:142 },"ɽ��": { id: "6", root: 0, djd: 1,c:303 },"����": { id: "7", root: 0, djd: 1,c:412 },"����": { id: "8", root: 0, djd: 1,c:560 },"����": { id: "9", root: 0, djd: 1,c:639 },"������": { id: "10", root: 0, djd: 1,c:698 },"���ɹ�": { id: "11", root: 0, djd: 0,c:799 },"����": { id: "12", root: 1, djd: 1,c:904 },"ɽ��": { id: "13", root: 0, djd: 1,c:1000 },"����": { id: "14", root: 1, djd: 1,c:1116 },"�㽭": { id: "15", root: 1, djd: 1,c:1158 },"����": { id: "16", root: 2, djd: 1,c:1303 },"����": { id: "17", root: 0, djd: 1,c:1381 },"����": { id: "18", root: 2, djd: 1,c:1482 },"�㶫": { id: "19", root: 2, djd: 1,c:1601 },"����": { id: "20", root: 2, djd: 1,c:1715 },"����": { id: "21", root: 2, djd: 1,c:1827 },"�Ĵ�": { id: "22", root: 3, djd: 1,c:1930 },"����": { id: "23", root: 2, djd: 1,c:2121 },"����": { id: "24", root: 3, djd: 1,c:2144 },"����": { id: "25", root: 3, djd: 1,c:2235 },"����": { id: "26", root: 3, djd: 0,c:2951 },"����": { id: "27", root: 3, djd: 1,c:2376 },"����": { id: "28", root: 3, djd: 1,c:2487 },"�ຣ": { id: "29", root: 3, djd: 0,c:2580 },"����": { id: "30", root: 3, djd: 1,c:2628 },"�½�": { id: "31", root: 3, djd: 0,c:2652 },"̨��": { id: "32", root: 2, djd: 0,c:2768 },"���": { id: "42", root: 2, djd: 0,c:2754 },"����": { id: "43", root: 2, djd: 0,c:2770 },"���㵺": { id: "84", root: 2, djd: 0,c:84 }};
var provinceCityJson = {"1":[{"id":72,"name":"������"},{"id":2800,"name":"������"},{"id":2801,"name":"������"},{"id":2802,"name":"������"},{"id":2803,"name":"������"},{"id":2804,"name":"������"},{"id":2805,"name":"��̨��"},{"id":2806,"name":"ʯ��ɽ��"},{"id":2807,"name":"��ͷ��"},{"id":2808,"name":"��ɽ��"},{"id":2809,"name":"ͨ����"},{"id":2810,"name":"������"},{"id":2812,"name":"˳����"},{"id":2814,"name":"������"},{"id":2816,"name":"������"},{"id":2901,"name":"��ƽ��"},{"id":2953,"name":"ƽ����"},{"id":3065,"name":"������"}],"2":[{"id":2811,"name":"¬����"},{"id":2813,"name":"�����"},{"id":2815,"name":"������"},{"id":2817,"name":"������"},{"id":2820,"name":"բ����"},{"id":2822,"name":"�����"},{"id":2823,"name":"������"},{"id":2824,"name":"��ɽ��"},{"id":2825,"name":"������"},{"id":2826,"name":"�ζ���"},{"id":2830,"name":"�ֶ�����"},{"id":2833,"name":"������"},{"id":2834,"name":"�ɽ���"},{"id":2835,"name":"��ɽ��"},{"id":2836,"name":"�ϻ���"},{"id":2837,"name":"������"},{"id":2841,"name":"������"},{"id":2919,"name":"������"},{"id":78,"name":"������"}],"3":[{"id":51035,"name":"������"},{"id":51036,"name":"��ƽ��"},{"id":51037,"name":"�ӱ���"},{"id":51038,"name":"�Ӷ���"},{"id":51039,"name":"������"},{"id":51040,"name":"������"},{"id":51041,"name":"����"},{"id":51042,"name":"������"},{"id":51043,"name":"�Ͽ���"},{"id":51044,"name":"������"},{"id":51045,"name":"������"},{"id":51046,"name":"������"},{"id":51047,"name":"������"},{"id":51048,"name":"������"},{"id":51049,"name":"�����"},{"id":51050,"name":"������"},{"id":51051,"name":"������"},{"id":51052,"name":"������"}],"4":[{"id":113,"name":"������"},{"id":114,"name":"������"},{"id":115,"name":"��ƽ��"},{"id":119,"name":"�ϴ���"},{"id":123,"name":"������"},{"id":126,"name":"������"},{"id":128,"name":"ǭ����"},{"id":129,"name":"��¡��"},{"id":130,"name":"�ᶼ��"},{"id":131,"name":"�����"},{"id":132,"name":"����"},{"id":133,"name":"������"},{"id":134,"name":"����"},{"id":135,"name":"��Ϫ��"},{"id":136,"name":"��ɽ��"},{"id":137,"name":"ʯ����"},{"id":138,"name":"��ˮ��"},{"id":139,"name":"�潭��"},{"id":140,"name":"������"},{"id":141,"name":"��ɽ��"},{"id":48131,"name":"�ɽ��"},{"id":48132,"name":"�ٲ���"},{"id":48133,"name":"ͭ����"},{"id":48201,"name":"�ϴ���"},{"id":48202,"name":"������"},{"id":48203,"name":"������"},{"id":48204,"name":"������"},{"id":48205,"name":"�山��"},{"id":48206,"name":"������"},{"id":48207,"name":"������"},{"id":50950,"name":"������"},{"id":50951,"name":"�ϰ���"},{"id":50952,"name":"��������"},{"id":50953,"name":"ɳƺ����"},{"id":50954,"name":"��ɿ���"},{"id":50995,"name":"�뽭��"},{"id":51026,"name":"������"},{"id":51027,"name":"������"},{"id":51028,"name":"��������"},{"id":4164,"name":"�ǿ���"},{"id":3076,"name":"������"}],"5":[{"id":142,"name":"ʯ��ׯ��"},{"id":148,"name":"������"},{"id":164,"name":"��̨��"},{"id":199,"name":"������"},{"id":224,"name":"�żҿ���"},{"id":239,"name":"�е���"},{"id":248,"name":"�ػʵ���"},{"id":258,"name":"��ɽ��"},{"id":264,"name":"������"},{"id":274,"name":"�ȷ���"},{"id":275,"name":"��ˮ��"}],"6":[{"id":303,"name":"̫ԭ��"},{"id":309,"name":"��ͬ��"},{"id":318,"name":"��Ȫ��"},{"id":325,"name":"������"},{"id":330,"name":"˷����"},{"id":336,"name":"������"},{"id":350,"name":"������"},{"id":368,"name":"������"},{"id":379,"name":"�ٷ���"},{"id":398,"name":"�˳���"},{"id":3074,"name":"������"}],"7":[{"id":412,"name":"֣����"},{"id":420,"name":"������"},{"id":427,"name":"������"},{"id":438,"name":"ƽ��ɽ��"},{"id":446,"name":"������"},{"id":454,"name":"�ױ���"},{"id":458,"name":"������"},{"id":468,"name":"������"},{"id":475,"name":"�����"},{"id":482,"name":"�����"},{"id":489,"name":"�����"},{"id":495,"name":"����Ͽ��"},{"id":502,"name":"������"},{"id":517,"name":"������"},{"id":527,"name":"�ܿ���"},{"id":538,"name":"פ�����"},{"id":549,"name":"������"},{"id":2780,"name":"��Դ��"}],"8":[{"id":560,"name":"������"},{"id":573,"name":"������"},{"id":579,"name":"��ɽ��"},{"id":584,"name":"��˳��"},{"id":589,"name":"��Ϫ��"},{"id":593,"name":"������"},{"id":598,"name":"������"},{"id":604,"name":"��«����"},{"id":609,"name":"Ӫ����"},{"id":613,"name":"�̽���"},{"id":617,"name":"������"},{"id":621,"name":"������"},{"id":632,"name":"������"},{"id":6858,"name":"������"}],"9":[{"id":639,"name":"������"},{"id":644,"name":"������"},{"id":651,"name":"��ƽ��"},{"id":2992,"name":"��Դ��"},{"id":657,"name":"ͨ����"},{"id":664,"name":"��ɽ��"},{"id":674,"name":"��ԭ��"},{"id":681,"name":"�׳���"},{"id":687,"name":"�ӱ���"}],"10":[{"id":727,"name":"�׸���"},{"id":731,"name":"˫Ѽɽ��"},{"id":737,"name":"������"},{"id":742,"name":"������"},{"id":753,"name":"������"},{"id":757,"name":"ĵ������"},{"id":765,"name":"��ľ˹��"},{"id":773,"name":"��̨����"},{"id":776,"name":"�ں���"},{"id":782,"name":"�绯��"},{"id":793,"name":"���˰������"},{"id":698,"name":"��������"},{"id":712,"name":"���������"}],"11":[{"id":799,"name":"���ͺ�����"},{"id":805,"name":"��ͷ��"},{"id":810,"name":"�ں���"},{"id":812,"name":"�����"},{"id":823,"name":"�����첼��"},{"id":835,"name":"���ֹ�����"},{"id":848,"name":"���ױ�����"},{"id":870,"name":"������˹��"},{"id":880,"name":"�����׶���"},{"id":891,"name":"��������"},{"id":895,"name":"�˰���"},{"id":902,"name":"ͨ����"}],"12":[{"id":904,"name":"�Ͼ���"},{"id":911,"name":"������"},{"id":919,"name":"���Ƹ���"},{"id":925,"name":"������"},{"id":933,"name":"��Ǩ��"},{"id":939,"name":"�γ���"},{"id":951,"name":"������"},{"id":959,"name":"̩����"},{"id":965,"name":"��ͨ��"},{"id":972,"name":"����"},{"id":978,"name":"������"},{"id":984,"name":"������"},{"id":988,"name":"������"}],"13":[{"id":2900,"name":"������"},{"id":1000,"name":"������"},{"id":1007,"name":"�ൺ��"},{"id":1016,"name":"�Ͳ���"},{"id":1022,"name":"��ׯ��"},{"id":1025,"name":"��Ӫ��"},{"id":1032,"name":"Ϋ����"},{"id":1042,"name":"��̨��"},{"id":1053,"name":"������"},{"id":1058,"name":"������"},{"id":1060,"name":"������"},{"id":1072,"name":"������"},{"id":1081,"name":"�ĳ���"},{"id":1090,"name":"������"},{"id":1099,"name":"������"},{"id":1108,"name":"������"},{"id":1112,"name":"̩����"}],"14":[{"id":1151,"name":"��ɽ��"},{"id":1159,"name":"������"},{"id":1167,"name":"������"},{"id":1174,"name":"������"},{"id":1180,"name":"������"},{"id":1201,"name":"������"},{"id":1206,"name":"������"},{"id":2971,"name":"������"},{"id":1114,"name":"ͭ����"},{"id":1116,"name":"�Ϸ���"},{"id":1121,"name":"������"},{"id":1124,"name":"������"},{"id":1127,"name":"�ߺ���"},{"id":1132,"name":"������"},{"id":1137,"name":"��ɽ��"},{"id":1140,"name":"������"}],"15":[{"id":1158,"name":"������"},{"id":1273,"name":"������"},{"id":1280,"name":"��ˮ��"},{"id":1290,"name":"̨����"},{"id":1298,"name":"��ɽ��"},{"id":1213,"name":"������"},{"id":1233,"name":"������"},{"id":1243,"name":"������"},{"id":1250,"name":"������"},{"id":1255,"name":"������"},{"id":1262,"name":"����"}],"16":[{"id":1303,"name":"������"},{"id":1315,"name":"������"},{"id":1317,"name":"������"},{"id":1329,"name":"������"},{"id":1332,"name":"Ȫ����"},{"id":1341,"name":"������"},{"id":1352,"name":"��ƽ��"},{"id":1362,"name":"������"},{"id":1370,"name":"������"}],"17":[{"id":1432,"name":"Т����"},{"id":1441,"name":"�Ƹ���"},{"id":1458,"name":"������"},{"id":1466,"name":"��ʩ��"},{"id":1475,"name":"������"},{"id":1477,"name":"������"},{"id":1479,"name":"������"},{"id":3154,"name":"��ũ������"},{"id":1381,"name":"�人��"},{"id":1387,"name":"��ʯ��"},{"id":1396,"name":"������"},{"id":1405,"name":"ʮ����"},{"id":1413,"name":"������"},{"id":1421,"name":"�˲���"},{"id":2922,"name":"Ǳ����"},{"id":2980,"name":"������"},{"id":2983,"name":"������"}],"18":[{"id":4250,"name":"������"},{"id":1482,"name":"��ɳ��"},{"id":1488,"name":"������"},{"id":1495,"name":"��̶��"},{"id":1499,"name":"��ɽ��"},{"id":1501,"name":"������"},{"id":1511,"name":"������"},{"id":1522,"name":"������"},{"id":1530,"name":"������"},{"id":1540,"name":"�żҽ���"},{"id":1544,"name":"������"},{"id":1555,"name":"������"},{"id":1560,"name":"������"},{"id":1574,"name":"������"},{"id":1586,"name":"¦����"},{"id":1592,"name":"������"}],"19":[{"id":1601,"name":"������"},{"id":1607,"name":"������"},{"id":1609,"name":"�麣��"},{"id":1611,"name":"��ͷ��"},{"id":1617,"name":"�ع���"},{"id":1627,"name":"��Դ��"},{"id":1634,"name":"÷����"},{"id":1709,"name":"������"},{"id":1643,"name":"������"},{"id":1650,"name":"��β��"},{"id":1655,"name":"��ݸ��"},{"id":1657,"name":"��ɽ��"},{"id":1659,"name":"������"},{"id":1666,"name":"��ɽ��"},{"id":1672,"name":"������"},{"id":1677,"name":"տ����"},{"id":1684,"name":"ï����"},{"id":1690,"name":"������"},{"id":1698,"name":"�Ƹ���"},{"id":1704,"name":"��Զ��"},{"id":1705,"name":"������"}],"20":[{"id":3168,"name":"������"},{"id":1715,"name":"������"},{"id":1720,"name":"������"},{"id":1726,"name":"������"},{"id":1740,"name":"������"},{"id":1746,"name":"������"},{"id":1749,"name":"���Ǹ���"},{"id":1753,"name":"������"},{"id":1757,"name":"�����"},{"id":1761,"name":"������"},{"id":1792,"name":"������"},{"id":1806,"name":"��ɫ��"},{"id":1818,"name":"�ӳ���"},{"id":3044,"name":"������"}],"21":[{"id":1827,"name":"�ϲ���"},{"id":1832,"name":"��������"},{"id":1836,"name":"Ƽ����"},{"id":1842,"name":"������"},{"id":1845,"name":"�Ž���"},{"id":1857,"name":"ӥ̶��"},{"id":1861,"name":"������"},{"id":1874,"name":"�˴���"},{"id":1885,"name":"������"},{"id":1898,"name":"������"},{"id":1911,"name":"������"}],"22":[{"id":2103,"name":"��ɽ��"},{"id":1930,"name":"�ɶ���"},{"id":1946,"name":"�Թ���"},{"id":1950,"name":"��֦����"},{"id":1954,"name":"������"},{"id":1960,"name":"������"},{"id":1962,"name":"������"},{"id":1977,"name":"��Ԫ��"},{"id":1983,"name":"������"},{"id":1988,"name":"�ڽ���"},{"id":1993,"name":"��ɽ��"},{"id":2005,"name":"�˱���"},{"id":2016,"name":"�㰲��"},{"id":2022,"name":"�ϳ���"},{"id":2033,"name":"������"},{"id":2042,"name":"������"},{"id":2047,"name":"�Ű���"},{"id":2058,"name":"üɽ��"},{"id":2065,"name":"������"},{"id":2070,"name":"������"},{"id":2084,"name":"������"}],"23":[{"id":3690,"name":"������"},{"id":3698,"name":"�Ĳ���"},{"id":3699,"name":"��ָɽ��"},{"id":3701,"name":"�ٸ���"},{"id":3702,"name":"������"},{"id":3703,"name":"������"},{"id":3704,"name":"�Ͳ���"},{"id":3705,"name":"������"},{"id":3706,"name":"��ɳ��"},{"id":3707,"name":"������"},{"id":3708,"name":"��ˮ��"},{"id":3709,"name":"��ͤ��"},{"id":3710,"name":"�ֶ���"},{"id":3711,"name":"��ɳ��"},{"id":2121,"name":"������"},{"id":3115,"name":"����"},{"id":3137,"name":"������"},{"id":3173,"name":"������"},{"id":3034,"name":"������"}],"24":[{"id":2144,"name":"������"},{"id":2150,"name":"����ˮ��"},{"id":2155,"name":"������"},{"id":2169,"name":"ͭ����"},{"id":2180,"name":"�Ͻ���"},{"id":2189,"name":"��˳��"},{"id":2196,"name":"ǭ������"},{"id":2205,"name":"ǭ������"},{"id":2222,"name":"ǭ����"}],"25":[{"id":4108,"name":"������"},{"id":2235,"name":"������"},{"id":2247,"name":"������"},{"id":2258,"name":"��Ϫ��"},{"id":2270,"name":"��ͨ��"},{"id":2281,"name":"�ն���"},{"id":2291,"name":"�ٲ���"},{"id":2298,"name":"��ɽ��"},{"id":2304,"name":"������"},{"id":2309,"name":"��ɽ��"},{"id":2318,"name":"�����"},{"id":2332,"name":"��˫������"},{"id":2336,"name":"������"},{"id":2347,"name":"������"},{"id":2360,"name":"�º���"},{"id":2366,"name":"ŭ����"}],"26":[{"id":3970,"name":"�������"},{"id":3971,"name":"��֥����"},{"id":2951,"name":"������"},{"id":3107,"name":"��������"},{"id":3129,"name":"ɽ�ϵ���"},{"id":3138,"name":"��������"},{"id":3144,"name":"�տ������"}],"27":[{"id":2428,"name":"�Ӱ���"},{"id":2442,"name":"������"},{"id":2454,"name":"������"},{"id":2468,"name":"������"},{"id":2476,"name":"������"},{"id":2376,"name":"������"},{"id":2386,"name":"ͭ����"},{"id":2390,"name":"������"},{"id":2402,"name":"������"},{"id":2416,"name":"μ����"}],"28":[{"id":2525,"name":"������"},{"id":2534,"name":"¤����"},{"id":2544,"name":"������"},{"id":2549,"name":"��Ҵ��"},{"id":2556,"name":"��Ȫ��"},{"id":2564,"name":"������"},{"id":2573,"name":"������"},{"id":3080,"name":"������"},{"id":2487,"name":"������"},{"id":2492,"name":"�����"},{"id":2495,"name":"������"},{"id":2501,"name":"��ˮ��"},{"id":2509,"name":"��������"},{"id":2518,"name":"ƽ����"}],"29":[{"id":2580,"name":"������"},{"id":2585,"name":"��������"},{"id":2592,"name":"������"},{"id":2597,"name":"������"},{"id":2603,"name":"������"},{"id":2605,"name":"������"},{"id":2612,"name":"������"},{"id":2620,"name":"������"}],"30":[{"id":2628,"name":"������"},{"id":2632,"name":"ʯ��ɽ��"},{"id":2637,"name":"������"},{"id":2644,"name":"��ԭ��"},{"id":3071,"name":"������"}],"31":[{"id":4110,"name":"�������"},{"id":4163,"name":"���������ɹ������ݰ���ɽ�ڿڰ�"},{"id":15945,"name":"��������"},{"id":15946,"name":"ͼľ�����"},{"id":2652,"name":"��³ľ����"},{"id":2654,"name":"����������"},{"id":2656,"name":"ʯ������"},{"id":2658,"name":"��³������"},{"id":2662,"name":"���ܵ���"},{"id":2666,"name":"�������"},{"id":2675,"name":"�����յ���"},{"id":2686,"name":"��ʲ����"},{"id":2699,"name":"����������"},{"id":2704,"name":"����������"},{"id":2714,"name":"������"},{"id":2723,"name":"����������"},{"id":2727,"name":"������"},{"id":2736,"name":"���ǵ���"},{"id":2744,"name":"����̩����"}],"32":[{"id":2768,"name":"̨����"}],"42":[{"id":2754,"name":"����ر�������"}],"43":[{"id":2770,"name":"������"}],"84":[{"id":1310,"name":"���㵺"}]};
var cName = "ipLocation";
var currentLocation = "����";
var currentProvinceId = 1;
function getStockDescWords(state,isPurchase,skuid,skukey,arrivalDate,isNotice,ext,provinceId,dti,rn,rfg,pr){
	var text = "";
	var yfInfo = "";
	if (skuid<1000000000&&(provinceId==26||provinceId==31)&&(state!=0&&state!=34)&&ext&&ext.indexOf("PianYuanYunFei")>-1)
		yfInfo = "��<span title='��ʯ���������û����ø��˷�' style='cursor:pointer'>�����˷ѣ���10.00</span>";
	if (state == 33){
		var promiseresult = null;
		if (pr&&pr.resultCode==1&&pr.promiseResult){
			promiseresult = pr.promiseResult;
		}
		if (rn&&rn>0){
			text = "<strong>�л�</strong>����ʣ"+rn+"��"+(promiseresult?("��"+promiseresult):"");	
		}
		else{
			text = "<strong>�л�</strong>��"+(promiseresult?promiseresult:"�µ�����������");		
		}
	}
	else if (state == 34 || state == 0){
		text = "<strong>�޻�</strong>������Ʒ��ʱ����"+(isNotice?"��<a id='notify-stock' data-type='2' data-sku='"+skuid+"' href='http://notify.home.jd.com/email.action?type=2&id=" + skuid + "&key=" + skukey + "' target='_blank'>����֪ͨ</a>":"");
		if (skuid&&skuid.length == 8 && !isPurchase){
			text = "<strong>�޻�</strong>������Ʒ�������ۣ���ӭѡ��������Ʒ";
		}
	}
	else if (state == 39){
		text = "<strong>�л�</strong>���µ���2-6�췢��";
	}
	else if (state == 40){
		text = "<strong>�л�</strong>���µ���2-6�췢��";
		if (rfg==2){
			text = "<strong>�л�</strong>��Ԥ���µ���5-10�췢��";
		}
		else if (dti&&dti.fastestDays&&dti.slowestDays){
			text = "<strong>�л�</strong>���µ���"+dti.fastestDays+"-"+dti.slowestDays+"�췢��";
		}
	}
	else if (state == 36){
		text = "<strong>Ԥ��</strong>��"+(arrivalDate?"Ԥ��"+arrivalDate+"�պ��л������ڿ��µ�":(rfg==2?"�µ���5-7�ܷ���":"��Ʒ�����󷢻������ڿ��µ�"));
	}
	text += yfInfo;
	return text;
}
var buyUrl = $("#InitCartUrl").attr("href");
function gSC(result) {
	if (result.stock) {
		$("#store-prompt").html(getStockDescWords(result.stock.StockState,result.stock.IsPurchase,pageConfig.product.skuid,pageConfig.product.skuidkey,result.stock.ArrivalDate,true,result.stock.Ext,currentProvinceId,result.stock.Dti,result.stock.rn,result.stock.rfg,result.stock.pr));		
		var address = currentAreaInfo.currentProvinceName+currentAreaInfo.currentCityName+currentAreaInfo.currentAreaName+currentAreaInfo.currentTownName;
		$("#store-selector .text div").html(currentAreaInfo.currentProvinceName+cleanKuohao(currentAreaInfo.currentCityName)+cleanKuohao(currentAreaInfo.currentAreaName)+cleanKuohao(currentAreaInfo.currentTownName)).attr("title",address);
		//$("#store-selector .text div").html(currentLocation);
		//$("#storeinfocontainer").show();
		if (result.stock.StockState == 34 || result.stock.StockState == 0){ //��Ʒ�޻�
            pageConfig.product.haveStock = false;
			$("#choose-btn-easybuy").addClass("hide");
			$("#InitCartUrl").attr("href","#none").attr("onclick","").attr("title","��Ʒ���޻�").unbind("click");
            $('#choose-btn-append').addClass("disabled");
            $('#product-intro').addClass('product-intro-noitem');
            
            $('#nav-minicart,#choose-amount').hide();
            $('#choose-btn-notice').show().find('a').attr('data-sku', pageConfig.product.skuid).attr('data-type', 2);
            
            if ( typeof OutStock !== 'undefined' && $('#itemover-title').length < 1) {
                OutStock.get(pageConfig.product.skuid);
            }
            if ( $('#choose-noresult').length < 1 && $('#itemover-title').length < 1 ) {
				if (result.stock.IsPurchase){
					$('#choose-btns').before('<li id="choose-noresult"><div class="dd"><strong>��ѡ��������Ʒ��ʱ�޻���</strong></div></li>');
				}
				else{
					$('#choose-btns').before('<li id="choose-noresult"><div class="dd"><strong>����Ʒ�������ۣ���ӭѡ��������Ʒ��</strong></div></li>');
					$('#choose-btn-notice').hide();
				}
            }
		}
		else{
            pageConfig.product.haveStock = true;
			$("#easybuy").show();
			$("#InitCartUrl").attr("href",buyUrl).attr("title","");
            
            if ( $('#itemover-title').length < 1 ) {
                //�Ϲ�
                $('#choose-btn-append').removeClass("disabled");
                $('#product-intro').removeClass('product-intro-noitem'); 
                $('##choose-amount').show();
				if($("#choose-btn-easybuy .btn-easybuy").length==0||$("#choose-btn-easybuy").attr("haveShow")!="true") {
					initEasyBuy();              
				}else{
					$("#choose-btn-easybuy").removeClass("hide");
				}
            } else {
                $('#choose-btn-append').addClass("disabled").find('a').attr('href', '#none');
                $('#product-intro').addClass('product-intro-noitem'); 
				$("#choose-btn-easybuy").addClass("hide");
            }

            
            $('#nav-minicart').show();
            $('#choose-btn-notice').hide();
            $('#out-of-stock').hide();
            $('#choose-noresult').remove();
		}
		if (result.stock.Ext&&result.stock.Ext.indexOf("YuShou")>-1){
			if(!window.Qiang){
				$.ajax({url:"http://misc.360buyimg.com/book/js/2013/qiang.js?t=20131015",dataType:'script',cache:true,type:"get",success:function(){if(Qiang&&Qiang.init)Qiang.init(G.sku, G.key);}}); 
			}
			else{
				if ( Qiang&&Qiang.init ) {
						Qiang.clear();
						Qiang.init(G.sku, G.key);
					}
			} 
			$("#InitCartUrl").hide();
			$("#easybuy").hide();
		}
		return;
	}
}
//stock
function GetRealStock(provinceid) {
	$.getJSONP(StockSoaService + "?callback=gSC&type=provincestock&skuid="+pageConfig.product.skuidkey+"&provinceid="+provinceid);
}

//Main Logic
function setCommonCookies(provinceId,provinceName,cityId,areaId,townId,isWriteAdds){
	var adds = provinceId+"-"+cityId+"-"+areaId+"-"+townId;
	setCookie("ipLocation", provinceName, 30, "/", "jd.com", false);
	setCookie("ipLoc-djd", adds, 30, "/", "jd.com", false);
	if (isWriteAdds){
		$.ajax({url:"http://uprofile.jd.com/u/setadds",type:"get",dataType:"jsonp",data:{adds:adds}});
	}
}
//����ʡ��ID��ȡ����
function getNameById(provinceId){
	for(var o in iplocation){
		if (iplocation[o]&&iplocation[o].id==provinceId){
			return o;
		}
	}
	return "����";
}
function ShowStockForAll(ipLoc,writeCookie){//��ȡ�������
	if(!ipLoc){
		ipLoc=getCookie("ipLoc-djd");
	}
	ipLoc = ipLoc?ipLoc.split("-"):[1,72,0,0];
	GetRealStock(ipLoc[0]);
	currentLocation=getNameById(ipLoc[0]);
	setCommonCookies(ipLoc[0],currentLocation,ipLoc[1],ipLoc[2],ipLoc[3],writeCookie);
}
var isUseServiceLoc = true; //�Ƿ�Ĭ��ʹ�÷���˵�ַ
var provinceHtml = '<div class="content"><div data-widget="tabs" class="m JD-stock" id="JD-stock">'
								+'<div class="mt">'
								+'    <ul class="tab">'
								+'        <li data-index="0" data-widget="tab-item" class="curr"><a href="#none" class="hover"><em>��ѡ��</em><i></i></a></li>'
								+'        <li data-index="1" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>��ѡ��</em><i></i></a></li>'
								+'        <li data-index="2" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>��ѡ��</em><i></i></a></li>'
								+'        <li data-index="3" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>��ѡ��</em><i></i></a></li>'
								+'    </ul>'
								+'    <div class="stock-line"></div>'
								+'</div>'
								+'<div class="mc" data-area="0" data-widget="tab-content" id="stock_province_item">'
								+'    <ul class="area-list">'
								+'       <li><a href="#none" data-value="1">����</a></li><li><a href="#none" data-value="2">�Ϻ�</a></li><li><a href="#none" data-value="3">���</a></li><li><a href="#none" data-value="4">����</a></li><li><a href="#none" data-value="5">�ӱ�</a></li><li><a href="#none" data-value="6">ɽ��</a></li><li><a href="#none" data-value="7">����</a></li><li><a href="#none" data-value="8">����</a></li><li><a href="#none" data-value="9">����</a></li><li><a href="#none" data-value="10">������</a></li><li><a href="#none" data-value="11">���ɹ�</a></li><li><a href="#none" data-value="12">����</a></li><li><a href="#none" data-value="13">ɽ��</a></li><li><a href="#none" data-value="14">����</a></li><li><a href="#none" data-value="15">�㽭</a></li><li><a href="#none" data-value="16">����</a></li><li><a href="#none" data-value="17">����</a></li><li><a href="#none" data-value="18">����</a></li><li><a href="#none" data-value="19">�㶫</a></li><li><a href="#none" data-value="20">����</a></li><li><a href="#none" data-value="21">����</a></li><li><a href="#none" data-value="22">�Ĵ�</a></li><li><a href="#none" data-value="23">����</a></li><li><a href="#none" data-value="24">����</a></li><li><a href="#none" data-value="25">����</a></li><li><a href="#none" data-value="26">����</a></li><li><a href="#none" data-value="27">����</a></li><li><a href="#none" data-value="28">����</a></li><li><a href="#none" data-value="29">�ຣ</a></li><li><a href="#none" data-value="30">����</a></li><li><a href="#none" data-value="31">�½�</a></li><li><a href="#none" data-value="32">̨��</a></li><li><a href="#none" data-value="42">���</a></li><li><a href="#none" data-value="43">����</a></li><li><a href="#none" data-value="84">���㵺</a></li>'
								+'    </ul>'
								+'</div>'
								+'<div class="mc" data-area="1" data-widget="tab-content" id="stock_city_item"></div>'
								+'<div class="mc" data-area="2" data-widget="tab-content" id="stock_area_item"></div>'
								+'<div class="mc" data-area="3" data-widget="tab-content" id="stock_town_item"></div>'
								+'</div></div>';
function getAreaList(result){
	var html = ["<ul class='area-list'>"];
	var longhtml = [];
	var longerhtml = [];
	if (result&&result.length > 0){
		for (var i=0,j=result.length;i<j ;i++ ){
			result[i].name = result[i].name.replace(" ","");
			if(result[i].name.length > 12){
				longerhtml.push("<li class='longer-area'><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
			}
			else if(result[i].name.length > 5){
				longhtml.push("<li class='long-area'><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
			}
			else{
				html.push("<li><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
			}
		}
	}
	else{
		html.push("<li><a href='#none' data-value='"+currentAreaInfo.currentFid+"'> </a></li>");
	}
	html.push(longhtml.join(""));
	html.push(longerhtml.join(""));
	html.push("</ul>");
	return html.join("");
}
function cleanKuohao(str){
	if(str&&str.indexOf("(")>0){
		str = str.substring(0,str.indexOf("("));
	}
	if(str&&str.indexOf("��")>0){
		str = str.substring(0,str.indexOf("��"));
	}
	return str;
}
function getStockCallback(result){
	if(currentAreaInfo.currentLevel==3&&(result.stock.code==3||result.stock.code==4)){
		chooseArea(currentAreaInfo.currentAreaId,currentAreaInfo.currentAreaName);
	}
	else{
		$('#store-selector').removeClass('hover');
		setCommonCookies(currentAreaInfo.currentProvinceId,currentLocation,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,currentAreaInfo.currentTownId,!page_load);
		if(page_load){
			page_load = false;
		}
		gSC(result);
	}
}
function getStockOpt(id,name){
	if(currentAreaInfo.currentLevel==3){
		currentAreaInfo.currentAreaId = id;
		currentAreaInfo.currentAreaName = name;
		if(!page_load){
			currentAreaInfo.currentTownId = 0;
			currentAreaInfo.currentTownName = "";
		}
	}
	else if(currentAreaInfo.currentLevel==4){
		currentAreaInfo.currentTownId = id;
		currentAreaInfo.currentTownName = name;
	}
	if (currentAreaInfo.currentProvinceId!=84){
		$.getJSONP("http://st.3.cn/gds.html?callback=getStockCallback&skuid="+pageConfig.product.skuidkey+"&provinceid="+currentAreaInfo.currentProvinceId+"&cityid="+currentAreaInfo.currentCityId+"&areaid="+currentAreaInfo.currentAreaId+"&townid="
			+currentAreaInfo.currentTownId+"&sortid1="+pageConfig .product.cat[0]+"&sortid2="+pageConfig .product.cat[1]+"&sortid3="+pageConfig .product.cat[2]);			
	}
	else{
		getStockCallback({"stock":{"IsPurchase":false,"ArrivalDate":null,"Ext":"","PopType":0,"StockStateName":"�޻�","code":1,"StockState":0}});
	}
}
function getAreaListcallback(r){
	currentDom.html(getAreaList(r));
	if (currentAreaInfo.currentLevel >= 2){
		currentDom.find("a").click(function(){
			if(page_load){
				page_load = false;
			}
			if(currentDom.attr("id")=="stock_area_item"){
				currentAreaInfo.currentLevel=3;
			}
			else if(currentDom.attr("id")=="stock_town_item"){
				currentAreaInfo.currentLevel=4;
			}
			getStockOpt($(this).attr("data-value"),$(this).html());
		});
		if(page_load){ //��ʼ������
			currentAreaInfo.currentLevel = currentAreaInfo.currentLevel==2?3:4;
			if(currentAreaInfo.currentAreaId&&new Number(currentAreaInfo.currentAreaId)>0){
				getStockOpt(currentAreaInfo.currentAreaId,currentDom.find("a[data-value='"+currentAreaInfo.currentAreaId+"']").html());
			}
			else{
				getStockOpt(currentDom.find("a").eq(0).attr("data-value"),currentDom.find("a").eq(0).html());
			}
		}
	}
}
function chooseProvince(provinceId){
	provinceContainer.hide();
	currentAreaInfo.currentLevel = 1;
	currentAreaInfo.currentProvinceId = provinceId;
	currentAreaInfo.currentProvinceName = getNameById(provinceId);
	if(!page_load){
		currentAreaInfo.currentCityId = 0;
		currentAreaInfo.currentCityName = "";
		currentAreaInfo.currentAreaId = 0;
		currentAreaInfo.currentAreaName = "";
		currentAreaInfo.currentTownId = 0;
		currentAreaInfo.currentTownName = "";
	}
	areaTabContainer.eq(0).removeClass("curr").find("em").html(currentAreaInfo.currentProvinceName);
	areaTabContainer.eq(1).addClass("curr").show().find("em").html("��ѡ��");
	areaTabContainer.eq(2).hide();
	areaTabContainer.eq(3).hide();
	cityContainer.show();
	areaContainer.hide();
	townaContainer.hide();
	if(provinceCityJson[""+provinceId]){
		cityContainer.html(getAreaList(provinceCityJson[""+provinceId]));
		cityContainer.find("a").click(function(){
			if(page_load){
				page_load = false;
			}
			$("#store-selector").unbind("mouseout");
			chooseCity($(this).attr("data-value"),$(this).html());
		});
		if(page_load){ //��ʼ������
			if(currentAreaInfo.currentCityId&&new Number(currentAreaInfo.currentCityId)>0){
				chooseCity(currentAreaInfo.currentCityId,cityContainer.find("a[data-value='"+currentAreaInfo.currentCityId+"']").html());
			}
			else{
				chooseCity(cityContainer.find("a").eq(0).attr("data-value"),cityContainer.find("a").eq(0).html());
			}
		}
	}
}
function chooseCity(cityId,cityName){
	provinceContainer.hide();
	cityContainer.hide();
	currentAreaInfo.currentLevel = 2;
	currentAreaInfo.currentCityId = cityId;
	currentAreaInfo.currentCityName = cityName;
	if(!page_load){
		currentAreaInfo.currentAreaId = 0;
		currentAreaInfo.currentAreaName = "";
		currentAreaInfo.currentTownId = 0;
		currentAreaInfo.currentTownName = "";
	}
	areaTabContainer.eq(1).removeClass("curr").find("em").html(cityName);
	areaTabContainer.eq(2).addClass("curr").show().find("em").html("��ѡ��");
	areaTabContainer.eq(3).hide();
	areaContainer.show().html("<div class='iloading'>���ڼ����У����Ժ�...</div>");
	townaContainer.hide();
	currentDom = areaContainer;
	$.getJSONP("http://d.360buy.com/area/get?fid="+cityId+"&callback=getAreaListcallback");
}
function chooseArea(areaId,areaName){
	provinceContainer.hide();
	cityContainer.hide();
	areaContainer.hide();
	currentAreaInfo.currentLevel = 3;
	currentAreaInfo.currentAreaId = areaId;
	currentAreaInfo.currentAreaName = areaName;
	if(!page_load){
		currentAreaInfo.currentTownId = 0;
		currentAreaInfo.currentTownName = "";
	}
	areaTabContainer.eq(2).removeClass("curr").find("em").html(areaName);
	areaTabContainer.eq(3).addClass("curr").show().find("em").html("��ѡ��");
	townaContainer.show().html("<div class='iloading'>���ڼ����У����Ժ�...</div>");
	currentDom = townaContainer;
	$.getJSONP("http://d.360buy.com/area/get?fid="+areaId+"&callback=getAreaListcallback");
}
$("#store-selector .text").after(provinceHtml);
var areaTabContainer=$("#JD-stock .tab li");
var provinceContainer=$("#stock_province_item");
var cityContainer=$("#stock_city_item");
var areaContainer=$("#stock_area_item");
var townaContainer=$("#stock_town_item");
var currentDom = provinceContainer;
//��ǰ������Ϣ
var currentAreaInfo;
//��ʼ����ǰ������Ϣ
function CurrentAreaInfoInit(){
	currentAreaInfo =  {"currentLevel": 1,"currentProvinceId": 1,"currentProvinceName":"����","currentCityId": 0,"currentCityName":"","currentAreaId": 0,"currentAreaName":"","currentTownId":0,"currentTownName":""};
	var ipLoc = getCookie("ipLoc-djd");
	ipLoc = ipLoc?ipLoc.split("-"):[1,72,0,0];
	if(ipLoc.length>0&&ipLoc[0]){
		currentAreaInfo.currentProvinceId = ipLoc[0];
		currentAreaInfo.currentProvinceName = getNameById(ipLoc[0]);
	}
	if(ipLoc.length>1&&ipLoc[1]){
		currentAreaInfo.currentCityId = ipLoc[1];
	}
	if(ipLoc.length>2&&ipLoc[2]){
		currentAreaInfo.currentAreaId = ipLoc[2];
	}
	if(ipLoc.length>3&&ipLoc[3]){
		currentAreaInfo.currentTownId = ipLoc[3];
	}
}
var page_load = true;
(function(){
	$("#store-selector").unbind("mouseover").bind("mouseover",function(){
		$('#store-selector').addClass('hover');
		$("#store-selector .content,#JD-stock").show();
	}).find("dl").remove();
	CurrentAreaInfoInit();
	areaTabContainer.eq(0).find("a").click(function(){
		areaTabContainer.removeClass("curr");
		areaTabContainer.eq(0).addClass("curr").show();
		provinceContainer.show();
		cityContainer.hide();
		areaContainer.hide();
		townaContainer.hide();
		areaTabContainer.eq(1).hide();
		areaTabContainer.eq(2).hide();
		areaTabContainer.eq(3).hide();
	});
	areaTabContainer.eq(1).find("a").click(function(){
		areaTabContainer.removeClass("curr");
		areaTabContainer.eq(1).addClass("curr").show();
		provinceContainer.hide();
		cityContainer.show();
		areaContainer.hide();
		townaContainer.hide();
		areaTabContainer.eq(2).hide();
		areaTabContainer.eq(3).hide();
	});
	areaTabContainer.eq(2).find("a").click(function(){
		areaTabContainer.removeClass("curr");
		areaTabContainer.eq(2).addClass("curr").show();
		provinceContainer.hide();
		cityContainer.hide();
		areaContainer.show();
		townaContainer.hide();
		areaTabContainer.eq(3).hide();
	});
	provinceContainer.find("a").click(function() {
		if(page_load){
			page_load = false;
		}
		$("#store-selector").unbind("mouseout");
		chooseProvince($(this).attr("data-value"));
	}).end();
	chooseProvince(currentAreaInfo.currentProvinceId);
	if (isUseServiceLoc){
		try{
			$.ajax({
				url:"http://uprofile.jd.com/u/getadds",
				type:"get",
				dataType:"jsonp",
				timeout:500,
				success:function(r){
					if (r&&r.adds&&r.adds!="null"){
						var ipLoc = r.adds;
						ipLoc = ipLoc.split("-");
						var province=0,city=0,area=0,town=0,proName='';
						if(ipLoc[0]&&new Number(ipLoc[0])>0){
							province = ipLoc[0];
							proName = getNameById(province);
							if(ipLoc[1]&&new Number(ipLoc[1])>0){
								city = ipLoc[1];
								if(ipLoc[2]&&new Number(ipLoc[2])>0){
									area = ipLoc[2];
									if(ipLoc[3]&&new Number(ipLoc[3])>0){
										town = ipLoc[3];
									}
								}
							}
							setCommonCookies(province,proName,city,area,town,false);
						}
					}
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
				}
			});
		}catch(e){}
	}	
})();
function setCommonCookies(provinceId,provinceName,cityId,areaId,townId,isWriteAdds){
	setNewCookie("ipLocation", provinceName, 30, "/", locPageHost, false);
	var adds = provinceId+"-"+cityId+"-"+areaId+"-"+townId;
	setNewCookie("ipLoc-djd", adds, 30, "/", locPageHost, false);
	if (!isUseServiceLoc||!isWriteAdds){
	}
	else{
		$.ajax({url:"http://uprofile.jd.com/u/setadds",type:"get",dataType:"jsonp",data:{adds:adds}});
	}
}
//cookie operate
function getCookie(name) {
	var start = document.cookie.indexOf(name + "=");
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return null;
	}
	if (start == -1) return null;
	var end = document.cookie.indexOf(';', len);
	if (end == -1) end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
};
function setNewCookie(name,value,expires,path,domain,secure){if(!path){path="/"}if(!domain){domain="jd.com"}if(!secure){secure=false}var today=new Date();today.setTime(today.getTime());if(expires){expires=expires*1000*60*60*24}var expires_date=new Date(today.getTime()+(expires));document.cookie=name+'='+escape(value)+((expires)?';expires='+expires_date.toGMTString():'')+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+((secure)?';secure':'')};function deleteCookie(name,path,domain){if(getCookie(name))document.cookie=name+'='+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+';expires=Thu, 01-Jan-1970 00:00:01 GMT'};
function setCookie(name, value, expires, path, domain, secure) {
	var today = new Date();
	today.setTime(today.getTime());
	if (expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));
	document.cookie = name + '=' + escape(value) +
        ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
};
function deleteCookie(name, path, domain) {
	if (getCookie(name)) document.cookie = name + '=' +
            ((path) ? ';path=' + path : '') +
            ((domain) ? ';domain=' + domain : '') +
            ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
};
function setDjdCookie(p,c){var a = getCookie("ipLoc-djd");if (!a||a.split("-")[0]!=p)setCookie("ipLoc-djd", p+(c?("-"+c):""), 30, "/", "jd.com", false);}
/*easybuy*/
function initEasyBuy(){
	var productId=null;
	if($("#InitCartUrl").css("display")!="none"){
		productId=pageConfig.product.skuid;
		var eb=readCookie("eb");
		if(eb==1||eb==null||eb==undefined){
			$.ajax({url:"http://buy.jd.com/purchase/flows/easybuy/FlowService.ashx",
				type:"get",
				data:{action:"CanBuy",skuId:productId},
				dataType:"jsonp",
				success:function(r){
					$("#easybuy").remove();
					if(r.Flag){
						if($("#choose-btn-easybuy .btn-easybuy").length==0){
							$("#choose-btn-easybuy").remove();
							$("<div id=\"choose-btn-easybuy\" class=\"btn\"><a href=\"#none\" class=\"btn-easybuy\">���ɹ�<b></b></a></div>").insertAfter("#choose-btn-append");
						}
						else{
							$("#choose-btn-easybuy").removeClass("hide");
						}
						$("#choose-btn-easybuy").attr("haveShow","true");
						$("#choose-btn-easybuy .btn-easybuy").click(function () {
							window.location="http://cart.jd.com/cart/dynamic/easyBuy.action?pid="+pageConfig.product.skuid+"&pcount="+$("#buy-num").val()+"&ptype=1";
						});
						/*$("#choose-btn-easybuy .btn-easybuy").click(function(){
							$("#choose-btn-easybuy").addClass("hide");
							$.extend(jdModelCallCenter.settings,{clstag1:0,clstag2:0,id:productId,fn:function(){DoOrder(this.id)}});
							jdModelCallCenter.settings.fn();
						})*/
					}
				}
			})
		}
	}
};
function DoOrder(pid){
	$.login({
		modal:true,
		complete:function(result){
			if(result!=null&&result.IsAuthenticated!=null&&result.IsAuthenticated){
				var num=$.trim($("#buy-num").val());
				$.ajax({url:"http://buy.jd.com/purchase/flows/easybuy/FlowService.ashx",
					type:"get",
					data:{action:"SubmitOrderByDefaultTemplate",skuId:pid,num:num},
					dataType:"jsonp",
					success:function(r){
						if(r.Flag){
							window.location="http://jd2008.jd.com/purchase/Succeed_EasyBuy.aspx"
						}else{
							$("#choose-btn-easybuy").removeClass("hide");
							if(r.Message!=null){
								alert(r.Message);
							}else{
								alert("��ʱ�޷��ύ,�����Ժ�����!");
							}
						}
					}
				})
			}else{
				$("#choose-btn-easybuy").removeClass("hide");
			}
		}
	})
}
/******************/
var spuSort={"1316":"1-������ױ","1620":"1-�ҾӼ�װ","5025":"1-�ӱ�","6219":"2-ˮ�߾ƾ�","6233":"1-�������","6994":"1-��������","6196":"1-����","1319":"1-ĸӤ","1320":"1-ʳƷ���ϡ�����ʳƷ",
			"1315":"1-��������","4837":"3-�칫�ľ�","1466":"2-��������","1467":"2-������Ʒ","1463":"2-�˶���е","6728":"1-������Ʒ","1713":"1-ͼ��"};
if(true&&(spuSort[pageConfig.product.cat[0]+""]||spuSort[pageConfig.product.cat[1]+""]||spuSort[pageConfig.product.cat[2]+""])){
var spuServiceUrl = "http://spu.jd.com/json.html?cond=";
var spuPageUrl = "http://spu.jd.com/"+pageConfig.product.skuid+".html";
function showProvinceStockDeliver(r){
    if(!r||r.totalCount<2)return;
	if($("#ypds-list").length==0){
		$('<div id="brand-bar" clstag="shangpin|keycount|product|btn-coll"><div class="m fr" id="ypds-list"></div></div>').insertAfter("#summary");
	}
    var spuVenderInfos = '';
    var topCount = 0;
	var cutCount = 0;
    for (var i=0,j=r.skuStockVenders.length;i<j;i++){
        if (pageConfig.product.skuid+"" != r.skuStockVenders[i].skuId && topCount < 3){
			if(r.skuStockVenders[i].venderId==46875){ //����TJ
				cutCount ++;
			}
			else{
				spuVenderInfos += '<li id="J_'+r.skuStockVenders[i].skuId+'"><div class="fl"><a href="http://item.jd.com/'+r.skuStockVenders[i].skuId+'.html" clstag="shangpin|keycount|product|yipinduoshang" target="_blank">'+((r.skuStockVenders[i].venderId&&(r.skuStockVenders[i].skuId+"").length==10)?r.skuStockVenders[i].venderName:'�����̳�')+'</a></div><div class="lh hl_red"></div></li>';				
				if($('#jd-seller1 #J_'+r.skuStockVenders[i].skuId).length>0)$("#jd-seller,#jd-seller1").remove();
				topCount ++;
			}
        }
    }
    $('<div id="ypds-info"><a href="'+spuPageUrl+'" class="hl_blue" target="_blank">'+(r.totalCount-cutCount)+'����������</a><span class="hl_red">\u3000��'+(r.minPrice+"")+'</span> ��</div>').insertAfter("#choose"); 
    spuVenderInfos = '<div class="mt"><span class="fl"><b>'+(pageConfig.product.cat[0]==1713?('<a href="'+spuPageUrl+'" target="_blank"><font style="color:#005EA7">'+(r.totalCount-cutCount)+'����������</font></a>'):'������������')+'</b></span><span class="extra"><a href="'
                                        +spuPageUrl+'" class="hl_blue" target="_blank">�鿴ȫ��</a></span></div><div class="mc"><ul>'+spuVenderInfos;
    spuVenderInfos += '</ul></div>';
    $(spuVenderInfos).appendTo("#ypds-list");
    var sellerArray = $("#ypds-list li");
	var skuIds = [];
    for (var i=0,j=sellerArray.length;i<j;i++){
		skuIds.push(sellerArray.eq(i).attr("id"));
    }
	if(skuIds.length>0){
		$.ajax({
				url:"http://p.3.cn/prices/mgets?callback=?",
				data:{skuIds:skuIds.join(","),type:1},
				dataType:"jsonp",
				success:function(r){
					if(r&&r.length>0){
						for (var i=0,j=r.length;i<j;i++){
							$("#"+r[i].id+" .hl_red").html(new Number(r[i].p)>0?("��"+r[i].p):"���ޱ���");
						}
					}
				}
			});
	}
}
(function(){
    $.getJSONP(spuServiceUrl+"1_4_1_0_0_"+(pageConfig.product.cat[0]==1713?"1":"0")+"_"+pageConfig.product.skuid+"_1&callback=showProvinceStockDeliver");
})();
}
