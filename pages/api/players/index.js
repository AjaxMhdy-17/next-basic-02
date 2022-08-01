import nc from "next-connect";
import dbConnect from "../../../utils/dbConnect";
// import Player from "../../../models/playersSchema";
const Players = require('../../../models/playersSchema')

dbConnect();

const handler = nc()
  .get(async (req, res) => {
    try {
      const players = await Player.find({});
      return res.status(200).json({
        players: players,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Server Side Error",
      });
    }
  })
  .post(async (req, res) => {
    const { name, jersey, isActive } = req.body;
    try {
      const newPlayer = new Player({
        name: name,
        jersey: jersey,
        isActive: isActive,
      });

      await newPlayer.save();

      return res.status(200).json({
        newPlayer: newPlayer,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Server Side Error",
      });
    }
  });

export default handler;
