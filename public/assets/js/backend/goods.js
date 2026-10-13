define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'goods/index',
                    add_url: 'goods/add',
                    edit_url: 'goods/edit',
                    del_url: 'goods/del',
                    multi_url: 'goods/multi',
                    table: 'goods',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'goods_price',
                sortOrder: 'asc',
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
                            buttons: [
                                {
                                    name: 'appoint1',
                                    title: __('指派Lv1'),
                                    text: __('指派Lv1'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-magic',
                                    url: 'goods/appoint?type=1'
                                },
                                {
                                    name: 'ajax',
                                    title: __('指派Lv2'),
                                    text: __('指派Lv2'),
                                    classname: 'btn btn-xs btn-magic btn-dialog',
                                    icon: 'fa fa-lock',
                                    url: 'goods/appoint?type=2'
                                },
                            ],
                        },
                        {field: 'goods_pic', title: __('Goods_pic'), operate: false, formatter: Table.api.formatter.image,},
                        {field: 'shop_name', title: __('Shop_name'), operate: 'LIKE'},
                        {
                            field: 'goods_name', title: __('Goods_name'), operate: 'LIKE',
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
                        {field: 'goods_price', title: __('Goods_price'), operate: 'RANGE'},
                        {
                            field: 'status',
                            title: __('Status'),
                            formatter: Table.api.formatter.toggle,
                            searchList: {"0": __('Status 0'), "1": __('Status 1')}
                        },
                        {
                            field: 'create_at',
                            title: __('Create_at'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange'
                        },
                    ]
                ]
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
        appoint: function () {
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