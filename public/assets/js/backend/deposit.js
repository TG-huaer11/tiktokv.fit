define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'deposit/index',
                    add_url: 'deposit/add',
                    edit_url: 'deposit/edit',
                    del_url: 'deposit/del',
                    multi_url: 'deposit/multi',
                    table: 'deposit',
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
                     var status=$('#status').val();
                 params['top_id']=top_id;
                 params['member_id']=member_id;
                 params['username']=username;
                 params['jia']=jia;
                 params['status']=status;
                 console.log(params)
                    return params;
                },
                pk: 'id',
                sortName: 'create_at',
                search: false,
                showSearch: false, // 显示搜索框
                columns: [
                    [
                        {checkbox: true},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.buttons,
                            buttons: [
                                {
                                    name: 'edit',
                                    title: __('拒绝提款'),
                                    text: __('拒绝提款'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-magic',
                                    // dropdown: '操作',
                                    url: 'deposit/edit?status=3',
                                    success:function (data, ret) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 1) {
                                            return true;
                                        }
                                        return false;
                                    }
                                },
                                // {
                                //     name: 'edit',
                                //     title: __('自动出款'),
                                //     text: __('自动出款'),
                                //     classname: 'btn btn-xs btn-magic btn-dialog',
                                //     icon: 'fa fa-lock',
                                //     dropdown: '操作',
                                //     url: 'deposit/edit?status=4',
                                //     callback: function (data) {
                                //         $('.btn-refresh').click();
                                //     },
                                //     visible: function (row) {
                                //         if (row.status == 1) {
                                //             return true;
                                //         }
                                //         return false;
                                //     }
                                // },
                                {
                                    name: 'edit',
                                    title: __('同意提款'),
                                    text: __('同意提款'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-lock',
                                    // dropdown: '操作',
                                    url: 'deposit/edit?status=2',
                                    callback: function (data) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 1) {
                                            return true;
                                        }
                                        return false;
                                    }
                                },
                                {
                                    name: 'edit',
                                    title: __('查看出款'),
                                    text: __('查看出款'),
                                    classname: 'btn btn-xs btn-magic btn-ajax',
                                    icon: 'fa fa-lock',
                                    dropdown: '操作',
                                    url: 'deposit/edit?status=8',
                                    success: function (data, ret) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 4) {
                                            return true;
                                        }
                                        return false;
                                    }
                                },
                                {
                                    name: 'edit',
                                    title: __('拒绝出款'),
                                    text: __('拒绝出款'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-lock',
                                    dropdown: '操作',
                                    url: 'deposit/edit?status=33',
                                    success: function (data, ret) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 4) {
                                            return true;
                                        }
                                        return false;
                                    }
                                },
                            ],
                        },
                            {field: 'top_parent_name', title: __('代理线'), operate: 'false'},
                               {field: 'jia', title: __('身份'), operate: 'false'},
                         {field: 'uid', title: __('会员ID'), operate: 'false'},
                        {field: 'id', title: __('Id'), operate:false},
                      
                            
                           
                        {field: 'user.username', title: __('会员名'), operate: 'false'},
                        {field: 'parent.username', title: __('Parent.username'), operate: false},
                  
                        {field: 'user.level', title: __('User.level'), operate: false,
                            formatter: function (value, row, index){
                                return 'Lv ' + value;
                            }
                        },
                        {field: 'user.real_name', title: __('User.real_name'), operate: false},
                        {field: 'num', title: __('num'), operate: false},
                        {field: 'real_num', title: __('real_num'), operate: false},
                        {field: 'fee', title: __('real_num'), operate: false,
                            formatter: function (value, row, index){
                                return row.fee + row.gfee;
                            }
                        },
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.label, searchList: { "1": __('Status 1'), "2": __('Status 2'), "3": __('Status 3'), "4": __('Status 4'), operate:false}},
                        {field: 'create_at', title: __('Create_at'), sortable: true, formatter: Table.api.formatter.datetime, operate:false, addclass: 'datetimerange'},
                        {field: 'end_at', title: __('End_at'), sortable: true, formatter: Table.api.formatter.datetime, operate: false, addclass: 'datetimerange'},
                        {field: 'pay.name2', title: __('Pay.name2'), operate: false},
                        {field: 'admin.nickname', title: __('Admin.nickname'), operate: false},
                        {field: 'remark', title: __('Remark'), operate: false},
                    ]
                ]
            });
  // 为自定义搜索表单绑定提交事件
            $('#custom-search-form').on('submit', function (e) {
                e.preventDefault();
                table.bootstrapTable('refresh');
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