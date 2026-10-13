define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user.user/index',
                    add_url: 'user.user/add',
                    edit_url: 'user.user/edit',
                    del_url: 'user.user/del',
                    multi_url: 'user.user/multi',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
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
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                  search: false,
                showSearch: false, // 显示搜索框
                pageSize: 15,
                pageList: [15, 20, 25, 50, 'All'],
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
                                // {
                                //     name: 'ajax',
                                //     title: __('抢单模式'),
                                //     text: __('抢单模式'),
                                //     classname: 'btn btn-xs btn-magic btn-dialog',
                                //     icon: 'fa fa-code-fork',
                                //     dropdown: '操作',
                                //     url: 'user.user/edit?type=order_model'
                                // },
                                // {
                                //     name: 'ajax',
                                //     title: __('联单模式'),
                                //     text: __('联单模式'),
                                //     classname: 'btn btn-xs btn-magic btn-dialog',
                                //     icon: 'fa fa-code-fork',
                                //     dropdown: '操作',
                                //     url: 'user.user/edit?type=joint_order_model'
                                // },
                                {
                                    name: 'ajax',
                                    title: __('编辑用户信息'),
                                    text: __('编辑用户信息'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-magic',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=userinfo'
                                },
                                {
                                    name: 'ajax',
                                    title: __('编辑策略'),
                                    text: __('编辑策略'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-magic',
                                    dropdown: '操作',
                                     url: function (row) {
                                        return 'kdm?uid=' + row.id ;
                                    }
                                },
                                {
                                    name: 'ajax',
                                    title: __('重置订单'),
                                    text: __('重置订单'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-recycle',
                                    dropdown: '操作',
                                    confirm: function(row){
                                        var index_day=row.index_day;
                                     let html = "<h4>选择重置时间</h4>";
    for (let i = 1; i <= 10; i++) {
        // 如果当前循环的值等于 index_day，则设置为选中状态
        let checked = (i == index_day) ? "checked" : "";
        html += `<input ${checked} name='czday' value='${i}' type='radio' />第${i}天 `;
    }
    return html;
                                       
                                    },
                                    click: function (index, row) {
                                        var day = $("input[name='czday']:checked").val();
                                      if(!day){
                                         Layer.msg('选择重置时间')
                                          return;
                                      }
                                        Fast.api.ajax({
                                            url: "user.user/edit?ids=" + row.id,
                                            data: {
                                                "row[today_order_number]": 1,
                                                "row[type]": "today_order_number",
                                                "row[id]": row.id,
                                                "row[day]": day
                                            },
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                },
                                {
                                    name: 'ajax',
                                    title: __('发送私信'),
                                    text: __('发送私信'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-magic',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=send'
                                },
                                {
                                    name: 'ajax',
                                    title: __('修改密码'),
                                    text: __('修改密码'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-lock',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=login'
                                },
                                {
                                    name: 'ajax',
                                    title: __('更换上级'),
                                    text: __('更换上级'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-code-fork',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=upname'
                                },
                                  {
                                    name: 'ajax',
                                    title: __('更换代理线'),
                                    text: __('更换代理线'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-code-fork',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=top_parent'
                                },
                                {
                                    name: 'ajax',
                                    title: __('修改等级'),
                                    text: __('修改等级'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-code-fork',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=level'
                                },
                                {
                                    name: 'ajax',
                                    title: __('赠送彩金'),
                                    text: __('赠送彩金'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-dollar',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=add'
                                },
                                {
                                    name: 'ajax',
                                    title: __('扣除USDT'),
                                    text: __('扣除USDT'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-shield',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=sub'
                                },
                                {
                                    name: 'ajax',
                                    title: __('银行卡信息'),
                                    text: __('银行卡信息'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-credit-card-alt',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=cardnum'
                                },
                                {
                                    name: 'ajax',
                                    title: __('删除银行卡信息'),
                                    text: __('删除银行卡信息'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-trash',
                                    confirm: '是否删除银行卡信息',
                                    dropdown: '操作',
                                    url: 'bank_info/del'
                                },
                                {
                                    name: 'ajax',
                                    title: __('USDT地址'),
                                    text: __('USDT地址'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-credit-card-alt',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=address'
                                },
                                {
                                    name: 'ajax',
                                    title: __('删除USDT地址'),
                                    text: __('删除USDT地址'),
                                    classname: 'btn btn-xs btn-magic btn-ajax',
                                    icon: 'fa fa-trash',
                                    confirm: '是否删除USDT地址',
                                    dropdown: '操作',
                                    url: function (row) {
                                        return 'withdrawal_address/del?ids=' + row.id + '&user_id=' + row.id;
                                    }
                                },
                                {
                                    name: 'ajax',
                                    title: __('设置进度'),
                                    text: __('设置进度'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-sliders',
                                    dropdown: '操作',
                                    url: 'user.user/edit?type=progress'
                                },
                                {
                                    name: 'addtabs',
                                    title: function (row) {
                                        return '流水记录:' + row.username
                                    },
                                    text: '流水记录',
                                    classname: 'btn btn-xs btn-magic btn-addtabs',
                                    icon: 'fa fa-line-chart',
                                    dropdown: '操作',
                                    url: function (row) {
                                        return 'user.user/finance?uid=' + row.id;
                                    },
                                },
                                {
                                    name: 'ajax',
                                    title: __('冻结/解冻'),
                                    text: __('冻结/解冻'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-magic',
                                    confirm: function (row) {
                                        return row.status == 1 ? '是否解冻用户？' : '是否冻结用户？';
                                    },
                                    dropdown: '操作',
                                    click: function (index, row) {
                                        Fast.api.ajax({
                                            url: "user.user/edit?ids=" + row.id,
                                            data: {"row[status]": row.status, "row[type]": "status", "row[id]": row.id},
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                },
                                 {
                                    name: 'ajax',
                                    title: __('身份转化'),
                                    text: __('身份转化'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-magic',
                                    confirm: function (row) {
                                        return row.jia == 1 ? '转为真人？' : '转为假人？';
                                    },
                                    dropdown: '操作',
                                    click: function (index, row) {
                                        Fast.api.ajax({
                                            url: "user.user/edit?ids=" + row.id,
                                            data: {"row[jia]": row.jia, "row[type]": "jia", "row[id]": row.id},
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                },
                                {
                                    name: 'ajax',
                                    title: __('清除时间'),
                                    text: __('清除时间'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-recycle',
                                    dropdown: '操作',
                                    confirm: '是否清除提款时间限制？',
                                    click: function (index, row) {
                                        Fast.api.ajax({
                                            url: "user.user/edit?ids=" + row.id,
                                            data: {"row[clean]": 1, "row[type]": "clean", "row[id]": row.id},
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                },
                                   {
                                    name: 'ajax',
                                    title: __('删除用户'),
                                    text: __('删除用户'),
                                    classname: 'btn btn-xs btn-magic btn-click',
                                    icon: 'fa fa-magic',
                                    confirm: function (row) {
                                        return row.status == 1 ? '是否删除用户？' : '是否删除用户？';
                                    },
                                    dropdown: '操作',
                                    click: function (index, row) {
                                        Fast.api.ajax({
                                            url: "user.user/deluser?ids=" + row.id,
                                            data: {"row[status]": row.status, "row[type]": "status", "row[id]": row.id},
                                        }, function (data, ret) {
                                            Layer.closeAll();
                                            $(".btn-refresh").trigger("click");
                                        });
                                    }
                                },
                            ],
                        },
                         {field: 'top_parent_name', title: __('代理线'), operate: 'false'},
                         {field: 'id', title: __('会员ID'), operate: 'false'},
                        {field: 'username', title: __('Username'), operate: 'false'},
                          {field: 'nickname', title: __('备注'), operate: false},
                        {field: 'jia', title: __('身份'),  operate: false,
                        formatter: Table.api.formatter.normal,
                            searchList: {"0": '真人', "1": '假人'}},
                        {
                            field: 'level',
                            title: __('用户等级'),
                              operate: false,
                          /*  operate: '=',
                            formatter: function (value, row, index) {
                                return 'Lv ' + value;
                            }*/
                        },
                        {field: 'balance', title: __('可用余额'), operate: false},
                        {field: 'freeze_balance', title: __('冻结余额'), operate: false},
                        {field: 'parent.username', title: __('上级用户名'), operate: false},
                        {field: 'top_parent', title: __('代理线归属'), operate: 'false', visible: false},
                        {field: 'invite_code', title: __('邀请码'), operate: false},
                        {field: 'is_deposit', title: __('提现'), operate: false, formatter: Table.api.formatter.toggle},
                        {
                            field: 'status',
                            title: __('冻结'),
                             operate: false,
                            formatter: Table.api.formatter.toggle,
                            searchList: {"1": __('Status 1'), "2": __('Status 2')},
                            yes: 2,
                            no: 1
                        },
                        {
                            field: 'is_online',
                            title: __('是否在线'),
                            formatter: Table.api.formatter.label,
                            searchList: {"0": __('离线'), "1": __('在线'),},
                            operate: false
                        },
                        {
                            field: 'create_at',
                            title: __('注册时间'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                             operate: false
                        },
                        {field: 'regip', title: __('注册ip'), operate: false},
                    ]
                ]
            });
   // 为自定义搜索表单绑定提交事件
            $('#custom-search-form').on('submit', function (e) {
                e.preventDefault();
                table.bootstrapTable('refresh');
            });
            //彩金 or 扣款操作
            $(document).on("click", ".btn-money", function () {
                var ids = Table.api.selectedids(table).join(',');//获取选中列的id
                var val = $(this).data('value');
                var title = val == 'add' ? '彩金' : '扣款';
                var placeholder = val == 'add' ? '彩金的' : '扣款的'
                Layer.prompt({
                    title: title,
                    success: function (layero) {
                        $("input", layero).prop("placeholder", "请输入" + placeholder + "金额");
                    }
                }, function (value) {
                    Fast.api.ajax({
                        url: "user.user/edit/",
                        data: {"row[value]": value, "row[type]": val, "row[ids]": ids},
                    }, function (data, ret) {
                        Layer.closeAll();
                        $(".btn-refresh").trigger("click");
                    });
                });
                return false;

            })

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        //提款用户组
        withdrawal_user_group: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user.user/withdrawal_user_group',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                showToggle: false,
                searchFormVisible: true,
                search: false,
                columns: [
                    [
                        {
                            field: 'operate',
                            title: __('Operate'),
                            width: '120',
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.buttons,
                            buttons: [
                                {
                                    name: 'ajax',
                                    title: __('Delete'),
                                    text: __('Delete'),
                                    classname: 'btn btn-xs btn-danger btn-ajax',
                                    icon: 'fa fa-trash',
                                    confirm: '是否踢除提款用户组',
                                    url: function (row) {
                                        return 'user.user/withdrawal_user_group_del?id=' + row.id
                                    },
                                    success: function (data) {
                                        $('.btn-refresh').trigger('click');
                                    }
                                },
                            ],
                        },
                        {field: 'username', title: __('Username'), operate: "LIKE"},

                    ]
                ]
            });

            $(document).on('click', '.btn-add-user', function () {
                Layer.prompt(function (value, index, elem) {
                    Fast.api.ajax({
                        url: 'user.user/withdrawal_user_group_add',
                        data: {'username': value},
                        loading: false,
                        success: function (data) {
                            Layer.msg(data.msg)
                            if (data.status) {
                                $('.btn-refresh').trigger('click');
                                Layer.closeAll();
                            }
                            return false;
                        }
                    })
                })
            })

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        //流水
        finance: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user.user/finance',
                }
            });

            var table = $("#table");

            console
            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                showToggle: false,
                searchFormVisible: true,
                search: false,
                columns: [
                    [
                        {
                            field: 'i',
                            title: __('类型'),
                            formatter: Table.api.formatter.normal,
                            searchList: {"1": __('收入'), "2": __('支出')}
                        },
                        {
                            field: 'action',
                            title: __('状态'),
                            formatter: Table.api.formatter.normal,
                            searchList: {
                                "0": __("其他"),
                                "1": __('充值'),
                                "2": __('提款'),
                                "3": __('彩金'),
                                "4": __('扣款'),
                                "5": __('佣金'),
                                "6": __('订单')
                            }
                        },
                        {field: 'orderno', title: __('订单编号'), operate: "LIKE"},
                        {field: 'number', title: __('金额'), operate: false},
                        {field: 'remark', title: __('备注'), operate: false},
                        {field: 'adminer', title: __('操作员'), operate: false},
                        {
                            field: 'created',
                            title: __('创建时间'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange'
                        },
                    ]
                ],
                queryParams: function (params) {
                    //这里可以追加搜索条件
                    var filter = JSON.parse(params.filter);
                    var op = JSON.parse(params.op);
                    //这里可以动态赋值，比如从URL中获取admin_id的值，filter.admin_id=Fast.api.query('admin_id');

                    if (Config.uid > 0) {
                        filter.uid = Config.uid;
                        op.uid = "=";
                    }

                    params.filter = JSON.stringify(filter);
                    params.op = JSON.stringify(op);
                    return params;
                },
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));

                // $(document).on("fa.event.appendfieldlist", '[data-name="row[strategy]"] .btn-append', function(e, obj){
                //     //通用的表单组件事件绑定和组件渲染
                //     Form.api.bindevent(obj);
                // });
            }
        }
    };
    return Controller;
});