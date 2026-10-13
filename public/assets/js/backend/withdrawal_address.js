define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'withdrawal_address/index',
                    add_url: 'withdrawal_address/add',
                    edit_url: 'withdrawal_address/edit',
                    del_url: 'withdrawal_address/del',
                    multi_url: 'withdrawal_address/multi',
                    table: 'withdrawal_address',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                   queryParams: function (params) {
                    console.log(params)
                    var top_id = $('#top_id').val();
                    var member_id = $('#member_id').val();
                    var username = $('#username').val();
                    var jia = $('#jia').val();
                 params['top_id']=top_id;
                 params['member_id']=member_id;
                 params['username']=username;
                 params['jia']=jia;
                 console.log(params)
                    return params;
                },
                pk: 'id',
                sortName: 'id',
                  search: false,
                showSearch: false, // 显示搜索框
                columns: [
                    [
                        {checkbox: true},
                       {field: 'top_parent_name', title: __('代理线'), operate: 'false'},
                         {field: 'user.id', title: __('用户ID'), operate: 'false'},
                        {field: 'user.username', title: __('用户名称'), operate: 'false'},
                          {field: 'jia', title: __('身份'), operate: 'false'},
                        {field: 'address', title: __('TRC-20地址'), operate: 'false'},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                        },
                    ]
                ],
            });
   // 为自定义搜索表单绑定提交事件
            $('#custom-search-form').on('submit', function (e) {
                e.preventDefault();
                table.bootstrapTable('refresh');
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