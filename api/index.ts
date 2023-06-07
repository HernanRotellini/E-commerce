import express from "express"
import morgan from "morgan"
import cors from "cors"

class Server{
    public app: express.Application = express();
    private port: Number = 3001
    constructor() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(morgan("dev"))
        this.app.use(
            cors()
          );
        this.listen();
    }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log("Server Listening on port",this.port)
        })
    }
}
new Server()