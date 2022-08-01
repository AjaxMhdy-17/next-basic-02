import nc from "next-connect";
import dbConnect from "../../../utils/dbConnect";
// import Player from "../../../models/playersSchema";
const Player = require("../../../models/playersSchema");

dbConnect();

const handler = nc()
  .get(async (req, res) => {
    try {
      const player = await Player.findById({ _id: req.query.id });
      if (!player) {
        return res.status(404).json({
          message: "player not found with this id",
        });
      } else {
        return res.status(200).json({
          player: player,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Side Error",
      });
    }
  })
  .put(async (req, res) => {
    const { name, jersey, isActive } = req.body;

    try {
      const player = await Player.findById({ _id: req.query.id });
      if (player) {
        player.name = name;
        player.jersey = jersey;
        player.isActive = isActive;
        await player.save() 
        return res.status(200).json({
          player: player,
        });
      } else {
        return res.status(404).json({
          message: "player not found with this id",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Side Error",
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const player = await Player.findByIdAndRemove({ _id: req.query.id });
      if (!player) {
        return res.status(404).json({
          message: "player not found with this id",
        });
      } else {
        return res.status(200).json({
            message : "player deleted"
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Side Error",
      });
    }
  });

export default handler;
