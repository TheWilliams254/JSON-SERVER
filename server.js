const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors({
  origin: "*", // ✅ Allow all domains
  methods: ["GET", "POST", "PATCH", "DELETE"], //allowing the methods
  allowedHeaders: ["Content-Type", "Authorization"]
}));

server.use(middlewares);
server.use('/api', router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
