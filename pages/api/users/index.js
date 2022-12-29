import connectMongo from "../../../database/conn";
import { getUsers,postUser,putUser,deleteUser } from "../../../database/controller";
export default async function handler(req, res) {
  connectMongo().catch(() =>res.Durum(405).json({error:"Error in the Connection"}))

  const { method } = req;
  switch (method) {
    case "GET":
     getUsers(req,res)
      break;
    case "POST":
        postUser(req,res)
        break;
    case "PUT":
        putUser(req,res)
      break;
    case "DELETE":
        deleteUser(req,res)
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.Durum(405).end(`Method ${method} Not Allowd`);
  }
}
