var Promotions = {
    init: function(sku) {
        this.sku = sku || pageConfig.product.skuid;
        this.ipLoc = readCookie('ipLoc-djd') || '1';
        this.get();
    },
    get: function() {
        var _this = this;
        $.ajax({
            url: 'http://jprice.360buy.com/pageadword/' + _this.sku + '-1-1-'+ this.ipLoc.replace(/-/g, '_') +'.html?callback=Promotions.set',
            dataType: "script",
            cache: true,
            scriptCharset: "utf-8"
        });
    },
    set: function(result) {
        var promotionsDiv = $('#summary-promotion .dd'),
            promotionsExtraDiv = $('#summary-promotion-extra .dd'),
            giftsDiv = $('#summary-gifts .dd'),
            tips = $('#summary-tips .dd');

        var promotionsItems = [],
            promotionsItemsExtra = [],
            promoType10 = [],
            giftsItems = [],
            tipsItems = [];

        var infoList = result.promotionInfoList;
        var skuId = result.skuId;
        var str_len = (pageConfig.wideVersion && pageConfig.compatible) ? 35 : 25;
        var gift_TPL = '{for item in adwordGiftSkuList}{if item.giftType==2}'
            +'<div class="li-img">'
            + '<a target="_blank" href="http://item.jd.com/${item.skuId}.html">{if item.imagePath !== ""}<img src="${pageConfig.FN_GetImageDomain(item.skuId)}n5/${item.imagePath}" width="25" height="25" />{else}<img src="http://misc.360buyimg.com/product/skin/2012/i/gift.png" width="25" height="25" />{/if}'
            + '{if item.name.length > '+str_len+'}${item.name.substring(0,'+(str_len-1)+')+"..."}{else}${item.name}{/if}</a>'
            + '<em class="hl_red"> �� ${item.number}</em>'
            +'</div>'
            +'{/if}{/for}';

        if (infoList !== null && infoList.length > 0) {
            for (var i = 0; i < infoList.length; i++) {
                var levelText = G.getNewUserLevel(infoList[i].userLevel);
                var coupon = infoList[i].adwordCouponList;
                var limText = '';
                if ( infoList[i].minNum > 0 || infoList[i].maxNum > 0 ) {
                    if ( infoList[i].minNum > 0 && infoList[i].maxNum == 0 ) {
                        limText = '��������' + infoList[i].minNum + '��ʱ�����Ż�';
                    } else if ( infoList[i].minNum == 0 && infoList[i].maxNum > 0 ) {
                        limText = '�������' + infoList[i].maxNum + '��ʱ�����Ż�';
                    } else if ( infoList[i].minNum < infoList[i].maxNum ) {
                        limText = '����' + infoList[i].minNum + '-' + infoList[i].maxNum + '��ʱ�����Ż�';
                    } else if ( infoList[i].minNum == infoList[i].maxNum ) {
                        limText = '����' + infoList[i].minNum + '��ʱ�����Ż�';
                    }
                }
                // ��Ա����
                var huiyuantexiang = infoList[i].userLevel > 50 && infoList[i].minNum == 0 && infoList[i].maxNum == 0 && infoList[i].needJBeanNum <= 0;
                // ��Ա���� �޹�
                var huiyuantexiang_xianguo = infoList[i].userLevel > 50 && (infoList[i].minNum > 0 || infoList[i].maxNum > 0) && infoList[i].needJBeanNum <= 0;
                // ֻ���޹�
                var xiangou = (infoList[i].minNum > 0 || infoList[i].maxNum > 0) && infoList[i].userLevel <= 50 && infoList[i].needJBeanNum <= 0;
                // �ǻ�Ա���޹�
                var normal = infoList[i].userLevel <= 50 && infoList[i].minNum == 0 && infoList[i].maxNum == 0 && infoList[i].needJBeanNum <= 0;
                //�����Żݹ�
                var jBean = infoList[i].userLevel <= 50 && infoList[i].minNum == 0 && infoList[i].maxNum == 0 && infoList[i].needJBeanNum > 0;
                // ��ȡȯ��Ϣ
                function setCoupon(coupon) {
                    if (coupon != null && coupon.length > 0) {
                        $.each(coupon, function(name, value) {
                            if (value.type == 1) {
                                var xianpinlei = value.key != null && value.key != "";
                                var xianpinleiTxt = xianpinlei ? '��Ʒ��': '';
                                // ��Ʒ��ȯ����
                                var xianpinleiguanggao = value.adWord != null && value.adWord.length > 0 ? '��' + value.adWord + ')' : '';
                                // ȯ��Ա����
                                if (huiyuantexiang) {
                                    promotionsItems.push('<em class="hl_red_bg">��ȯ</em><em class="hl_red">' + levelText + '�����ϻ�Ա��' + value.couponQouta + 'Ԫ'+ xianpinleiTxt +'��ȯ'+ xianpinleiguanggao +'</em>');
                                }
                                // ȯ��Ա���� �޹�
                                if (huiyuantexiang_xianguo) {
                                    promotionsItems.push('<em class="hl_red_bg">��ȯ</em><em class="hl_red">' + levelText + '�����ϻ�Ա��' + value.couponQouta + 'Ԫ'+ xianpinleiTxt +'��ȯ'+ xianpinleiguanggao +'����'+ limText +'</em>');
                                }
                                // ȯ�޹�
                                if (xiangou) {
                                    promotionsItems.push( '<em class="hl_red_bg">��ȯ</em><em class="hl_red">��' + value.couponQouta + 'Ԫ'+ xianpinleiTxt +'��ȯ'+ xianpinleiguanggao +'����' + limText + '</em>');
                                }
                                // ��ͨ��ȯ
                                if (normal) {
                                    promotionsItems.push('<em class="hl_red_bg">��ȯ</em><em class="hl_red">��' + value.couponQouta + 'Ԫ'+ xianpinleiTxt +'��ȯ'+ xianpinleiguanggao +'</em>');
                                }
                            }
                        });
                    }
                }
                // ��ȡ����
                function setScore(score) {
                    if ( score > 0) {
                        // ������Ա����
                        if (huiyuantexiang) {
                            promotionsItems.push( '<em class="hl_red_bg">������</em><em class="hl_red">' + levelText + '�����ϻ�Ա��' + score + '����</em>' );
                        }
                        // ������Ա���� �޹�
                        if (huiyuantexiang_xianguo) {
                            promotionsItems.push( '<em class="hl_red_bg">������</em><em class="hl_red">' + levelText + '�����ϻ�Ա��' + score + '��������'+ limText +'</em>');
                        }
                        // �����޹�
                        if (xiangou) {
                            promotionsItems.push( '<em class="hl_red_bg">������</em><em class="hl_red">��' + score + '��������' + limText + '</em>');
                        }
                        // ��ͨ������
                        if (normal) {
                            promotionsItems.push('<em class="hl_red_bg">������</em><em class="hl_red">��' + score + '����</em>');
                        }
                    }
                }
                //��Ʒ����
                if (infoList[i].promoType == 1) {
                    // ��Ա����
                    if ( infoList[i].price > 0 ) {
                        if (huiyuantexiang) {
                            promotionsItems.push( '<em class="hl_red_bg">��Ա����</em><em class="hl_red">' + levelText + '�����ϻ�Ա�ۣ���' + infoList[i].price + '</em>');
                        }
                        if (huiyuantexiang_xianguo) {
                            promotionsItems.push( '<em class="hl_red_bg">��Ա����</em><em class="hl_red">' + levelText + '�����ϻ�Ա�ۣ���' + infoList[i].price + '����'+ limText +'</em>');
                        }
                    }
                    // ��ֱͨ��
                    if ( infoList[i].discount > 0 && normal ) {
                        promotionsItems.push( '<em class="hl_red_bg">ֱ��</em><em class="hl_red">���Żݣ�' + infoList[i].discount + '</em>');
                    }
                    // �޹�
                    if ( infoList[i].discount > 0 && xiangou ) {
                        promotionsItems.push( '<em class="hl_red_bg">�޹�</em><em class="hl_red">���Żݣ�' + infoList[i].discount + '����' + limText + '</em>');
                    }
                    //�����Żݹ�
                    if(jBean && infoList[i].price > 0) {
                        promotionsItems.push( '<em class="hl_red_bg">�����Żݹ�</em><em class="hl_red">ʹ��' + infoList[i].needJBeanNum + '�����������Żݼ�' + infoList[i].price + 'Ԫ</em>');
                    }
                    setCoupon(infoList[i].adwordCouponList);
                    setScore(infoList[i].score);
                    var tuanTag = '',
                        orginServiceText = $('#summary-service .dd').html();
                    if ( infoList[i].extType == 8 ) {
                        tuanTag = '����';
                        $('#summary-service .dd').html( orginServiceText.replace('��֧�ֻ�������', '') );
                        if ( $('#tuan-shouhou').length < 1 ) {
                            $('#product-detail-5 .item-detail').html('<div id="tuan-shouhou"><p>��������������Ʒ�����������Ͽ�����Լ����ͬ������Լ����</p> <ul> <li>1��������Ʒһ���۳��������������⣬ˡ���˻���</li> <li>2���û��յ���Ʒ��ʮ�����ڣ��Կ�ݹ�˾�ͻ����ϵ�ǩ������Ϊ׼������Ʒ�����������⣬��ͨ���ҵľ���-����/�˻���ҳ����������˻����������ݹ��������� ����������ְܾ䲼����ع涨ʵʩ������������Ʒ����������ع涨ͨ������վ����ϵ�����̳ǿͷ���Ա�����˻���������������ƷΪ������Ʒ���û��Ͽ�ǰ�������½������˻�������</li> <li>3��ʵʩ���ҡ�����������Ʒ���û����յ���Ʒ��ʮ��������Ʒ�����������⣨�Կ�ݹ�˾�ͻ����ϵ�ǩ������Ϊ׼����������Ч������Ʒ������ά���Բ�������ʹ�õģ������۷������ṩͬ�ͺ�ͬ�����Ʒ�򲻵���ԭ��Ʒ���ܵ�ͬƷ�Ʋ�Ʒʱ���û��Ͽɽ�ѡ��������߰����˻�����</li> </ul> <p><strong>�ر���ʾ��</strong></p> <ul> <li>1������������ָ������ع涨�����������ܹ��ϻ򲻷��Ϲ����йط��桢ǿ����������׼�Բ�Ʒ���á���ȫ���������Ե�Ҫ�����û�����ԭ���µ����ܹ��ϻ�������ع涨�������ܡ���������������γ��⡣�û������˻�ʱ���ṩȨ���������ߵĲ�Ʒ������������ļ�ⱨ�档</li> <li>2���û������˻�����ʱ����ؽ�ԭװ��Ʒ���������Ʒ����Ʊ������ƾ֤���������ϵ�ȫ���Ļأ������޷������˻���</li> <li>3���û��ڽ��տ��ʱ��Ӧ�鿴�������װ�Ƿ������Ե����𡢲����쳣�������쳣�û��ɾ��գ����ɿ����Ա���쳣�����������ʱ�������װ��ã����û� ��������Ա���������������Ʒ������Ƿ��빺����Ʒһ�¡��Ƿ���ȱʧ�����������վ������һ�µ��쳣����������쳣���û��ɾ��գ����ɿ����Ա���쳣�� �����û�����ݱ�ע�쳣��֤������Ʒ�쳣������������档������Ʒһ��ǩ�գ��������û���ȫ�Ͽɲ�������Ʒ�������෴֤�ݣ��û������Ի�������ȱ���� ��Ʒ��������վ������ԭ��Ҫ���˻���</li> <li>�û����������ۺ�����Լ����Ϊ����빺��������Ʒʱ����վ����ҪԼ���ɷָ����ɲ��֡�����Լ���뱾��վ��ʾ���ۺ�������߳�ͻ�ģ�������Լ��Ϊ׼��δԼ�������԰�����վ��ʾ������ִ�С�</li> </ul></div>');
                        }
                    } else if ( infoList[i].extType == 4 ) {
                        tuanTag = '�Ź�';
                    }
                    if ( infoList[i].extType == 8 || infoList[i].extType == 4) {
                        promotionsItems[0] = promotionsItems[0].replace(/hl_red_bg">[\u4e00-\u9fa5]+</, 'hl_red_bg">'+ tuanTag +'<');
                        if ( $('#tuan-tag').length > 0 ) {
                            $('#tuan-tag').html('['+tuanTag+'] ');
                        } else {
                            $('#name h1').prepend('<span class="hl_red" id="tuan-tag">['+ tuanTag +'] </span>');
                        }
                    }
                }
                //��Ʒ����
                var giftCondition='';
                if(huiyuantexiang_xianguo || xiangou){
                    var buyNum='';
                    if ( infoList[i].minNum > 0 || infoList[i].maxNum > 0 ) {
                        if ( infoList[i].minNum > 0 && infoList[i].maxNum == 0 ) {
                            buyNum = '����' + infoList[i].minNum + '��������';
                        } else if ( infoList[i].minNum == 0 && infoList[i].maxNum > 0 ) {
                            buyNum = '����' + infoList[i].maxNum + '��������';
                        } else if ( infoList[i].minNum < infoList[i].maxNum ) {
                            buyNum = '����' + infoList[i].minNum + '-' + infoList[i].maxNum + '��';
                        } else if ( infoList[i].minNum == infoList[i].maxNum ) {
                            buyNum = '����' + infoList[i].minNum + '��';
                        }
                    }
                    giftCondition = huiyuantexiang_xianguo? '��������'+ buyNum +'��'+levelText+'�����ϻ�Ա��':'��������'+ buyNum +'��';
                }
                if(huiyuantexiang){
                    giftCondition ='��������'+levelText+'�����ϻ�Ա��';
                }

                //�������
                if (infoList[i].promoType == 2 && infoList[i].minNum > 1) {
                    // promotionsItems.push('<em class="hl_red_bg">����</em>����' + infoList[i].minNum + '�������·���Ʒ');
                    var giftList = infoList[i].adwordGiftSkuList;
                    if ( giftList.length > 0 & giftList !== null ) {
                        promotionsItems.push('<em class="hl_red_bg">��Ʒ</em><em class="hl_red">���·���������Ʒ�����꼴ֹ' +giftCondition+'</em>');
                        var res = gift_TPL.process( infoList[i] );
                        if ( res !== '' ) {
                            giftsItems.push( res );
                        }
                    }
                }
                // �ⶥ����
                if (infoList[i].promoType == 15 && infoList[i].rebate > 0) {
                    var rebate = infoList[i].rebate;
                    var bookTopAdword = '<em class="hl_red_bg">�ⶥ</em>����Ʒ����'+ (rebate*10).toFixed(1) +'�۷ⶥ�';
                    var adwordLink = infoList[i].adwordUrl;
                    if (adwordLink != null && adwordLink.length > 0) {
                        bookTopAdword += '<a href="'+ adwordLink +'" target="_blank">&nbsp;&nbsp;���� <s class="s-arrow">&gt;&gt;</s></a>';
                    }
                    promotionsItems.push(bookTopAdword);
                }
                // ��Ʒ����
                if (infoList[i].promoType == 4) {
                    var giftList = infoList[i].adwordGiftSkuList;
                    if ( giftList.length > 0 & giftList !== null ) {
                        for (var k = 0; k < giftList.length; k++) {
                            if (giftList[k].giftType == 2) {
                                promotionsItems.push('<em class="hl_red_bg">��Ʒ</em><em class="hl_red">���·���������Ʒ�����꼴ֹ' +giftCondition+'</em>');
                                break;
                            }
                        }

                        var res = gift_TPL.process( infoList[i] );
                        if ( res !== '' ) {
                            giftsItems.push( res );
                        }
                    }
                    setCoupon(infoList[i].adwordCouponList);
                    setScore(infoList[i].score);
                }
                //����
                if (infoList[i].adwordGiftSkuList !== null && infoList[i].adwordGiftSkuList.length > 0) {
                    var gift_list = infoList[i].adwordGiftSkuList;
                    if ( $('#product-fj').length < 1 ) {
                        $('#product-detail-3').append('<div id="product-fj"></div>');
                        for (var k = 0; k < gift_list.length; k++) {
                            if (gift_list[k].giftType == 1) {
                                $('#product-fj').append('<div id="product-fj">' + gift_list[k].name + ' �� ' + gift_list[k].number + '</div>')
                            }
                        }
                    }
                }
				//������������
                if (infoList[i].promoType == 10) {
                    //�� ������
                    var FULL_REFUND = 1;
                    //ÿ��������
                    var FULL_REFUND_PER = 2;
                    //�Ӽ۹�
                    var EXTRA_PRICE = 4;
                    //��������
                    var FULL_LADDER = 6;
                    //�����ٷֱ�
                    var PERCENT = 8;
                    // MԪ��N��
                    var FULLREFUND_MPRICE_NNUM = 13;
                    // ��M����
                    var FULLREFUND_MNUN_ZENG = 14;
                    // ��M��N��
                    var FULLNUM_MNUM_NREBATE = 15;
                    // �����������Ӵ���
                    var FULLPRICE_MFMZ = 16;
                    // ��M��N�ۺ��������Ӵ���
                    var FULLNUM_REBATE_MFMZ = 17;
                    //������������������
                    var fullRefundType = infoList[i].fullRefundType;
                    var reward = infoList[i].reward;
                    var needMoney = infoList[i].needMondey;
                    var mzNeedMoney = infoList[i].mzNeedMoney;
                    var mzNeedNum = infoList[i].mzNeedNum;
                    var needNum = infoList[i].needNum;
                    var addMoney = infoList[i].addMoney;
                    var topMoney = infoList[i].topMoney;
                    var percent = infoList[i].percent;
                    var rebate = infoList[i].rebate;
                    var deliverNum = infoList[i].deliverNum;
                    var score = infoList[i].score;
                    var couponList = infoList[i].adwordCouponList;
                    var haveGifts = infoList[i].haveFullRefundGifts;
                    var jq = 0;
                    var fullLadderList = infoList[i].fullLadderDiscountList;
                    var adwordLink = infoList[i].adwordUrl;
                    var mfmzExtType = infoList[i].mfmzExtType;
                    //ƴ������������Ϣ
                    var fullRefundInfo = "";
                    if (couponList != null && couponList.length > 0) {
                        $.each(couponList, function(z, couponValue) {
                            if (couponValue.type == 1) {
                                jq = jq + coupon.couponQouta;
                            }
                        });
                    }
                    if (fullRefundType == FULL_REFUND) {
                        if ( needMoney > 0 && reward > 0 ) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + '����' + reward + '</em>';
                        }
                        if (haveGifts) {
                            fullRefundInfo = '<em class="hl_red"><em class="hl_red_bg">����</em>��' + needMoney + 'Ԫ����������Ʒ�����꼴ֹ</em>';
                        }
                        if (jq > 0 && needMoney > 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + 'Ԫ����' + jq + 'Ԫ��ȯ</em>';
                        }
                    } else if (fullRefundType == FULL_REFUND_PER) {
                        if ( needMoney > 0 && reward > 0 ) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">ÿ��' + needMoney + 'Ԫ���ɼ�' + reward + 'Ԫ�ֽ�</em>';
                            if (topMoney > 0) {
                                fullRefundInfo += '<em class="hl_red">�����ɼ�' + topMoney + 'Ԫ</em>';
                            }
                        } else {
                            if (haveGifts) {
                                fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">ÿ��' + needMoney + 'Ԫ���������꼴ֹ</em>';
                            } else if (jq > 0) {
                                fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">ÿ��' + needMoney + 'Ԫ������' + jq + 'Ԫ��ȯ</em>';
                            }
                        }
                    } else if (fullRefundType == EXTRA_PRICE) {
                        if ( needMoney > 0 && addMoney > 0 ) {
                            fullRefundInfo = '<em class="hl_red_bg">�Ӽ۹�</em><em class="hl_red">��' + needMoney + 'Ԫ���' + addMoney + 'Ԫ���ɹ���������Ʒ</em>';
                        }
                    } else if (fullRefundType == PERCENT) {
                        if ( needMoney > 0 && percent > 0 ) {
                            percent = percent * 100;
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + 'Ԫ���ɼ�' + percent + '%</em>';
                        }
                    } else if (fullRefundType == FULL_LADDER) {
                        if (fullLadderList != null && fullLadderList.length > 0) {
                            //fullRefundInfo = '<em class="hl_red_bg">����</em>����Ʒ�μӽ����������������Ʒ<br/>';
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                var tipsHtml = z == 0 ? '<em class="hl_red_bg">����</em>' : '',
                                    isFirstSign = z == 0 ? '' : '��';
                                if (fullLadderValue.needMoney > 0 && fullLadderValue.rewardMoney > 0) {
                                    fullRefundInfo = (fullRefundInfo + tipsHtml + '<em class="hl_red">'+ isFirstSign +'��' + fullLadderValue.needMoney + '��' + fullLadderValue.rewardMoney + '</em>');
                                }
                            });
                            //fullRefundInfo = fullRefundInfo.substring(0, fullRefundInfo.length - 1)
                        }
                    } else if (fullRefundType == 11) {
                        // ������������������
                        var moreLink = infoList[i].adwordUrl ? ' <a href="'+infoList[i].adwordUrl+'" target="_blank">����&raquo;</a>' : '';
                        var tipsHTML = '<em class="hl_red"><em class="hl_red_bg">�����Ż�</em>��'+ infoList[i].needNum +'�����������'+ infoList[i].deliverNum +'����Ʒ�۸�</em>' + moreLink;
                        if (tipsHTML!=='') {
                            promoType10.push(tipsHTML);
                        }
                    } else if (fullRefundType == 20) {
                        // ��Ʒ����������
                        var list = infoList[i].fullLadderDiscountList,
                            len = list.length, f,resText=[],resLink=infoList[i].adwordUrl;
                        for ( f = 0; f < len && len > 0; f++ ) {
                            resText.push('��'+ parseInt(list[f].needMoney) +'��'+ parseInt(list[f].rewardMoney));
                        }
                        if ( len > 0 ) {
                            promoType10.push('<em class="hl_red_bg">����</em><em class="hl_red">��������'+list[0].minPoolNum+'����Ʒ��'+resText.join('��') + ' <a href="'+resLink+'" target="_blank">����&raquo;</a></em>');
                        }
                    } else if (fullRefundType==FULLREFUND_MPRICE_NNUM) {
                        if ( needMoney > 0 && deliverNum > 0 ) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + 'Ԫ��' + deliverNum + '��</em>';
                        }
                    } else if (fullRefundType==FULLREFUND_MNUN_ZENG) {
                        if (haveGifts && needNum > 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needNum + '������������Ʒ�����꼴ֹ</em>';
                        }
                    } else if (fullRefundType==FULLNUM_MNUM_NREBATE) {
                        if (fullLadderList != null && fullLadderList.length > 0) {
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                var tipsHtml = z == 0 ? '<em class="hl_red_bg">�����Ż�</em>' : '',
                                    isFirstSign = z == 0 ? '' : '��';
                                if (fullLadderValue.needNum > 0 && fullLadderValue.rebate > 0) {
                                    fullRefundInfo = (fullRefundInfo + tipsHtml + '<em class="hl_red">'+ isFirstSign +'��' + fullLadderValue.needNum + '�����ܼ۴�' + (fullLadderValue.rebate*10).toFixed(1) + '��</em>');
                                }
                            });
                        } else {
                            if ( needNum > 0 && rebate > 0 ) {
                                fullRefundInfo = '<em class="hl_red_bg">�����Ż�</em><em class="hl_red">��' + needNum + '�����ܼ۴�' + (rebate*10).toFixed(1) + '��</em>';
                            }
                        }
                    } else if (fullRefundType==FULLPRICE_MFMZ) {
                        var mfmzExtTypeMF = 1;
                        var mfmzExtTypeMZ = 2;
                        var mfmzExtTypeMFJT = 3;
                        var mfmzExtTypeMZJT = 4;
                        var mfmzExtTypeMFMZ = 5;
                        if (mfmzExtType === mfmzExtTypeMF) {
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                if ( fullLadderValue.needMoney > 0 && fullLadderValue.rewardMoney > 0 ) {
                                    fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + fullLadderValue.needMoney + '����' + fullLadderValue.rewardMoney + '</em>';
                                }
                            });
                        }
                        if (mfmzExtType === mfmzExtTypeMZ) {
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                if ( fullLadderValue.rewardMoney <= 0 && fullLadderValue.needMoney > 0 && fullLadderValue.addMoney <= 0 ) {
                                    fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + fullLadderValue.needMoney + 'Ԫ����������Ʒ�����꼴ֹ</em>';
                                }
                                if (fullLadderValue.rewardMoney <= 0 && fullLadderValue.needMoney > 0 && fullLadderValue.addMoney > 0) {
                                    fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + fullLadderValue.needMoney + 'Ԫ���' + fullLadderValue.addMoney + 'Ԫ����������Ʒ�����꼴ֹ</em>';
                                }
                            });
                        }
                        if (mfmzExtType === mfmzExtTypeMFJT) {
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                var tipsHtml = z == 0 ? '<em class="hl_red_bg">����</em>' : '',
                                    isFirstSign = z == 0 ? '' : '��';
                                if (fullLadderValue.needMoney > 0 && fullLadderValue.rewardMoney > 0) {
                                    fullRefundInfo = (fullRefundInfo + tipsHtml + '<em class="hl_red">'+ isFirstSign +'��' + fullLadderValue.needMoney + '��' + fullLadderValue.rewardMoney + '</em>');
                                }
                            });
                        }
                        if (mfmzExtType === mfmzExtTypeMZJT) {
                            if (addMoney <= 0) {
                                $.each(fullLadderList, function(z, fullLadderValue) {
                                    var tipsHtml = z == 0 ? '<em class="hl_red_bg">����</em><em class="hl_red">' : '',
                                        isFirstSign = z == 0 ? '' : '����';
                                    if (fullLadderValue.needMoney > 0) {
                                        fullRefundInfo = (fullRefundInfo + tipsHtml + isFirstSign +'��' + fullLadderValue.needMoney + '����Ʒ');
                                    }
                                });
                                fullRefundInfo += '�����꼴ֹ</em>';
                            }
                            if (addMoney>0) {
                                $.each(fullLadderList, function(z, fullLadderValue) {
                                    var tipsHtml = z == 0 ? '<em class="hl_red_bg">�Ӽ۹�</em><em class="hl_red">' : '',
                                        isFirstSign = z == 0 ? '' : '����';
                                    if (fullLadderValue.needMoney > 0) {
                                        fullRefundInfo = (fullRefundInfo + tipsHtml + isFirstSign +'��' + fullLadderValue.needMoney + '���'+ fullLadderValue.addMoney +'Ԫ' );
                                    }
                                });
                                fullRefundInfo += '�����ɹ���������Ʒ</em>';
                            }
                        }
                        if (mfmzExtType === mfmzExtTypeMFMZ) {
                            $.each(fullLadderList, function(z, fullLadderValue) {
                                var tipsHtml = z == 0 ? '<em class="hl_red_bg">����</em>' : '';
                                var fullRefundInfo1 = '';
                                var fullRefundInfo2 = '';
                                fullRefundInfo += tipsHtml;
                                if ( fullLadderValue.mfmzTag == 1 ) {
                                    fullRefundInfo1 += '<em class="hl_red">��' + fullLadderValue.needMoney + '����' + fullLadderValue.rewardMoney + '</em>';
                                }
                                if ( fullLadderValue.mfmzTag == 2 && fullLadderValue.addMoney<=0 ) {
                                    fullRefundInfo2 += '��������' + fullLadderValue.needMoney + 'Ԫ���ɹ���������Ʒ</em>';
                                }
                                if ( fullLadderValue.mfmzTag == 2 && fullLadderValue.addMoney>0 ) {
                                    fullRefundInfo2 += '��������' + fullLadderValue.needMoney + 'Ԫ���' + fullLadderValue.addMoney + 'Ԫ���ɹ���������Ʒ</em>';
                                }
                                fullRefundInfo += fullRefundInfo1 + fullRefundInfo2;
                            });
                        }
                        // if ( needMoney > 0 && reward > 0 && mzNeedMoney <=0 ) {
                        // fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + '����' + reward + '</em>';
                        // }
                        // if (reward <= 0 && mzNeedMoney > 0 && addMoney <= 0 ) {
                        // fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + mzNeedMoney + 'Ԫ����������Ʒ�����꼴ֹ</em>';
                        // }
                        // if (reward <= 0 && mzNeedMoney > 0 && addMoney > 0 ) {
                        // fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + mzNeedMoney + 'Ԫ���' + addMoney + 'Ԫ����������Ʒ�����꼴ֹ</em>';
                        // }
                        // if ( needMoney > 0 && reward > 0 && mzNeedMoney > 0 && addMoney <= 0 ) {
                        // fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + '����' + reward + '��������' + mzNeedMoney + 'Ԫ���ɹ���������Ʒ</em>';
                        // }
                        // if ( needMoney > 0 && reward > 0 && mzNeedMoney > 0 && addMoney > 0 ) {
                        // fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needMoney + '����' + reward + '��������' + mzNeedMoney + 'Ԫ���' + addMoney + 'Ԫ���ɹ���������Ʒ</em>';
                        // }
                    } else if (fullRefundType==FULLNUM_REBATE_MFMZ) {
                        if ( needNum > 0 && rebate > 0 && addMoney <= 0 && mzNeedNum > 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needNum + '�����ܼ۴�' + (rebate*10).toFixed(1) + '�ۣ�����������Ʒ�����꼴ֹ</em>';
                        }
                        if ( needNum > 0 && rebate > 0 && addMoney > 0 && mzNeedNum > 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��' + needNum + '�����ܼ۴�' + (rebate*10).toFixed(1) + '�ۣ��ټ�' + addMoney + 'Ԫ��������Ʒ�����꼴ֹ</em>';
                        }
                        if ( mzNeedNum <= 0 && needNum > 0 && rebate > 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��'+ needNum +'�����ܼ۴�' + (rebate*10).toFixed(1) + '��</em>';
                        }
                        if ( mzNeedNum > 0 && addMoney <= 0 && rebate <= 0) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��'+ mzNeedNum +'����������Ʒ�����꼴ֹ</em>';
                        }
                        if ( mzNeedNum > 0 && addMoney > 0 && rebate <= 0 ) {
                            fullRefundInfo = '<em class="hl_red_bg">����</em><em class="hl_red">��'+ mzNeedNum +'�����ټ�' + addMoney + 'Ԫ��������Ʒ�����꼴ֹ</em>';
                        }
                    }
                    var fullRefundTotalInfo = "";
                    if (fullRefundInfo != "") {
                        if (adwordLink != null && adwordLink.length > 0) {
                            fullRefundInfo = fullRefundInfo + '<a href="'+ adwordLink +'" target="_blank">&nbsp;&nbsp;���� <s class="s-arrow">&gt;&gt;</s></a>';
                            //"<a target=\"_blank\" style='color:#CE0000' xx='oo' href=\"" + adwordLink + "\">" + + "</a>";
                        }
                        fullRefundTotalInfo = fullRefundInfo;
                    }
                    if (fullRefundTotalInfo!=='') {
                        promoType10.push(fullRefundTotalInfo);
                    }
                }

                // �Ƿ���ʱ����
                if (infoList[i].limitTimePromo == 1) {
                    if ( $('#a-tips').length < 1 ) {
                        $('#summary-price strong').after('<em id="a-tips">&nbsp;������������&nbsp;</em>');
                    }
                }
            }
        }
        // ���ܲ���
        // if ( !!result.subsidyMoney == true && pageConfig.product.cat[1] !== 794 ) {
        if ( false ) {
            var isBr = tipsItems.length > 0 ? '<br/>' : '';
            $('#choose-btn-append').addClass('choose-btn-append-lite');
            tipsItems.push(isBr + '<em class="hl_red_bg">���ܲ���</em>�μӽ��ܲ������µ�������' + parseFloat(result.subsidyMoney).toFixed(2) + '&nbsp;&nbsp;<a href="http://help.360buy.com/help/question-91.html" target="_blank">�鿴����ϸ��</a><br>');
            if ($('#choose-btn-subsidy').length <= 0) {
                $('#choose-btn-append').before('<div id="choose-btn-subsidy" class="btn"><a class="btn-subsidies" clstag="shangpin|keycount|product|jieneng" href="http://jd2008.360buy.com/purchase/orderinfo_elePow.aspx?pid='+pageConfig.product.skuid+'&pcount='+$('#buy-num').val()+'&ptype=1">�μӽ��ܲ���<b></b></a></div>');
                setAmount.targetLink = $('#choose-btn-subsidy .btn-subsidies,#choose-btn-append .btn-append');
            }
        } else {
            $('#choose-btn-subsidy').remove();
        }
        (function() {
            var txtPerfix = '����Ʒ����ʹ��',
                txtDq = '',
                txtJq = '',
                txtTips = '',
                infoList = result.infoList;
            if (!infoList || infoList.length < 1) {
                return;
            }
            for (var m = 0; m < infoList.length; m++ ) {
                if ( infoList[m] === 1 ) {
                    txtDq += ' ��ȯ';
                }
                if ( infoList[m] === 2 ) {
                    txtJq += ' ��ȯ';
                }
                if ( infoList[m] === 3 ) {
                    txtTips += '<a class="hl_red" href="http://help.360buy.com/help/question-97.html" target="_blank" title="�ۺ󵽼ң�����Ծ���ָ����Ʒ��������Ʒ�۳�һ���ڣ�������������⣬�������ṩ�������ȡ�ͼ�ԭ����Ȩά�޷���">����һ���ھ����ۺ󵽼ҷ�������ȡ��ά�ޣ�</a><br/>'
                }
            }
            if ( txtDq === '' && txtJq === '' ) {
                tipsItems.push(txtTips);
            } else {
                tipsItems.push('<em class="hl_red">' + txtPerfix + txtDq + txtJq + '</em><br>');
                tipsItems.push(txtTips);
            }
        })();
        // �ݳ�Ʒ
        if (pageConfig.product.tips == true) {
            var strPerfix = tipsItems.length > 0 ? '<br/>' : '';
            tipsItems.push(strPerfix + '����Ʒ����7�������˻�������');
        }
        // ��Ʒ��ʾ
        if (giftsItems.length > 0) {
            giftsDiv.parent().show();
            giftsDiv.html( '<div id="product-gifts">' + giftsItems.join('') + '</div>' );
        } else {
            giftsDiv.parent().hide();
        }
        // ������Ϣ
        if (promotionsItems.length > 0 || promoType10.length > 0) {
            promotionsDiv.parent().show();
            var resPromoType10 = [];

            if (promoType10.length > 1) {
                if (promotionsItems.length > 0) {
                    resPromoType10 = ['<br />���´��������ڹ��ﳵ��ѡ��һ'].concat(promoType10);
                } else {
                    resPromoType10 = ['���´��������ڹ��ﳵ��ѡ��һ'].concat(promoType10);
                }
            } else {
                if (promotionsItems.length > 0 && promoType10[0]) {
                    promoType10[0] = '<br />' + promoType10[0];
                }
                resPromoType10 = promoType10;
            }

            if ( $('#product-promotions').length > 0 ) {
                $('#product-promotions').html( promotionsItems.join('<br />') + resPromoType10.join('<br />') );
            } else {
                promotionsDiv.prepend('<div id="product-promotions">' + promotionsItems.join('<br />') + resPromoType10.join('<br />') + '</div>');
            }

        } else {

            if ( promotionsDiv.html() == '' ) {
                promotionsDiv.parent().hide();
            }
        }

        // ������Ϣ extra
        if (promotionsItemsExtra.length > 0) {
            promotionsExtraDiv.parent().show();
            promotionsExtraDiv.html( '<div id="product-prom-ext">' + promotionsItemsExtra.join('&nbsp;&nbsp;&nbsp;&nbsp;') + '</div>' );
        } else {
            promotionsExtraDiv.parent().hide();
        }
        // ��ܰ��ʾ
        if (tipsItems.length > 0) {
            tips.parent().show();
            tips.html( '<div id="product-tips">' + tipsItems.join('&nbsp;') + '</div>' );
        } else {
            tips.parent().hide();
        }
        // ����[��ȯ]������Ϣ
        if ( !!pageConfig.product ) {
            this.getExtraPromotions(pageConfig.product.skuid, G.cat[2]);
        }
    },
    clear: function() {
        $('#product-gifts,#product-promotions,#product-prom-ext,#product-tips').remove();
        $('#summary-promotion,#summary-promotion-extra,#summary-gifts,#summary-tips').hide();
    },
    getExtraPromotions: function(sku, catId) {
        var sku = sku,
            catId = catId,
            holder = $('#summary-promotion .dd');

        $.ajax({
            url: 'http://bank.market.360buy.com/bank/show_index.action?',
            data: {
                sku: sku,
                csId: catId
            },
            dataType: 'jsonp',
            success: function(r) {
                var text = '&nbsp;<a href="{href}" target="_blank">���� <s class="s-arrow">&gt;&gt;</s></a>';
                if ( !r && !r.title ) {
                    return;
                }
                text = !!r.actUrl ? text.replace('{href}', r.actUrl) : '';

                if ( $('#extra-promotions').length > 0 ) {
                    $('#extra-promotions').html('<em class="hl_red_bg">���ȯ</em><em class="hl_red">'+ unescape(r.title.replace(/\\/g, '%')) +'</em>'+ text);
                } else {
                    holder.append('<div id="extra-promotions"><em class="hl_red_bg">���ȯ</em><em class="hl_red">'+ unescape(r.title.replace(/\\/g, '%')) +'</em>'+ text +' </div>');
                }
                $('#summary-promotion').show();
            }
        });
    }
};
if (typeof G !== 'undefined' && !pageConfig.promotionInited ) {
    Promotions.init(G.sku);
}
