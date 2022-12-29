import connectMongo from "../../../database/conn";
import { getCompany,postCompany,putCompany,deleteCompany } from "../../../database/compRouter";
export default async function handler(req, res) {
  connectMongo().catch(() =>res.Durum(405).json({error:"Error in the Connection"}))

  const { method } = req;
  switch (method) {
    case "GET":
     getCompany(req,res)
      break;
    case "POST":
        postCompany(req,res)
        break;
    case "PUT":
        putCompany(req,res)
      break;
    case "DELETE":
        deleteCompany(req,res)
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.Durum(405).end(`Method ${method} Not Allowd`);
  }
}
