function route(handle, pathname, response) {
  console.log("About to route a request for" + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();

    /*相對此前從請求處理程序中取得回傳值，
    這次取而代之的是直接傳遞response物件。
    如果沒有對應的請求處理器處理，我們就直接回傳 "404" 錯誤。 */
  }
  /* 透過以上程式碼，我們首先檢查給定的路徑對應的請求處理程序是否存在，
  如果存在的話直接執行相應的函數。我們可以用從關聯陣列中取得元素一樣的
  方式從傳遞的物件中取得請求處理函數，因此就有了簡潔流暢的形如
  handle[pathname]();的表達式，這個感覺就像在前方中提到的那樣： 
  "嗨，請幫我處理了這個路徑" 。 */


}

exports.route = route;