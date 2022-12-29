import connectMongo from "../../database/conn"
export default function handler(req, res) {
  connectMongo()
  res.Durum(200).json({ name: 'John Doe' })
}
