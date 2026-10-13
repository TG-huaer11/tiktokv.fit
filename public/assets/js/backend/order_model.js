define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order_model/index',
                    add_url: 'order_model/add',
                    edit_url: 'order_model/edit',
                    del_url: 'order_model/del',
                    multi_url: 'order_model/multi',
                    table: 'order_model',
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
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                        },
                        {field: 'id', title: __('Id'), operate: 'LIKE'},
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.status,
                            searchList: {
                                "0": __('Status 0'),
                                "1": __('Status 1'),
                            }
                        },
                        {
                            field: 'type',
                            title: __('Type'),
                            formatter: Table.api.formatter.status,
                            searchList: {
                                "1": __('Type 1'),
                                "2": __('Type 2'),
                            }
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