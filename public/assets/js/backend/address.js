define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'address/index',
                    add_url: 'address/add',
                    edit_url: 'address/edit',
                    del_url: 'address/del',
                    multi_url: 'address/multi',
                    table: 'address',
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
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.toggle,
                            searchList: {"0": __('Status 0'), "1": __('Status 1')}
                        },
                        {
                            field: 'address',
                            title: '地址',
                        
                        },
                        {
                            field: 'type',
                            title: '类型',
                            sortable: true,
                          formatter: Table.api.formatter.normal,
                            searchList: {"0": '假地址', "1": '真地址'}
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