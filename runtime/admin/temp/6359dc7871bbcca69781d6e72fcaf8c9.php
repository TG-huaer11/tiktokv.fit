<?php /*a:4:{s:60:"/www/wwwroot/tiktokv.fit/app/admin/view/goods_cate/edit.html";i:1678756550;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
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
        <label for="c-bili" class="control-label col-xs-12 col-sm-2"><?php echo __('Bili'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bili" data-rule="required" class="form-control" name="row[bili]" type="text" value="<?php echo htmlentities($row['bili']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-cate_info" class="control-label col-xs-12 col-sm-2"><?php echo __('Cate_info'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea data-rule="required" name="row[cate_info]" id="c-cate_info" cols="60" rows="5" class="form-control"><?php echo htmlentities($row['cate_info']); ?></textarea>
        </div>
    </div>

    <div class="form-group">
        <label for="c-min" class="control-label col-xs-12 col-sm-2"><?php echo __('Min'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-min" data-rule="required" class="form-control" name="row[min]" type="text" value="<?php echo htmlentities($row['min']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label for="c-level_id" class="control-label col-xs-12 col-sm-2"><?php echo __('Level_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-level_id" data-rule="required" class="form-control" name="row[level_id]" type="text" value="<?php echo htmlentities($row['level_id']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Cate_pic'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-cate_pic" data-rule="required" class="form-control" size="50" name="row[cate_pic]" type="text" value="<?php echo htmlentities($row['cate_pic']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-cate_pic" class="btn btn-danger faupload" data-input-id="c-cate_pic" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp,image/webp" data-multiple="true" data-preview-id="p-cate_pic"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-cate_pic" class="btn btn-primary fachoose" data-input-id="c-cate_pic" data-mimetype="image/*"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-cate_pic"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-cate_pic"></ul>
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