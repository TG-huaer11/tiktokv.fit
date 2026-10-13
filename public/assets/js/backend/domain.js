define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'domain/index',
                    add_url: 'domain/add',
                    del_url: 'domain/del',
                    table: 'domain',
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
                        {field: 'domain', title: __('Domain'), operate: false},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.buttons,
                            formatter: Table.api.formatter.buttons,
                            buttons: [
                                {
                                    name: 'del',
                                    icon: 'fa fa-trash',
                                    title: __('Del'),
                                    extend: 'data-toggle="tooltip"',
                                    classname: 'btn btn-xs btn-danger btn-ajax',
                                    url: function (row) {
                                        return 'domain/del?domain=' + row.domain
                                    },
                                    confirm: '是否确认删除',
                                    success:function (res,ret) {
                                        if (ret.code == 1) {
                                            $('.btn-refresh').click();
                                        }
                                    }
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
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});