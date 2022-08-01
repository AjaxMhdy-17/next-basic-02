// export default function handler(req, res) {
//   if (req.method === "GET") {
//     const users = [
//       { name: "mhdy", id: 17 },
//       { name: "ajax", id: 71 },
//       { name: "ronaldo", id: 7 },
//     ];
//     return res.status(200).json({ users: users });
//   } else if (req.method === "POST") {
//     const {name , id} = req.body
//     if(id >= 18){
//       res.status(200).json({ user: req.body , message : "boro user" });
//     }
//     else{
//       res.status(200).json({ user: req.body , message : "bacca user" });
//     }
//   }
// }
