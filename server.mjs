// Production entry point for hosting platforms.
// Boots the prebuilt Next.js app (from `next build`) and listens on the
// port supplied by the host via process.env.PORT, binding to 0.0.0.0 so the
// container can route inbound traffic on ports 80/443.
import { createServer } from "node:http";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "0.0.0.0";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(port, hostname, () => {
      console.log(`> GingerMail site ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
