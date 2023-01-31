import { app as server } from "./app";

server.listen(3000, () => {
  console.log("%c listening on PORT: http://localhost:3000", "color: #f4f3c1");
});
