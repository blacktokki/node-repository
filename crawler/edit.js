var fs = require('fs');
const numstr="2"
const pg="./page"+numstr
fs.readdir(pg, function(error, filelist){
  filelist.forEach(function(fname,i){
    console.log(fname);
    let obj=null;
    fs.readFile(pg+' - 복사본/'+fname, 'utf8', function(err, data){
      //console.log(data);
      try{
        obj=JSON.parse(data);
        //obj.author="_JK";
        //obj.edit_date=new Date().toLocaleString();
        const arr=obj.qna;
        arr.forEach(function(ele,i){
          //console.log(ele.title);
          let qst=ele.question;
          qst=qst.replace(/[1-9]+.\s/,"").replace(/[1-9]+.+[1-9]+\s/,"").replace('.','').
          replace(/[\(\[].+[\)\]]/g,"").replace(/^\s+|\s+$/g,"");
          ele.question_clean=qst;
        });
        obj.qna=arr;
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
