const server = require("./api/server");

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`\n>>> Server is listening on port ${port}! <<<\n`));