<!DOCTYPE html>
<html>
<head lang="zh-CN">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="shortcut icon" type="image/x-icon" href="../dong.ico"/>
    <title>东东护肤</title>
    <meta name="Keywords" content="东东护肤，男士护肤，护肤，东东"/>
    <meta name="Description" content="东东护肤是东东小朋友的个人护肤小站，原创或转载东东认同的护肤理念，热衷于成分分析，科学护肤。"/>
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="../css/articles.css">
    <!--[if lt IE 9]>
    <script src="lib/html5shiv/html5shiv.min.js"></script>
    <script src="lib/respond/respond.min.js"></script>
    <![endif]-->
    <?php include("conn.php") ?>
</head>
<body>
<header>
    <div class="top">
        <div>
            <p>东东护肤</p>
        </div>
        <ul>
            <li><a href="../articles.html">首页</a></li>
            <li><a href="../articles.html">分类</a></li>
            <li><a href="01article.html">关于</a></li>
        </ul>
    </div>
</header>


 <div class="biaoge">
     <table width="80%" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#add3ef">
 <?php
 $sql="select * from message order by id desc";
 $query=mysql_query($sql);
 while($row=mysql_fetch_array($query)){ 
 ?>
 
 <tr bgcolor="#eff3ff">
    <td>标题： <?php echo $row['title'];?> 
    <font color="#F17C72">用户： <?php echo $row['user'];?> 
    </td>
 </tr>
 <tr bgColor="#ffffff">
    <td>发表内容:<?php echo $row['content'];?></td>
 </tr>
 <tr bgColor="#ffffff">
    <td><div align="right">时间:<?php echo $row['lastdate'];?></td></div>
 </tr>
 <?php }?>
 <tr bgcolor="#f0fff0">
    <td>
        <div align="right">
            <a href="../articles.html">返回</a>
        </div> 
    </td>
 </tr>
 </table>
 </div>

</body>
</html>
