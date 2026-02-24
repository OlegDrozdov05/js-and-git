import fs from 'fs'
const writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!\n");
writeableStream.write("Продолжение записи\n");
writeableStream.end("Завершение записи\n");

const readableStream = fs.createReadStream("hello.txt");
  
readableStream.on("data", function(chunk){ 
    console.log(chunk.toString());
});

//! https://www.w3schools.com/nodejs/nodejs_streams.asp
//on events:
// - data: данные
// - finish: конец (для writable)
// - error: ошибка 
// - end: конец файла (для readable)
// - close: если был закрыт ресурс
// - readable: можно читать файл
// и тд



//pipes - связывает поток для чтения и записи 

const readableStream2 = fs.createReadStream("hello.txt")
const writeableStream2 = fs.createWriteStream("hello2.txt")
readableStream2.pipe(writeableStream2) //передает данные из readableStream в writeableStream
//.pipe возвращает поток, поэтому можно чейнить их