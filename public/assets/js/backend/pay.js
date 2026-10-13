define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'pay/index',
                    add_url: 'pay/add',
                    edit_url: 'pay/edit',
                    del_url: 'pay/del',
                    multi_url: 'pay/multi',
                    table: 'pay',
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
                        {field: 'sort', title: __('Sort'), operate: false},
                        {field: 'name2', title: __('Name2'), operate: false},
                        {field: 'fee', title: __('Fee'), operate: false},
                        {field: 'min', title: __('Min'), operate: false},
                        {field: 'max', title: __('Max'), operate: false},
                        {field: 'domain', title: __('Domain'), operate: false},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.toggle,
                            searchList: {"0": __('Status 0'), "1": __('Status 1')}
                        },
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                            buttons: [
                                {
                                    name: 'appoint1',
                                    title: __('Copy'),
                                    classname: 'btn btn-xs btn-success btn-dialog',
                                    icon: 'fa fa-copy',
                                    url: 'pay/copy'
                                },
                            ],
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