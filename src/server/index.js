const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use("./api", routes);

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
});
