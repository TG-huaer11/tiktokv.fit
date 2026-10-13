define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'txtz/index',
                    add_url: 'txtz/add',
                    edit_url: 'txtz/edit',
                    del_url: 'txtz/del',
                    multi_url: 'txtz/multi',
                    table: 'txtz',
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
                            field: 'lang',
                            title: "语言",
                             formatter: Table.api.formatter.normal,
                         searchList: {"zh": '中文', "en": '英语', "de": '德语', "fr": '法语', "it": '意大利语', "pt": '葡萄牙', "ru": '俄语', "spa": '加泰罗尼亚', "tr": '土耳其', "ar": '阿拉伯'}
                         
                        },
                        {
                            field: 'content',
                            title: '内容',
                        
                        },
                        
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
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
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});