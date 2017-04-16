var http = require("http");
var url = require("url");

/*上述程式碼做了三件事情： 首先，我們設定了接收資料的編碼格式為UTF-8，
然後註冊了 "data" 事件的監聽器，用於收集每次接收到的新資料區塊，
並將其賦值給postData 變數，最後，我們將請求路由的執行移到end事
件處理程序中，以確保它只會當所有資料接收完畢後才觸發，並且只觸發
一次。我們同時還把POST資料傳遞給請求路由，因為這些資料，請求處理
程序會用到。

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;