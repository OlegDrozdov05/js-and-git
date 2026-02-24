import http from 'http'
import os from 'os';
import { nanoid } from 'nanoid'; 

http.createServer(function(request,response){
  response.setHeader("Content-Type","text/json; charset=utf-8")
  response.write(`${os.userInfo().username}, ${os.version}`);
  response.end("\nКонец записи");
  
}).listen(3000, "127.0.0.1",function(){
  console.log("Сервер начал прослушивание запросов на порту 3000");
});

//request - Запрос
// - headers
// - method
// - url
//response - ответ
//- statusCode
// - statusMessage
// setHeader(name,value)
// write
// writeHead - добавляет статусный код и заголовки в ответ
// end - конец


