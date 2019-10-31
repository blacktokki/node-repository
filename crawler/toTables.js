var fs = require('fs');
const numstr="2"
const pg="./page"+numstr
fs.readdir(pg, function(error, filelist){
  filelist.forEach(function(fname,i1){
    console.log(fname);
    let obj=null;
    fs.readFile(pg+' - 복사본/'+fname, 'utf8', function(err, data){
      //console.log(data);
      try{
        obj=JSON.parse(data);
        const qna=obj.qna;
        qna.forEach(function(ele,i2){
          //console.log(ele.title);
          let qst=ele.question;
        });
        obj.qna=qna;
        fs.writeFile(pg+"/"+fname, JSON.stringify(obj, null, '\t'), "utf8",()=>{});
      }
      catch(e){
        console.log(fname+' err');
        console.log(e);
        //console.log(e);
      }
    });
    //console.log(JSON.stringify(obj, null, '\t'));
  });
})
