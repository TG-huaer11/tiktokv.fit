define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init();
            this.table.first();
            this.table.second();
            this.table.third();
        },
        table: {
            first: function () {
                // 表格1
                var table1 = $("#table1");
                table1.bootstrapTable({
                    url: 'order_model/index',
                    extend: {
                        index_url: 'order_model/index',
                        add_url: 'order_model/add',
                        edit_url: 'order_model/edit',
                        del_url: 'order_model/del',
                        multi_url: 'order_model/multi',
                        table: 'order_model',
                    },
                    toolbar: '#toolbar1',
                    sortName: 'id',
                    sortOrder: 'asc',
                    search: false,
                    showSearch: false,
                    showToggle: false,
                    showColumns: false,
                    showExport: false,
                    columns: [
                        [
                            {field: 'name', title: __('Name')},
                            {
                                field: 'operate',
                                title: __('Operate'),
                                table: table1,
                                events: Table.api.events.operate,
                                buttons: [
                                    {
                                        name: 'log',
                                        title: '查看',
                                        text: '查看',
                                        icon: 'fa fa-list',
                                        classname: 'btn btn-primary btn-xs btn-click',
                                        click: function (e, data) {
                                            $("#parent").html(data.name).parent().removeClass('hide');
                                            $("#parent-id").val(data.id);
                                            $("#myTabContent2 .form-commonsearch input[name='parent_id']").val(data.id);
                                            $("#myTabContent2 .btn-refresh").trigger("click");
                                        }
                                    }
                                ],
                                formatter: Table.api.formatter.operate
                            }
                        ]
                    ],
                    queryParams: function (params) {
                        //这里可以追加搜索条件
                        var filter = JSON.parse(params.filter);
                        var op = JSON.parse(params.op);
                        filter.is_child = 0;
                        op.is_child = "=";
                        params.filter = JSON.stringify(filter);
                        params.op = JSON.stringify(op);
                        return params;
                    },
                });

                // 为表格1绑定事件
                Table.api.bindevent(table1);
            },
            second: function () {
                // 表格2
                var table2 = $("#table2");
                table2.bootstrapTable({
                    url: 'order_model/index',
                    extend: {
                        index_url: 'order_model/index',
                        add_url: '',
                        edit_url: 'order_model/edit',
                        del_url: 'order_model/del',
                        multi_url: 'order_model/multi',
                        table: 'order_model',
                    },
                    toolbar: '#toolbar2',
                    sortName: 'id',
                    sortOrder: 'asc',
                    search: false,
                    showSearch: false,
                    showToggle: false,
                    showColumns: false,
                    showExport: false,
                    columns: [
                        [
                            {field: 'name', title: __('Name')},
                            {field: 'parent_id', title: __('Parent_id'), visible: false},
                            {
                                field: 'operate',
                                title: __('Operate'),
                                table: table2,
                                events: Table.api.events.operate,
                                buttons: [
                                    {
                                        name: 'log',
                                        title: '查看',
                                        text: '查看',
                                        icon: 'fa fa-list',
                                        classname: 'btn btn-primary btn-xs btn-click',
                                        click: function (e, data) {
                                            $("#model").html(data.name).parent().removeClass('hide');
                                            $("#model-id").val(data.id);
                                            $("#myTabContent3 .form-commonsearch input[name='model_id']").val(data.id);
                                            $("#myTabContent3 .btn-refresh").trigger("click");
                                        }
                                    }
                                ],
                                formatter: Table.api.formatter.operate
                            }
                        ]
                    ],
                    queryParams: function (params) {
                        //这里可以追加搜索条件
                        var filter = JSON.parse(params.filter);
                        var op = JSON.parse(params.op);
                        filter.is_child = 1;
                        op.is_child = "=";
                        params.filter = JSON.stringify(filter);
                        params.op = JSON.stringify(op);
                        return params;
                    },
                });

                // 添加按钮事件
                $(document).on('click', '.btn-add-child', function () {
                    var url = 'order_model/add?parent_id=' + $("#parent-id").val();
                    Fast.api.open(url, $(this).data("original-title") || $(this).attr("title") || __('Add'), $(this).data() || {});
                });

                // 为表格2绑定事件
                Table.api.bindevent(table2);
            },
            third: function () {
                // 表格3
                var table3 = $("#table3");
                table3.bootstrapTable({
                    url: 'order_model_list/index',
                    extend: {
                        index_url: 'order_model_list/index',
                        add_url: '',
                        edit_url: 'order_model_list/edit',
                        del_url: 'order_model_list/del',
                        multi_url: 'order_model_list/multi',
                        table: 'order_model_list',
                    },
                    toolbar: '#toolbar3',
                    sortName: 'id',
                    search: false,
                    showSearch: false,
                    showToggle: false,
                    showColumns: false,
                    showExport: false,
                    searchFormVisible: true,
                    columns: [
                        [
                            {checkbox: true},
                            {field: 'id', title: 'ID'},
                            {field: 'model_id', title: __('订单模板id'), operate: '=', visible: false},
                            {field: 'task_number', title: __('任务序号'), operate: false},
                            {field: 'number', title: __('商品数量'), operate: false},
                            {field: 'commission', title: __('佣金'), operate: false},
                            {field: 'price_ratio', title: __('价格比例'), operate: false},
                            {
                                field: 'status',
                                title: __('Status'),
                                formatter: Table.api.formatter.toggle,
                                searchList: {
                                    "0": __('Status 0'),
                                    "1": __('Status 1'),
                                }
                            },
                            {field: 'remark', title: __('Remark'), operate: 'LIKE'},
                            {
                                field: 'operate',
                                title: __('Operate'),
                                table: table3,
                                events: Table.api.events.operate,
                                formatter: Table.api.formatter.operate
                            }
                        ]
                    ]
                });

                // 添加按钮事件
                $(document).on('click', '.btn-add-new', function () {
                    var url = 'order_model_list/add?model_id=' + $("#model-id").val();
                    Fast.api.open(url, $(this).data("original-title") || $(this).attr("title") || __('Add'), $(this).data() || {});
                });

                // 为表格2绑定事件
                Table.api.bindevent(table3);
            }
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
