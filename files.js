import fs from 'fs'
//node:fs/promises - fs для работы с async/await
//fs.readFileSync для синхронного чтения
fs.readFile("hello.txt",(err, data) => {
  if(err) return console.log(err);
  console.log(data.toString())
})
fs.writeFileSync("hello.txt","new dataaaaa");
//fs.appendFile/appendFileSync - добавление в файл 
fs.stat("hello.txt", (error, stats) => {  
    if (error)  return console.error(error);
    console.log(stats.isFile());        // true  
    console.log(stats.isDirectory());   // false  
    console.log(stats);
});
//fs.statSync
//fs.unlink/unlickSync - удаление файла

fs.mkdir("test", (error) => {  
        if (error) return console.log(error);
        console.log("Folder created");
});
//readdir - считывание файлов
fs.rmdir("test", (error) => {  
        if (error) return console.log(error);
        console.log("Folder deleted");
});

//fs.access - доступность файла