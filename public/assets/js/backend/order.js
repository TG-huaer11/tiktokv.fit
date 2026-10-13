define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order/index',
                    add_url: 'order/add',
                    edit_url: 'order/edit',
                    del_url: 'order/del',
                    multi_url: 'order/multi',
                    table: 'order',
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
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                        },
                        {field: 'id', title: __('Id'), operate: 'LIKE'},
                        {field: 'user.username', title: __('User.username'), operate: 'LIKE'},
                        {field: 'parent.username', title: __('所属代理'), operate: 'LIKE', visible: false},
                        {
                            field: 'user.level',
                            title: __('Level'),
                            operate: false,
                            formatter: function (value, row, index) {
                                return 'Lv ' + value;
                            }
                        },
                        {
                            field: 'goods.goods_name', title: __('Goods.goods_name'), operate: false,
                            cellStyle: function (value, row, index, field) {
                                return {
                                    css: {
                                        "white-space": "nowrap",//单行省略必备
                                        "text-overflow": "ellipsis",//单行省略必备
                                        "overflow": "hidden",//单行省略必备
                                        "width": "200px",
                                        "max-width": "200px"
                                    }
                                };
                            }
                        },
                        {field: 'num', title: __('Num'), operate: false},
                        {field: 'total', title: __('Total'), operate: false},
                        {field: 'commission', title: __('Commission'), operate: false},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.status,
                            searchList: {
                                "-1": __('Status -1'),
                                "0": __('Status 0'),
                                "1": __('Status 1'),
                                "2": __('Status 2'),
                                "3": __('Status 3'),
                                "4": __('Status 4'),
                                "5": __('Status 5')
                            }
                        },
                        {
                            field: 'assign_at',
                            title: __('Assign_at'),
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
                        {
                            field: 'close_at',
                            title: __('Close_time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: false,
                            addclass: 'datetimerange'
                        },
                        {
                            field: 'c_status',
                            title: __('C_status'),
                            formatter: Table.api.formatter.label,
                            searchList: {"0": __('C_status 0'), "1": __('C_status 1'), "2": __('C_status 2')}
                        },
                        {field: 'admin.nickname', title: __('Admin.nickname'), operate: false},
                    ]
                ]
            });

            //解冻订单
            $(document).on("click", ".btn-unfreeze", function () {
                var ids = Table.api.selectedids(table).join(',');//获取选中列的id
                Fast.api.ajax({
                    url: "order/unfreeze/",
                    data: {"row[ids]": ids},
                }, function (data, ret) {
                    Layer.closeAll();
                    $(".btn-refresh").trigger("click");
                });
                return false;

            })

            // 为表格绑定事件
            Table.api.bindevent(table);
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