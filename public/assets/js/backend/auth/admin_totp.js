define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'auth.admin_totp/index',
                    add_url: 'auth.admin_totp/add',
                    edit_url: 'auth.admin_totp/edit',
                    del_url: 'auth.admin_totp/del',
                    multi_url: 'auth.admin_totp/multi',
                    table: 'admin_totp',
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
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {field: 'remark', title: __('Remark'), operate: false},
                        {
                            field: 'secret', title: __('Secret'), operate: false,
                            // cellStyle: function (value, row, index, field) {
                            //     return {
                            //         css: {
                            //             "word-wrap": "break-word",
                            //             "word-break": "break-all",
                            //             "width": "200px",
                            //             "max-width": "200px"
                            //         }
                            //     };
                            // }
                        },
                        {
                            field: 'qrcode',
                            title: __('Qrcode'),
                            operate: false,
                            formatter: Table.api.formatter.image,
                            events: {
                                'click .img-center': function (e, value, row, index) {
                                    value = value === null ? '' : value.toString();
                                    Layer.photos({
                                        photos: {
                                            "start": $(this).parent().index(),
                                            "data": [{src:value}]
                                        },
                                        anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
                                    });
                                },
                            }
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
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                            buttons: [
                                {
                                    name: 'reset',
                                    title: __('Reset'),
                                    classname: 'btn btn-xs btn-success btn-ajax',
                                    icon: 'fa fa-refresh',
                                    url: 'auth.admin_totp/reset',
                                    success: function () {
                                        $('.btn-refresh').click();
                                    }
                                },
                            ],
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
        reset: function () {
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