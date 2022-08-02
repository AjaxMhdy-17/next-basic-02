import nc from "next-connect";
const Item = require("../../../models/itemsSchema");
const connectDb = require("../../../utils/dbConnect");
connectDb();

const handler = nc().get(async (req, res) => {
  try {

    const allItems = await Item.find({})

    return res.status(200).json({
      allItems : allItems
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Server Error",
    });
  }
});

export default handler;
