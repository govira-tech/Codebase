// server.js
import https from "https";
import http from "http";
import fs from "fs";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = Number(process.env.PORT || 3000);
const USE_HTTPS = process.env.USE_HTTPS !== "false"; // allow disabling via env

const hasCert = fs.existsSync("./localhost-key.pem") && fs.existsSync("./localhost.pem");

app.prepare().then(() => {
  if (USE_HTTPS && hasCert) {
    const httpsOptions = {
      key: fs.readFileSync("./localhost-key.pem"),
      cert: fs.readFileSync("./localhost.pem"),
    };

    https
      .createServer(httpsOptions, (req, res) => {
        handle(req, res);
      })
      .listen(PORT, (err) => {
        if (err) throw err;
        console.log(
          `> Ready on https://localhost:${PORT}`
        );
      });
  } else {
    http
      .createServer((req, res) => {
        handle(req, res);
      })
      .listen(PORT, (err) => {
        if (err) throw err;
        const note = USE_HTTPS && !hasCert ? " (dev certs not found; using HTTP)" : "";
        console.log(`> Ready on http://localhost:${PORT}${note}`);
      });
  }
});
