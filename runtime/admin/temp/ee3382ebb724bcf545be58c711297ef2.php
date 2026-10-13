<?php /*a:4:{s:57:"/www/wwwroot/tiktokv.fit/app/admin/view/deposit/edit.html";i:1740922028;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
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

    <?php if($status == 2 || $status == 3 || $status == 33): ?>
     <div class="form-group">
        <label for="c-remark" class="control-label col-xs-12 col-sm-2">用户名:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" readonly class="form-control" type="text" value="<?php echo htmlentities(findpp($row['uid'])); ?>">
        </div>
    </div>
     <div class="form-group">
        <label for="c-remark" class="control-label col-xs-12 col-sm-2">上级代理:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" readonly class="form-control" type="text" value="<?php echo htmlentities(findppp($row['uid'])); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-remark" class="control-label col-xs-12 col-sm-2"><?php echo __('提现地址'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" readonly class="form-control" type="text" value="<?php echo htmlentities($row['address_info']['address']); ?>">
        </div>
    </div>
     <div class="form-group">
        <label for="c-remark" class="control-label col-xs-12 col-sm-2">提款金额:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" readonly class="form-control" type="text" value="<?php echo htmlentities($row['real_num']); ?>">
        </div>
    </div>
  
    <?php endif; if($status == 3): ?>
  <div class="form-group">
        <label for="c-remark" class="control-label col-xs-12 col-sm-2"><?php echo __('拒绝理由'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-remark" data-rule="required" class="form-control" name="row[remark]" type="text" value="">
        </div>
    </div>
    <?php endif; if($status == 33): ?>
    <div class="form-group">
        <label for="c-withdraw_time" class="control-label col-xs-12 col-sm-2"><?php echo __('禁止提款时间'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-withdraw_time" data-rule="required" class="form-control" name="row[withdraw_time]" type="number" value="">
        </div>
    </div>
    <?php endif; if($status == 4): ?>
    <div class="form-group">
        <label for="c-pay" class="control-label col-xs-12 col-sm-2"><?php echo __('Pay.name2'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-pay" data-rule="required" class="form-control selectpage" data-source="pay_out/index" data-params='{"custom[status]": "1"}' data-primary-key="name" name="row[pay]" type="text" value="">
        </div>
    </div>
    <?php endif; ?>

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