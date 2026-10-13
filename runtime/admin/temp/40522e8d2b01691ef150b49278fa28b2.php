<?php /*a:4:{s:65:"/www/wwwroot/tiktokv.fit/app/admin/view/user/user_level/edit.html";i:1740929536;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo htmlentities($config['language']); ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo htmlentities((isset($title) && ($title !== '')?$title:'')); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">
<meta name="referrer" content="never">
<meta name="referrer" content="no-referrer">
<link rel="shortcut icon" href="/assets/img/favicon.ico"/>
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo app('request')->env('app_debug')?'':'.min'; ?>.css?v=<?php echo htmlentities(config('site.version')); ?>"
      rel="stylesheet">
<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
<script src="/assets/js/html5shiv.js"></script>
<script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config: <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !config('fastadmin.multiplenav') && config('fastadmin.breadcrumb')): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <?php if($auth->check('dashboard')): ?>
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                    <?php endif; ?>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label for="c-name" class="control-label col-xs-12 col-sm-2"><?php echo __('Name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-name" data-rule="required" class="form-control" name="row[name]" type="text" value="<?php echo htmlentities($row['name']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-order_num" class="control-label col-xs-12 col-sm-2"><?php echo __('Order_num'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-order_num" data-rule="required" class="form-control" name="row[order_num]" type="text" value="<?php echo htmlentities($row['order_num']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-bili" class="control-label col-xs-12 col-sm-2"><?php echo __('Bili'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bili" data-rule="required" class="form-control" name="row[bili]" type="text" value="<?php echo htmlentities($row['bili']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-commission" class="control-label col-xs-12 col-sm-2"><?php echo __('Commission'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-commission" data-rule="required" class="form-control" name="row[commission]" type="text" value="<?php echo htmlentities($row['commission']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-tixian_shouxu" class="control-label col-xs-12 col-sm-2"><?php echo __('Tixian_shouxu'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-tixian_shouxu" data-rule="required" class="form-control" name="row[tixian_shouxu]" type="text" value="<?php echo htmlentities($row['tixian_shouxu']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-tixian_min" class="control-label col-xs-12 col-sm-2"><?php echo __('Tixian_min'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-tixian_min" data-rule="required" class="form-control" name="row[tixian_min]" type="text" value="<?php echo htmlentities($row['tixian_min']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-tixian_max" class="control-label col-xs-12 col-sm-2"><?php echo __('Tixian_max'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-tixian_max" data-rule="required" class="form-control" name="row[tixian_max]" type="text" value="<?php echo htmlentities($row['tixian_max']); ?>">
        </div>
    </div>
   <div class="form-group">
        <label for="c-tixian_max" class="control-label col-xs-12 col-sm-2"><?php echo __('升级到该等级需要充值的金额'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-num" data-rule="required" class="form-control" name="row[num]" type="text" value="<?php echo htmlentities($row['num']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-pic" class="control-label col-xs-12 col-sm-2">图片:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-pic" data-rule="" class="form-control" size="50" name="row[pic]" type="text" value="<?php echo htmlentities($row['pic']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-pic" class="btn btn-danger faupload" data-input-id="c-pic" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-pic"><i class="fa fa-upload"></i> 上传</button></span>
                    <span><button type="button" id="fachoose-pic" class="btn btn-primary fachoose" data-input-id="c-pic" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> 选择</button></span>
                </div>
                <span class="msg-box n-right" for="c-pic"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-pic"></ul>
        </div>
    </div>

    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-primary btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo app('request')->env('app_debug')?'':'.min'; ?>.js"
        data-main="/assets/js/require-backend<?php echo app('request')->env('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>