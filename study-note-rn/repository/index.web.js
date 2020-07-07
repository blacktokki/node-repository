const load = (callback) => {
    var input=document.createElement('input');
    input.type='file';
    var reader = new FileReader();
    reader.onload = ()=>{
      var json = reader.result
      callback(JSON.parse(json))
    }
    input.onchange= (e) => reader.readAsText(e.target.files[0])
    input.click();
}


const save = (filename,data) => {
    console.log('~~')
    var json = JSON.stringify(data)
    var a = document.createElement("a");
    var file = new Blob([json], {type:'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
}

export {load, save}