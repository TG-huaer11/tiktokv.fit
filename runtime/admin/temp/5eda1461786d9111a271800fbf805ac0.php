<?php /*a:4:{s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/user/user/edit.html";i:1741877620;s:59:"/www/wwwroot/tiktokv.fit/app/admin/view/layout/default.html";i:1716492206;s:56:"/www/wwwroot/tiktokv.fit/app/admin/view/common/meta.html";i:1716492208;s:58:"/www/wwwroot/tiktokv.fit/app/admin/view/common/script.html";i:1716492208;}*/ ?>
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

    <input type="hidden" class="form-control" name="row[id]" value="<?php echo htmlentities($row['id']); ?>">
    <input type="hidden" class="form-control" name="row[type]" value="<?php echo htmlentities($row['type']); ?>">

    <?php if($row['type'] == 'userinfo'): ?>

    <div class="form-group">
        <label for="c-credit_score" class="control-label col-xs-12 col-sm-2"><?php echo __('信用分'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-credit_score" data-rule="required" class="form-control" name="row[credit_score]" type="text" value="<?php echo htmlentities($row['credit_score']); ?>">
        </div>
    </div>
     <div class="form-group">
        <label for="c-credit_score" class="control-label col-xs-12 col-sm-2"><?php echo __('备注'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-nickname" data-rule="required" class="form-control" name="row[nickname]" type="text" value="<?php echo htmlentities($row['nickname']); ?>">
        </div>
    </div>
    <?php endif; if($row['type'] == 'send'): ?>
    <div class="form-group">
        <label for="c-title" class="control-label col-xs-12 col-sm-2"><?php echo __('标题'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-title" data-rule="required" class="form-control" name="row[title]" type="text"
                   value="System Notice">
        </div>
    </div>

    <div class="form-group">
        <label for="c-content" class="control-label col-xs-12 col-sm-2"><?php echo __('内容'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea id="c-content" data-rule="required" class="form-control editor" name="row[content]"></textarea>
        </div>
    </div>
    <?php endif; if($row['type'] == 'strategy'): ?>
    <div class="form-group">
        <label for="c-content" class="control-label col-xs-12 col-sm-2"><?php echo __('策略'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <table class="table table-responsive fieldlist" data-name="row[strategy]" data-template="testtpl" data-tag="tr">
                <tr>
                    <td>单数</td>
                    <td>追加金额</td>
                    <td>收益(%)</td>
<!--                    <td></td>-->
                </tr>
                <tr class="hide">
                    <td colspan="5"><a href="javascript:;" class="btn btn-sm btn-success btn-append"><i class="fa fa-plus"></i> 追加</a></td>
                </tr>
               <textarea name="row[strategy]" class="form-control hide" cols="30" rows="5"><?php echo htmlentities($row['strategy']); ?></textarea>
            </table>
            <!--定义模板，模板语法使用Art-Template模板语法-->
            <script type="text/html" id="testtpl">
                <tr class="form-inline">
                    <td><input type="text" name="row[<%=name%>][<%=index%>][number]" class="form-control" value="<%=row['number']%>" size="15" readonly></td>
                    <td><input type="text" name="row[<%=name%>][<%=index%>][amount]" class="form-control" value="<%=row['amount']%>" size="20"></td>
                    <td><input type="text" name="row[<%=name%>][<%=index%>][income]" class="form-control" value="<%=row['income']%>" size="20"></td>
<!--                    <td class="hide"><span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span> <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span></td>-->
                </tr>
            </script>
        </div>
    </div>
    <?php endif; if($row['type'] == 'login'): ?>
    <div class="form-group">
        <label for="c-pwd" class="control-label col-xs-12 col-sm-2"><?php echo __('登录密码'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-pwd" class="form-control" name="row[pwd]" type="number">
        </div>
    </div>

    <div class="form-group">
        <label for="c-title" class="control-label col-xs-12 col-sm-2"><?php echo __('交易密码'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-pwd2" class="form-control" name="row[pwd2]" type="number">
        </div>
    </div>
    <?php endif; if($row['type'] == 'upname'): ?>
    <div class="form-group">
        <label for="c-upname" class="control-label col-xs-12 col-sm-2"><?php echo __('代理'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-upname" class="form-control" name="row[upname]" type="text" placeholder="请输入">
        </div>
    </div>
    <?php endif; if($row['type'] == 'top_parent'): ?>
    <div class="form-group">
        <label for="c-top_parent" class="control-label col-xs-12 col-sm-2"><?php echo __('更换代理线'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                <select class="form-control"  name="row[top_parent]">
            <option value="0">请选择</option>
           <?php if(is_array($agent_list) || $agent_list instanceof \think\Collection || $agent_list instanceof \think\Paginator): $i = 0; $__LIST__ = $agent_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <option value="<?php echo htmlentities($item['user_id']); ?>"><?php echo htmlentities($item['username']); ?></option>
              <?php endforeach; endif; else: echo "" ;endif; ?>
        </select>
        </div>
    </div>
    <?php endif; if($row['type'] == 'address'): ?>
    <div class="form-group">
        <label for="c-address" class="control-label col-xs-12 col-sm-2"><?php echo __('TRC-20地址'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-address" class="form-control" name="row[address]" type="text" value="<?php echo htmlentities($row['address']); ?>">
        </div>
    </div>
    <?php endif; if($row['type'] == 'add'): ?>
    <div class="form-group">
        <label for="c-money" class="control-label col-xs-12 col-sm-2"><?php echo __('彩金(+)'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-money" class="form-control" name="row[money]" type="number" placeholder="请输入">
        </div>
    </div>
    <?php endif; if($row['type'] == 'sub'): ?>
    <div class="form-group">
        <label for="c-money" class="control-label col-xs-12 col-sm-2"><?php echo __('扣款(-)'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-money" class="form-control" name="row[money]" type="number" placeholder="请输入">
        </div>
    </div>
    <?php endif; if($row['type'] == 'cardnum'): ?>
    <div class="form-group">
        <label for="c-bankname" class="control-label col-xs-12 col-sm-2"><?php echo __('银行名称'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bankname" class="form-control" data-rule="required" name="row[bankname]" type="text"
                   placeholder="请输入" value="<?php echo htmlentities($bankInfo['bankname']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-cardnum" class="control-label col-xs-12 col-sm-2"><?php echo __('银行卡号'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-cardnum" class="form-control" data-rule="required" name="row[cardnum]" type="text"
                   placeholder="请输入" value="<?php echo htmlentities($bankInfo['cardnum']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-username" class="control-label col-xs-12 col-sm-2"><?php echo __('姓名'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-username" class="form-control" data-rule="required" name="row[username]" type="text"
                   placeholder="请输入" value="<?php echo htmlentities($bankInfo['username']); ?>">
        </div>
    </div>
<!--    <div class="form-group">-->
<!--        <label for="c-ifsc" class="control-label col-xs-12 col-sm-2"><?php echo __('IFSC'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-ifsc" class="form-control" data-rule="required" name="row[ifsc]" type="text"-->
<!--                   placeholder="请输入" value="<?php echo htmlentities($bankInfo['ifsc']); ?>">-->
<!--        </div>-->
<!--    </div>-->
    <?php endif; if($row['type'] == 'progress'): ?>
    <div class="form-group">
        <label for="c-progress" class="control-label col-xs-12 col-sm-2"><?php echo __('Progress'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-progress" class="form-control" name="row[progress]" type="number" value="<?php echo htmlentities($row['progress']); ?>">
        </div>
    </div>
    <?php endif; if($row['type'] == 'order_model'): ?>
    <div class="form-group">
        <label for="c-order_model" class="control-label col-xs-12 col-sm-2"><?php echo __('Order_model'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-order_model" class="form-control selectpage" data-source="order_model/index"
                   data-params='{"custom[status]":"1","custom[parent_id]":"0"}' name="row[order_model]" type="text"
                   value="<?php echo htmlentities($row['order_model']); ?>">
        </div>
    </div>
    <?php endif; if($row['type'] == 'level'): ?>
    <div class="form-group">
        <label for="c-level" class="control-label col-xs-12 col-sm-2"><?php echo __('用户等级'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-level" class="form-control selectpage" data-source="user.user_level/index" name="row[level]"
                   type="text" value="<?php echo htmlentities($row['level']); ?>">
        </div>
    </div>
    <?php endif; if($row['type'] == 'joint_order_model'): ?>
    <div class="form-group">
        <label for="c-joint_order_model" class="control-label col-xs-12 col-sm-2"><?php echo __('联单模式'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-joint_order_model" class="form-control selectpage" data-source="joint_order_model/index"
                   name="row[joint_order_model]" type="text" value="<?php echo htmlentities($row['joint_order_model']); ?>">
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