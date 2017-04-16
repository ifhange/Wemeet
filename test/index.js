var server = require("./server");
var router = require("./router"); //使得路由函數可以被注入到伺服器中
var requestHandlers = require("./requestHandlers");

// handle不僅是一個東西，也是一個動詞
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;


server.start(router.route, handle); //請求這個檔案並把它指向一個變數，其中已匯出的函數就可以被我們使用了

/*在index檔案中，我們可以將router物件傳遞進去，
伺服器隨後可以執行這個物件的route函數
我們傳遞一個東西，然後伺服器利用這個東西來完成一些事
EX: 嗨~那個叫路由的東西，能幫我把這個路由一下嗎
但是伺服器其實不需要這樣的東西。它只需要把事情做完就行，其實為了把事情做完，
你根本不需要東西，你需要的是動作。也就是說，你不需要名詞，你需要動詞 */
