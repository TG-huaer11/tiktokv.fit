define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'kdm/index',
                    add_url: 'kdm/add',
                    edit_url: 'kdm/edit',
                    del_url: 'kdm/del',
                    multi_url: 'kdm/multi',
                    table: 'kd',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                search: false,
                columns: [
                    [
                        {checkbox: true},
                     
                        {
                            field: 'day',
                            title: "第几天",
                             formatter: Table.api.formatter.normal,
                         searchList: {"1": '第一天', "2": '第二天', "3": '第三天', "4": '第四天'
                             , "5": '第五天', "6": '第六天', "7": '第七天', "8": '第八天', "9": '第九天', "10": '第十天'
                         }
                         
                        },
                        {
                            field: 'num',
                            title: '第几单',
                        
                        },
                        {
                            field: 'amount',
                            title: '卡单金额',
                      
                        },
                          {
                            field: 'income',
                            title: '佣金比例',
                      
                        },
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                        },
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});