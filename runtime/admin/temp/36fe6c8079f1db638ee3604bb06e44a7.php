<?php /*a:4:{s:53:"/www/wwwroot/tiktokv.fit/app/admin/view/kdm/edit.html";i:1733165920;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
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
        <label class="control-label col-xs-12 col-sm-2">选择时间:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="radio">
                <?php if(is_array($day) || $day instanceof \think\Collection || $day instanceof \think\Paginator): if( count($day)==0 ) : echo "" ;else: foreach($day as $key=>$vo): ?>
                <label for="row[day]-<?php echo htmlentities($key); ?>"><input id="row[day]-<?php echo htmlentities($key); ?>" name="row[day]" type="radio" value="<?php echo htmlentities($key); ?>" <?php if(in_array(($key), is_array($row['day'])?$row['day']:explode(',',$row['day']))): ?>checked<?php endif; ?> /> <?php echo htmlentities($vo); ?></label>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
    </div>
   <div class="form-group">
        <label for="c-name" class="control-label col-xs-12 col-sm-2">第几单:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-num" data-rule="required" class="form-control" value="<?php echo htmlentities($row['num']); ?>" name="row[num]" type="number">
        </div>
    </div>
 <div class="form-group">
        <label for="c-name" class="control-label col-xs-12 col-sm-2">卡单金额:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-amount" data-rule="required" placeholder="" value="<?php echo htmlentities($row['amount']); ?>" class="form-control" name="row[amount]" type="text">
        </div>
    </div>
    <p style="padding-left:60px;color:#999;font-size:13px">
       如输入区间金额，系统随机从区间内生成一个卡单金额,金额用-隔开，
    </p>
     <div class="form-group">
        <label for="c-name" class="control-label col-xs-12 col-sm-2">佣金比例(%):</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-income" data-rule="required" value="<?php echo htmlentities($row['income']); ?>" class="form-control" name="row[income]" type="number">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Status'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="radio">
                <?php if(is_array($statusList) || $statusList instanceof \think\Collection || $statusList instanceof \think\Paginator): if( count($statusList)==0 ) : echo "" ;else: foreach($statusList as $key=>$vo): ?>
                <label for="row[status]-<?php echo htmlentities($key); ?>"><input id="row[status]-<?php echo htmlentities($key); ?>" name="row[status]" type="radio" value="<?php echo htmlentities($key); ?>" <?php if(in_array(($key), is_array($row['status'])?$row['status']:explode(',',$row['status']))): ?>checked<?php endif; ?> /> <?php echo htmlentities($vo); ?></label>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
    </div>
    
<!--    <div class="form-group">
        <label for="c-address" class="control-label col-xs-12 col-sm-2"><?php echo __('Address'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" data-rule="required" class="form-control" name="row[address]" type="text" value="<?php echo htmlentities($row['address']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Status'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="radio">
                <?php if(is_array($statusList) || $statusList instanceof \think\Collection || $statusList instanceof \think\Paginator): if( count($statusList)==0 ) : echo "" ;else: foreach($statusList as $key=>$vo): ?>
                <label for="row[status]-<?php echo htmlentities($key); ?>"><input id="row[status]-<?php echo htmlentities($key); ?>" name="row[status]" type="radio" value="<?php echo htmlentities($key); ?>" <?php if(in_array(($key), is_array($row['status'])?$row['status']:explode(',',$row['status']))): ?>checked<?php endif; ?> /> <?php echo htmlentities($vo); ?></label>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
    </div>-->

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