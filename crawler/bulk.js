var fs = require('fs');
const numstr="1"
const pg="./page"+numstr
fs.readdir(pg, function(error, filelist){
  let str="";
  filelist.forEach(function(fname,i){
    fs.readFile(pg+'/'+fname, 'utf8', function(err, data){
      try{
        obj=JSON.parse(data);
        str+=JSON.stringify({
          index:{
            _index:"outerdoc",
            _type:"_doc",
            _id:i+(numstr==="2"?10000:0)
          }
        })+"\n"+JSON.stringify(obj)+"\n";
      }
      catch(e){
        console.log(fname+' err');
      }
    });
  });
  setTimeout(function () {
    fs.writeFile( "bulk"+numstr+".json", str, "utf8",()=>{});
  },3000);
});
