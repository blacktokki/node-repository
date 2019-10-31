const request= require("axios");
const cheerio= require("cheerio");
const fs=require("fs");
//페이지목록 1~256
for (let ii=1;ii<=256;ii++){
  setTimeout(()=>{
    request("http://www.saramin.co.kr/zf_user/public-recruit/coverletter-list/page/"+ii+"?pass_status=y").then(html=>{
      const $=cheerio.load(html.data);
      const $selflist=$("table.recruit_content_list tbody tr");
      $selflist.each(function(i,elem){
        const link=$(this).find("td.td_apply_subject a").attr("href");
        const num=parseInt(link.replace("/zf_user/public-recruit/coverletter?real_seq=",""));
        fs.stat("./crawler/page2/"+num+".json", function(err, stat) {
          if (err==null){
            console.log(ii+" ["+num+"] skip");
          }
          else if(err.code=='ENOENT'){
            console.log(ii+" ["+num+"] ");
            request("http://www.saramin.co.kr"+link).then((html)=>{
              const $=cheerio.load(html.data);
              let dllist=[];
              const $container=$("div.open_recruit_content");
              $container.find("div.wrap_self_intro div.box_ty3").each(function(i,elem){
                const qst=$(this).find("h3").text();
                $(this).find("h3,div.txt_byte,txt_self_point,button.btn_tsp_hide").remove();
                dllist[i]={
                  question:qst,
                  question_clean:qst.replace(/[1-9][.]\s/,"").replace('.','').
                    replace(/[\(\[].+[\)\]]/g,"").replace(/^\s+|\s+$/g,""),
                  text:$(this).text(),
                  advice:""
                };
              });
              const tit=$container.find("h1.txt_logo span.txt_recruit").text();
              const pos=$container.find("span.tag_apply").text().replace("지원분야 | ","");
              const data={
                comp:$container.find("h1.txt_logo span.tit_company_name").text(),
                title:tit,
                pos:pos,
                author:"_SI",
                edit_date:new Date().toLocaleString(),
                qna:dllist
              };
              //console.log(data);
              return data;
            }).then(data=>{
              //console.log(JSON.stringify(data, null, '\t'));
              fs.writeFile( "./crawler/page2/"+num+".json", JSON.stringify(data, null, '\t'), "utf8",()=>{});
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
  },1900*ii);
}
