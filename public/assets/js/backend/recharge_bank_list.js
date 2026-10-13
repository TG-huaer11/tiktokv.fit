define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'recharge_bank_list/index',
                    add_url: 'recharge_bank_list/add',
                    edit_url: 'recharge_bank_list/edit',
                    del_url: 'recharge_bank_list/del',
                    multi_url: 'recharge_bank_list/multi',
                    table: 'recharge_banklist',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'nick', title: __('Nick'), operate: 'LIKE'},
                        {field: 'sort', title: __('Sort'), operate: false},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.toggle,
                            searchList: {"1": __('Status 1'), "2": __('Status 2'),}
                        },
                        {field: 'bank', title: __('Bank'), operate: false},
                        {field: 'account', title: __('Account'), operate: false},
                        {field: 'ifsc', title: __('Ifsc'), operate: false},
                        {field: 'name', title: __('Name'), operate: false},
                        {field: 'fee', title: __('Fee'), operate: false},

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
        copy: function () {
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