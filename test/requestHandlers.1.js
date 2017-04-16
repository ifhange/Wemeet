/* Node.js可以在不新增額外執行緒的情況下，
依然可以對任務進行並行處理 —— Node.js是單執行緒的。
它透過事件輪詢（event loop）來實現並行操作，
對此，我們應該要充分利用這一點 —— 盡可能的避免Blocking操作，
取而代之，多使用Non-Blocking操作
然而，要用Non-Blocking操作，我們需要使用回呼(callback)，
透過將函數作為參數傳遞給其他需要花時間做處理的函數
（比方說，休眠10秒，或者查詢資料庫，又或者是進行大量的計算）*/
var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  /* 
    var content = "empty";
    exec()做了什麼呢？它從Node.js來執行一個shell命令
  。在上述例子中，我們用它來取得目前目錄下所有的檔案（ "ls -lah" ）
  ，然後，當/startURL請求的時候將檔案訊息輸出到瀏覽器中。
    exec("ls -lah", function (error, stdout, stderr) {
      content = stdout;
    });
   */

    /*start處理程序在exec()的匿名回呼(callback)函數中做請求回應的操作，
    而upload處理程序仍然是簡單的回復 "Hello World" ，
    只是這次是使用response物件而已*/
    exec("ls -lah", function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });


/* 我們的程式碼是同步執行的，這就意味著在執行exec()之後，
Node.js會立即執行 return content ；在這個時候，content仍然是 "empty" ，
因為傳遞給exec()的回呼(callback)函數還未執行到——
因為exec()的操作是非同步的 */
}

//我們的處理程序函數需要接收response參數，為了對請求作出直接的回應
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;