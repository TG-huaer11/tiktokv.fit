define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'message/index',
                    add_url: 'message/add',
                    edit_url: 'message/edit',
                    del_url: 'message/del',
                    multi_url: 'message/multi',
                    table: 'message',
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
                     /*   {field: 'id', title: __('Id'), operate: false},*/
                        {field: 'user.username', title: __('会员名'), operate: 'LIKE'},
                          {field: 'uid', title: __('会员ID'), operate: 'LIKE', visible: false},
                        {field: 'parent.username', title: __('Parent.username'), operate: false},
                        {field: 'parent_agent', title: __('代理线归属'), operate: 'LIKE', visible: false},
                        {field: 'title', title: __('Title'), operate: false},
                        {field: 'content', title: __('Content'), operate: false},
                        {field: 'create_at', title: __('Create_at'), sortable: true, formatter: Table.api.formatter.datetime, operate:false, addclass: 'datetimerange'},
                        {field: 'adminer', title: __('Adminer'), operate: false},
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        edit: function (){
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