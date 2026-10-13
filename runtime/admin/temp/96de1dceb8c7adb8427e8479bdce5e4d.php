<?php /*a:4:{s:52:"/www/wwwroot/tiktokv.fit/app/admin/view/kdm/add.html";i:1740532788;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
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
                                <form id="add-form2" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">
   
   <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">选择时间:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="radio">
                <?php if(is_array($day) || $day instanceof \think\Collection || $day instanceof \think\Paginator): if( count($day)==0 ) : echo "" ;else: foreach($day as $key=>$vo): ?>
                <label for="row[day]-<?php echo htmlentities($key); ?>"><input id="row[day]-<?php echo htmlentities($key); ?>" name="row[day]" type="radio" value="<?php echo htmlentities($key); ?>" <?php if(in_array(($key), explode(',',"1"))): ?>checked<?php endif; ?> /> <?php echo htmlentities($vo); ?></label>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
    </div>
    
    <!-- 这里是 item 的模板，用于动态添加 -->
    <div id="item-template" class="form-group item" style="display: none;">
       <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">第几单:</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input   class="form-control" name="row[num][]" type="number">
        </div>
       </div>
        <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">卡单金额:</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input   class="form-control" name="row[amount][]" type="number">
        </div>
       </div>
       
        <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">佣金比例:</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input  class="form-control" name="row[income][]" type="number">
        </div>
       </div>
       <!-- 添加删除按钮 -->
       <div class="col-xs-12 col-sm-12 text-right">
           <button type="button" class="btn btn-danger btn-sm remove-item">删除</button>
       </div>
    </div>
   <div id="add-form">
    <!-- 这里是实际显示的 item -->
    <div class="form-group item">
       <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">第几单:</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input  class="form-control" name="row[num][]" type="number">
        </div>
       </div>
        <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">卡单金额:</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input   class="form-control" name="row[amount][]" type="number">
        </div>
       </div>
       
        <div class="col-xs-4 col-sm-4">
           <label  class="control-label col-xs-4 col-sm-4" style="padding-left:0px;padding-right:0px">佣金比例:%</label>
        <div class="col-xs-8 col-sm-8"  style="padding-left:0px;padding-right:0px">
            <input   class="form-control" name="row[income][]" type="number">
        </div>
       </div>
       <!-- 添加删除按钮 -->
       <div class="col-xs-12 col-sm-12 text-right">
           <button type="button" class="btn btn-danger btn-sm remove-item">删除</button>
       </div>
    </div>
 </div>

    <input type="hidden"  name="row[uid]" value="<?php echo htmlentities($uid); ?>"/>
  
    <div class="form-group ">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="button" id="add-item" class="btn btn-primary btn-embossed"><?php echo __('追加'); ?></button>
        </div>
    </div>

    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-primary btn-embossed"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
    // 点击“追加”按钮时
    $('#add-item').click(function() {
        // 克隆 item 模板
        var newItem = $('#item-template').clone();
        // 显示克隆的 item
        newItem.removeAttr('id').removeAttr('style');
        // 将克隆的 item 添加到表单中
        $('#add-form').append(newItem);
    });

    // 点击“删除”按钮时
    $(document).on('click', '.remove-item', function() {
        // 找到当前按钮所在的 item，并移除
        $(this).closest('.item').remove();
    });


});
</script>
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