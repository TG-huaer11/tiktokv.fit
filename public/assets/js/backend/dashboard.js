define(['jquery', 'bootstrap', 'backend', 'addtabs', 'table', 'echarts', 'echarts-theme', 'template'], function ($, undefined, Backend, Datatable, Table, Echarts, undefined, Template) {
    // 指定图表的配置项和数据
    var option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [],
            type: 'line',
            areaStyle: {}
        }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        }
    };

    var Controller = {
        index: function () {
// 初始化表格参数配置
            Table.api.init();

            //绑定事件
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var panel = $($(this).attr("href"));
                if (panel.size() > 0) {
                    Controller.table[panel.attr("id")].call(this);
                    $(this).on('click', function (e) {
                        $($(this).attr("href")).find(".btn-refresh").trigger("click");
                    });
                }
                //移除绑定的事件
                $(this).unbind('shown.bs.tab');
            });

            //必须默认触发shown.bs.tab事件
            $('ul.nav-tabs li.active a[data-toggle="tab"]').trigger("shown.bs.tab");
        },
        table: {
            //注册
            register: function () {

                // 基于准备好的dom，初始化echarts实例
                var myChart = Echarts.init(document.getElementById('registerEchart'), 'walden');

                //获取配置信息
                Fast.api.ajax({
                    url: "dashboard/register",
                    type: "POTS",
                    dataType: 'json',
                    loading: false,
                    success: function (res) {
                        option.xAxis.data = res.days;
                        option.series[0].data = res.datas;
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    }
                })

                $(window).resize(function () {
                    myChart.resize();
                });
            },
            // 充值
            recharge: function () {

                // 基于准备好的dom，初始化echarts实例
                var myChart = Echarts.init(document.getElementById('rechargeEchart'), 'walden');

                //获取配置信息
                Fast.api.ajax({
                    url: "dashboard/recharge",
                    type: "POTS",
                    dataType: 'json',
                    loading: false,
                    success: function (res) {
                        option.xAxis.data = res.days;
                        option.series[0].data = res.datas;
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    }
                })

                $(window).resize(function () {
                    myChart.resize();
                });
            },
            // 取款
            withdraw: function () {

                // 基于准备好的dom，初始化echarts实例
                var myChart = Echarts.init(document.getElementById('withdrawEchart'), 'walden');

                //获取配置信息
                Fast.api.ajax({
                    url: "dashboard/withdraw",
                    type: "POTS",
                    dataType: 'json',
                    loading: false,
                    success: function (res) {
                        option.xAxis.data = res.days;
                        option.series[0].data = res.datas;
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    }
                })

                $(window).resize(function () {

                    myChart.resize();
                });
            },
            // 盈利
            profit: function () {

                // 基于准备好的dom，初始化echarts实例
                var myChart = Echarts.init(document.getElementById('profitEchart'), 'walden');

                //获取配置信息
                Fast.api.ajax({
                    url: "dashboard/money",
                    type: "POTS",
                    dataType: 'json',
                    loading: false,
                    success: function (res) {
                        option.xAxis.data = res.days;
                        option.series[0].data = res.datas;
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    }
                })

                $(window).resize(function () {
                    myChart.resize();
                });
            }
        }
    };

    return Controller;
});
