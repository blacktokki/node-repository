const request= require("axios");
const cheerio= require("cheerio");
const fs=require("fs");
//페이지목록 1~287
for (let ii=1;ii<=287;ii++){
  setTimeout(()=>{
    request("http://www.jobkorea.co.kr/starter/PassAssay?Page="+ii).then(html=>{
      const $=cheerio.load(html.data);
      const $selflist=$("ul.selfLists li");

      $selflist.each(function(i,elem){
        const link=$(this).find("a.logo").attr("href");
        const num=parseInt(link.replace("/starter/PassAssay/View/",""));

        fs.stat("./page1/"+num+".json", function(err, stat) {
          if (err==null){
            console.log(ii+" ["+num+"] skip");
          }
          else if(err.code=='ENOENT'){
            console.log(ii+" ["+num+"] ");
            request("http://www.jobkorea.co.kr"+link).then((html)=>{
              const $=cheerio.load(html.data);
              let dllist=[];
              let qstlist=[];
              const $container=$("div.stContainer");
              $container.find("dl.qnaLists dt.on").each(function(i,elem){
                qstlist[i]=$(this).find("dt button span.tx").text();
              });
              $container.find("dl.qnaLists dd.show").each(function(i,elem){
                $tx=$(this).find("div.tx");
                $tx.find(".txSpllChk,.sup").remove();
                dllist[i]={
                  question:qstlist[i],
                  question_clean:qstlist[i].replace(/[1-9].\s/,"").replace('.','').
                    replace(/[\(\[].+[\)\]]/g,"").replace(/^\s+|\s+$/g,""),
                  text:$tx.text(),
                  advice:$(this).find("div.advice").text()
                };
              });
              const tit=$container.find("div.viewTitWrap em").text();
              const pos=tit.split(" ")[3];
              const data={
                comp:$container.find("div.viewTitWrap strong a").text(),
                title:tit,
                pos:pos,
                author:"_JK",
                edit_date:new Date().toLocaleString(),
                qna:dllist
              };
              //console.log(data);
              return data;
            }).then(data=>{
              //console.log(JSON.stringify(data, null, '\t'));
              fs.writeFile( "./page1/"+num+".json", JSON.stringify(data, null, '\t'), "utf8",()=>{});
              console.log(ii+" ["+num+"] finish");
            }).catch(function (err) {
              console.error(err); // Error 출력
            });
          }
          else{
            console.log(ii+" ["+num+"] other error");
          }
        });
      });
    });
  },200*ii);
}
