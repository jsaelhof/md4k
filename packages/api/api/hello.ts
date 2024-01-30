export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  return res.end("{ 'msg': 'THIS IS A TEST'}");
}
