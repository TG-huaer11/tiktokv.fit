define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'report/index',
                    table: 'report',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                search: false,
                searchFormVisible:true,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'date', title: __('Date'), operate: false},
                        {field: 'recharge', title: __('Recharge'), operate: false},
                        {field: 'lottery', title: __('Lottery'), operate: false},
                        {field: 'water', title: __('Water'), operate: false},
                        {field: 'deposit', title: __('Deposits'), operate: false},
                        {
                            field: 'time', title: __('Time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                            visible: false
                        },
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };

    return Controller;
});