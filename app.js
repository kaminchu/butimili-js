var http = require("http");
var url = require("url");


http.createServer(function (req, res) {
  var butimili_text = encodeURI(createButimili(req).substr(0, 139));
  var butimili_url = `https://twitter.com/intent/tweet?text=${butimili_text}`;

  res.writeHead(302, { 'Location': butimili_url });
  res.end();
}).listen(3000);

function createButimili(req) {
  var mapper = function (element) {
    return element.indexOf('@') == 0 ? element : '@' + element;
  }
  var pathname = url.parse(req.url).pathname.substring(1);
  var users = pathname.split(new RegExp('[\/+]')).map(mapper).join(' ');

  return `${users} うおおおおおおあああああああああああああああああああ！！！！！！！！！！！ (ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！)`;
}
console.log("Server has started.");


