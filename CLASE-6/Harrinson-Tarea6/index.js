import { log } from "console";
import http from "http";

const port = 3002;

const products = JSON.stringify([
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Chair", price: 49.99, category: "Furniture" },
  { id: 3, name: "Pen", price: 1.99, category: "Stationery" },
]);

const servertarea6 = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Este es el inicio");
      res.end();
      break;

    case "/products":
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(products);
        res.end();
        break;
      }

      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });

        req.on("end", () => {
          console.log(body);
          try {
            const { id, name, price, category } = JSON.parse(body);

            if (!id || !name || !price || !category) {
              res.writeHead(400, { "Content-Type": "text/plain" });
              res.write("Faltan datos");
              res.end();
              return;
            }

            res.writeHead(201, { "Content-Type": "text/plain" });
            res.write("Producto recibido correctamente");
            res.end();
          } catch (err) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.write("JSON inválido");
            res.end();
          }
        });
        break;
      }

      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
  }
});

servertarea6.listen(port, () => {
  console.log(`El servicio está funcionando correctamente en el puerto ${port}`);
});
