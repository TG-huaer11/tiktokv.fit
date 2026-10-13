define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'lottery/index',
                    add_url: 'lottery/add',
                    edit_url: 'lottery/edit',
                    del_url: 'lottery/del',
                    multi_url: 'lottery/multi',
                    table: 'recharge',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'create_at',
                search: false,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id'), operate: 'LIKE'},
                        {field: 'user.username', title: __('User.username'), operate: 'LIKE'},
                        {field: 'parent.username', title: __('Parent.username'), operate: false},
                        {field: 'parent.username', title: __('代理'), operate: 'LIKE', visible: false},
                        {field: 'user.level', title: __('User.level'), operate: false, formatter: function (value, row, index){
                                return 'Lv ' + value;
                            }},
                        {field: 'num', title: __('num'), operate: false},
                        {field: 'create_at', title: __('Create_at'), sortable: true, formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange'},
                        {field: 'admin.nickname', title: __('Admin.nickname'), operate: false},
                        {field: 'remark', title: __('Remark'), operate: false},
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