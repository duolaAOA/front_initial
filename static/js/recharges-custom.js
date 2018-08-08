function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


(function(document, window, $) {
    var datas = [];
    for (var i = 0; i < 1000; i++) {
        datas[i] = {
            "id": i ,
            "out_trade_no":randomString(32),
            "user": "admin" + i,
            "amount": i,
            "score": i,
            "status": "支付成功",
            "pay_type": "微信支付",
            "created_at": "2018-06-1" + i,
            "finished_at": "2018-08-1" + i,
            "msg": "{\"openid\": \"wxd930ea5d5a258f4f\", \"sub_mch_id\": null, \"cash_fee_type\": \"CNY\", \"settlement_total_fee\": \"301\", \"nonce_str\": \"KnFueXRQbEyYcw7JVdsovq6N9kLzG3rZ\", \"return_code\": \"SUCCESS\", \"err_code_des\": \"SUCCESS\", \"time_end\": \"20180720170444\", \"mch_id\": \"1353383502\", \"trade_type\": \"NATIVE\", \"trade_state_desc\": \"ok\", \"trade_state\": \"SUCCESS\", \"sign\": \"0A974E9BCF1BB6E79DDDA2215374DF80\", \"cash_fee\": \"301\", \"is_subscribe\": \"Y\", \"return_msg\": \"OK\", \"fee_type\": \"CNY\", \"bank_type\": \"CMC\", \"attach\": \"sandbox_attach\", \"device_info\": \"sandbox\", \"out_trade_no\": \"z-20180720162939-19472560\", \"transaction_id\": \"4914992017520180720170444323968\", \"total_fee\": \"301\", \"appid\": \"wxaac7ec0426a05c6c\", \"result_code\": \"SUCCESS\", \"err_code\": \"SUCCESS\"}"
        }
    }

    // 'use strict';
    // Example Bootstrap Table Events
    // ------------------------------
    (function() {
        $('#rechargesTable').bootstrapTable({
            // url: "../static/js/demo/bootstrap_table_test.json",//请求URL（*）
            // url: 'http://127.0.0.1:8008/recharge/1',
            // method: 'get',
            // contentType: "application/x-www-form-urlencoded",
            search: true,
            //是否显示表格搜索
            pageNumber: 1,
            //初始化加载第一页，默认第一页
            pagination: true,
            // 是否显示分页
            pageSize: 20,
            // 每页显示数量
            pageList: [10, 25, 50, 100, 200],
            //可供选择的每页的行数（*）
            // sidePagination: 'server',           // 服务端分页
            // queryParams:queryParams,//请求服务器时所传的参数
            toolbar: '#toolbar',
            //指定工具栏
            // dataType: "json",
            showRefresh: true,
            // 是否显示刷新按钮
            striped: true,
            //是否显示行间隔色
            clickToSelect: true,
            //是否启用点击选中行
            showColumns: true,
            // 是否显示所有列(显示的)
            showToggle: true,
            //是否显示详细视图和列表视图的切换按钮
            detailView: false,
            //是否显示父子表
            // responseHandler:responseHandler, //在渲染页面数据之前执行的方法，
            iconSize: 'outline',
            icons: {
                refresh: 'glyphicon-repeat',
                toggle: 'glyphicon-list-alt',
                columns: 'glyphicon-list'
            },
            columns: [
                {
                    field: 'check',
                    checkbox: true
                },
                {
                    field: "id"

                },
                {
                    field: "out_trade_no"

                },
                {
                    field: "user"
                },
                {
                    field: "amount"
                    
                },
                {
                    field: "score"
                    
                },
                {
                    field: "status",

                },
                {
                    field: "pay_type"
                    
                },
                {
                    field: "created_at"
                    
                },
                {
                    field: "finished_at"
                    
                },
                {
                    field: "msg"
                    
                }

            ],
            data: datas
        });
    })();
})(document, window, jQuery);