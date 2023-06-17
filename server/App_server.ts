import express , {Request, Response} from "express"
import path from 'path'

const app = express()

app.use(
  express.static(path.join(__dirname,"dist"),{
  setHeaders(res:Response, path: string) {
    if(path.endsWith(".js")) {
      res.setHeader("content-type" ,"application/javascript");
    }
  },
}))

app.use(express.json());


app.use('/',(req : Request, res:Response) => {
  res.sendfile(path.join(__dirname,"dist","index.html"))
})

app.listen(3000, () => {
  console.log("Server is running on port 3000 ")
})