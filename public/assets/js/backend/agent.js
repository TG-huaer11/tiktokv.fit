define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'agent/index',
                    del_url: 'agent/delw',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'create_at',
                search: false,
                searchFormVisible: true,
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
                                    name: 'child',
                                    title: __('下级'),
                                    text: __('下级'),
                                    classname: 'btn btn-xs btn-success btn-dialog',
                                    icon: 'fa fa-pencil',
                                    url: function (row) {
                                        return 'agent/child?parent_id=' + row.uid
                                    }
                                },
                                {
                                    name: 'del',
                                    title: __('Delete'),
                                    text: __('Delete'),
                                    classname: 'btn btn-xs btn-danger ',
                                    icon: 'fa fa-trash',
                                    confirm: __('Are you sure you want to delete this item?'),
                                    url: function (row) {
                                       //    return 'agent/child?parent_id=' + row.uid
                                     return $.fn.bootstrapTable.defaults.extend.del_url + '?ids=' + row.uid;
                                    }
                                }
                            ],
                        },
                        {field: 'username', title: __('Username'), operate: 'LIKE'},
                        {field: 'register', title: __('Register'), operate: false},
                        {field: 'recharge', title: __('Recharge'), operate: false},
                        {field: 'deposits', title: __('Deposits'), operate: false},
                        {field: 'lottery', title: __('Lottery'), operate: false},
                        {
                            field: 'time', title: __('Time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                            visible: false
                        }
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        child: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'agent/child',
                    del_url: 'agent/del',
                    table: 'user',
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
                            formatter: Table.api.formatter.buttons,
                            buttons: [
                                {
                                    name: 'child',
                                    title: __('下级'),
                                    text: __('下级'),
                                    classname: 'btn btn-xs btn-success btn-dialog',
                                    icon: 'fa fa-pencil',
                                    url: function (row) {
                                        return 'agent/child?parent_id=' + row.uid
                                    }
                                },
                                {
                                    name: 'del',
                                    title: __('Delete'),
                                    text: __('Delete'),
                                    classname: 'btn btn-xs btn-danger btn-delone',
                                    icon: 'fa fa-trash',
                                    confirm: __('Are you sure you want to delete this item?'),
                                    url: function (row) {
                                        return $.fn.bootstrapTable.defaults.extend.del_url + '?ids=' + row.id;
                                    }
                                }
                            ],
                        },
                        {field: 'username', title: __('Username'), operate: 'LIKE'},
                        {field: 'register', title: __('Register'), operate: false},
                        {field: 'recharge', title: __('Recharge'), operate: false},
                        {field: 'deposits', title: __('Deposits'), operate: false},
                        {field: 'lottery', title: __('Lottery'), operate: false},
                        {
                            field: 'time', title: __('Time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                            visible: false
                        },
                    ]
                ],
                queryParams: function (params) {
                    //这里可以追加搜索条件
                    var filter = JSON.parse(params.filter);
                    var op = JSON.parse(params.op);
                    //这里可以动态赋值，比如从URL中获取admin_id的值，filter.admin_id=Fast.api.query('admin_id');
                    console.log(Config)
                    if (Config.parent_id) {
                        filter.parent_id = Config.parent_id;
                        op.parent_id = "=";
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