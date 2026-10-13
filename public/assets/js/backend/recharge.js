define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'recharge/index',
                    add_url: 'recharge/add',
                    edit_url: 'recharge/edit',
                    del_url: 'recharge/del',
                    multi_url: 'recharge/multi',
                    table: 'recharge',
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
                sortName: 'id',
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
                                    title: __('拒绝'),
                                    text: __('拒绝'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-magic',
                                    dropdown: '操作',
                                    url: 'recharge/edit?type=close',
                                       confirm: function(row){
                                   
                                    
                                            return "<h4>拒绝理由</h4><input  name='remark' type='text' />"; 
                                    
                                       
                                    },
                                      click: function (index, row) {
                                        var remark = $("input[name='remark']").val();
                                      if(!remark){
                                         Layer.msg('输入拒绝理由')
                                          return;
                                      }
                                        Fast.api.ajax({
                                            url: "recharge/edit?type=close" ,
                                            data: {
                                                "remark": remark,
                                                'id':row.id
                                            },
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                              /*      success: function (data, ret) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 1) {
                                            return true;
                                        }
                                        return false;
                                    }*/
                                },
                                {
                                    name: 'ajax',
                                    title: __('通过'),
                                    text: __('通过'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-lock',
                                    dropdown: '操作',
                                      confirm: function(row){
                                   
                                    
                                            return "<h4>充值金额</h4><input  name='num' value='"+row.num+"' type='text' />"; 
                                    
                                       
                                    },
                                      click: function (index, row) {
                                        var num = $("input[name='num']").val();
                                      if(!num){
                                         Layer.msg('输入充值金额')
                                          return;
                                      }
                                        Fast.api.ajax({
                                            url: "recharge/edit?type=order" ,
                                            data: {
                                                "real_num": num,
                                                'id':row.id
                                            },
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                 /*   success: function (data, ret) {
                                        $('.btn-refresh').click();
                                    },
                                    callback: function (data) {
                                        $('.btn-refresh').click();
                                    },
                                    visible: function (row) {
                                        if (row.status == 1) {
                                            return true;
                                        }
                                        return false;
                                    }*/
                                },
                            ],
                        },
                            {field: 'top_parent_name', title: __('代理线'), operate: 'false'},
                               {field: 'jia', title: __('身份'), operate: 'false'},
                        {field: 'id', title: __('Id'), operate:false},
                           {field: 'uid', title: __('会员ID'), operate: 'false'},
                        {field: 'user.username', title: __('会员名称'), operate: 'false'},
                        {field: 'parent.username', title: __('Parent.username'), operate: false},
                        {
                            field: 'user.level',
                            title: __('User.level'),
                            operate: false,
                            formatter: function (value, row, index) {
                                return 'Lv ' + value;
                            }
                        },
                        {field: 'num', title: __('num'), operate: false},
                        {
                            field: 'pic',
                            title: __('支付凭证'),
                            operate: false,
                            formatter: Controller.api.formatter.thumb,
                        },
                        {field: 'real_num', title: __('Real_num'), operate: false},
                        {field: 'fee', title: __('Fee'), operate: false},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.label,
                            operate: false,
                            searchList: {"1": __('Status 1'), "2": __('Status 2'), "3": __('Status 3')}
                        },
                        {
                            field: 'create_at',
                            title: __('Create_at'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: false,
                            addclass: 'datetimerange'
                        },
                        {
                            field: 'end_at',
                            title: __('End_at'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: false,
                            addclass: 'datetimerange'
                        },
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
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            formatter: {
                thumb: function (value, row, index) {
                    var html = '<a href="' + row.pic + '" target="_blank"><img src="' + row.pic + '" alt="" style="max-height:60px;max-width:120px"></a>';
                    return '<div style="width:120px;margin:0 auto;text-align:center;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;">' + html + '</div>';
                },
            }
        }
    };

    return Controller;
});