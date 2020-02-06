var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost', //db접속 주소
  port     : 3306,
  user     : 'root', //db접속id
  password : 'ydh051541', //db접속pw
  database : 'mystory', //db명
  timezone: 'Asia/Seoul'
});

var fs = require('fs');
const numstr="2"
const pg="./crawler/page"+numstr
fs.readdir(pg, function(error, filelist){
  var count=filelist.length;
  filelist.forEach(function(fname,i){
    fs.readFile(pg+'/'+fname, 'utf8', function(err, data){
      try{
        console.log(fname);
        const obj=JSON.parse(data);
        obj.qna.forEach(function(ele,i2){
          var sql = 'INSERT INTO intro(dept,company,question,answer,user_id,state,edit_date)'+
            'VALUES(?,?,?,?,?,?,?)';
          var text=ele.text
            .replace("\n                            \n                                                            ","")
            .replace("                                                                 \n                                                            \n                                                            \n                            \n                        ","");
          var params = [obj.pos,obj.comp,ele.question ,text,obj.author,"미작성",obj.edit_date];
          //console.log(params);
          conn.query(sql,params,function(err,rows,fields) {
            if(err){
              console.log(err);
            }else{
              console.log(rows.insertId);
              console.log(fname+"finish");
            }
          });
        });
      }
      catch(e){
        console.log(fname+' err');
      }
    });
  });
  /*
  while(count){
  }*/
});
