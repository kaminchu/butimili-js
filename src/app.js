import http from "http";
import url from "url";

const PORT = process.env.PORT || 3000;

const parseToButimili = (req) => {
  const pathname = url.parse(req.url).pathname.substring(1);
  const users = pathname
    .split(new RegExp("[\/+]"))
    .map(e => e.indexOf("@") == 0 ? e : "@" + e)
    .join(' ');

  const butimili = `${users} うおおおおおおあああああああああああああああああああ！！！！！！！！！！！ (ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！)`;
  const toSubstring = butimili.substr(0, 139);
  return encodeURI(toSubstring);
};

const app = (req, res) => {
  const butimili_text = parseToButimili(req);
  const butimili_url = `https://twitter.com/intent/tweet?text=${butimili_text}`;

  res.writeHead(302, { 'Location': butimili_url });
  res.end();
};

// server
const server = http.createServer(app);
server.listen(PORT);
server.listen(PORT, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
