
export default function handler(req , res) {
    const users = [
        { name: "mhdy", id: 17 },
        { name: "ajax", id: 71 },
        { name: "ronaldo", id: 7 },
      ];

      const id = Number(req.query.id)
    //   console.log(id);
      const user = users.find(us => (us.id === id))
    //   console.log(user);
      res.status(200).json({
        user : user 
      })
}
