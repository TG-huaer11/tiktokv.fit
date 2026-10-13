define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user.user_level/index',
                    add_url: 'user.user_level/add',
                    edit_url: 'user.user_level/edit',
                    del_url: 'user.user_level/del',
                    multi_url: 'user.user_level/multi',
                    table: 'user_level',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
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
                        {
                            field: 'name', title: __('Name'), operate: '=', formatter: function (value, row, index) {
                                return 'Lv ' + value;
                            }
                        },
                        {field: 'order_num', title: __('Order_num'), operate: false},
                        {field: 'tixian_shouxu', title: __('Tixian_shouxu'), operate: false},
                        {field: 'tixian_min', title: __('Tixian_min'), operate: false},
                        {field: 'tixian_max', title: __('Tixian_max'), operate: false},
                        {field: 'bili', title: __('Bili'), operate: false},
                        {field: 'commission', title: __('Commission'), operate: false},
                        {field: 'num', title: __('升级充值金额'), operate: false},
                        {field: 'create_at', title: __('Create_at'), operate: false},
                        {
                            field: 'pic', title: __('Pic'), operate: false,
                            formatter: Table.api.formatter.image,
                            events: {
                                'click .img-center': function (e, value, row, index) {
                                    value = value === null ? '' : value.toString();
                                    Layer.photos({
                                        photos: {
                                            "start": $(this).parent().index(),
                                            "data": [{src: value}]
                                        },
                                        anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
                                    });
                                },
                            }
                        },
                    ]
                ]
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
                        url: "user.user_level/edit/",
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
                    index_url: 'user.user_level/withdrawal_user_group',
                    table: 'user',
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
                                        return 'user/user/withdrawal_user_group_del?id=' + row.id
                                    },
                                    success: function (data) {
                                        $('.btn-refresh').trigger('click');
                                    }
                                },
                            ],
                        },
                        {field: 'username', title: __('Username'), operate: "LIKE"},

                    ]
                ],
                queryParams: function (params) {
                    //这里可以追加搜索条件
                    var filter = JSON.parse(params.filter);
                    var op = JSON.parse(params.op);
                    //这里可以动态赋值，比如从URL中获取admin_id的值，filter.admin_id=Fast.api.query('admin_id');

                    if (Config.user_id > 0) {
                        filter.user_id = Config.user_id;
                        op.user_id = "=";
                    }

                    params.filter = JSON.stringify(filter);
                    params.op = JSON.stringify(op);
                    return params;
                },
            });

            $(document).on('click', '.btn-add-user', function () {
                Layer.prompt(function (value, index, elem) {
                    Fast.api.ajax({
                        url: 'user/user/withdrawal_user_group_add',
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
                    index_url: 'user.user_level/finance',
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
                            field: 'type',
                            title: __('类型'),
                            formatter: Table.api.formatter.normal,
                            searchList: {"1": __('收入'), "2": __('支出')}
                        },
                        {
                            field: 'status',
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
                        {field: 'order_sn', title: __('订单编号'), operate: "LIKE"},
                        {field: 'amount', title: __('金额'), operate: false},
                        {field: 'before', title: __('变更前'), operate: false},
                        {field: 'after', title: __('变更后'), operate: false},
                        {field: 'remark', title: __('备注'), operate: false},
                        {field: 'adminer', title: __('操作员'), operate: false},
                        {
                            field: 'createtime',
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

                    if (Config.user_id > 0) {
                        filter.user_id = Config.user_id;
                        op.user_id = "=";
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
            }
        }
    };
    return Controller;
});