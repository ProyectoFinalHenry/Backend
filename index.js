import server from "./src/app.js"; 
import { conn } from "./src/db.js"; 
import dotenv from "dotenv"; 
 
dotenv.config(); 
 
const PORT = process.env.SERVER_PORT || 3001;
 
conn.sync({ force: false }).then(() => { 
  server.listen(PORT, () => { 
    console.log(`listening at ${PORT}`); 
  }); 
});
