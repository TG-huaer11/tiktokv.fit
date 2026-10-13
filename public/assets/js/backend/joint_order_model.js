define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'joint_order_model/index',
                    add_url: 'joint_order_model/add',
                    edit_url: 'joint_order_model/edit',
                    del_url: 'joint_order_model/del',
                    multi_url: 'joint_order_model/multi',
                    table: 'joint_order_model',
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
                            field: 'name',
                            title: __('Name'),
                            operate: 'LIKE'
                        },
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.toggle,
                            searchList: {"0": __('Status 0'), "1": __('Status 1')}
                        },
                        {
                            field: 'create_time',
                            title: __('Create_time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange'
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
        appoint: function () {
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