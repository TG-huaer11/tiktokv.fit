define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'goods_cate/index',
                    add_url: 'goods_cate/add',
                    edit_url: 'goods_cate/edit',
                    del_url: 'goods_cate/del',
                    multi_url: 'goods_cate/multi',
                    table: 'goods_cate',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
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
                        {
                            field: 'cate_pic',
                            title: __('Cate_pic'),
                            operate: false,
                            formatter: Table.api.formatter.image,
                            events: Table.api.events.image,
                        },
                        {field: 'cate_pic', title: __('Cate_pic_url'), operate: false},
                        {field: 'name', title: __('Name'), operate: false},
                        {field: 'bili', title: __('Bili'), operate: false},
                        {field: 'cate_info', title: __('Cate_info'), operate: false},
                    ]
                ]
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
            }
        }
    };

    return Controller;
});