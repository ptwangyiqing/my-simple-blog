<?php
include ("conn.php");
if ($_POST['submit']){
  $sql="insert into message(id,user,title,content,lastdate) values ('','$_POST[user]','$_POST[title]','$_POST[content]',now())";
    mysql_query($sql);
    echo "<script>alert('添加成功');history.go(-1)</script>";
}
?>