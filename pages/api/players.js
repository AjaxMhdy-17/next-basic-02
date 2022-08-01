import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    const players = [
      { name: "ronaldo" },
      { name: "zlatan" },
      { name: "closue" },
    ];

    res.status(200).json({
      players: players,
    });
  })
  .post((req, res) => {
    res.status(200).json({
      player: req.body,
    });
  })
  .put((req, res) => {
    const {name , id } = req.body 
    const updatedPlayer = {
      name , 
      id  
    }
    res.status(200).json({
      updatedPlayer : updatedPlayer
    });
  }).delete((req , res) => {
        const {id} = req.body 

        const deletedPlayer = {
          id 
        }

        res.status(200).json({
          deletedPlayer : deletedPlayer
        });
  })

export default handler;
