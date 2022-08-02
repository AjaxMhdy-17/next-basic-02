import nc from "next-connect";
const Item = require("../../../../models/itemsSchema");
const connectDb = require("../../../../utils/dbConnect");
connectDb();

const handler = nc().delete(async (req, res) => {
  try {
    const item = await Item.findById(req.query.id);

    if (!item) {
      return res.status(404).json({
        msg: "not found",
      });
    } else {
    //   console.log(item);
      const itm = await Item.findOneAndRemove({_id : item.id}) 
      return res.status(200).json({
        msg : "item deleted",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Server Error",
    });
  }
});

export default handler;
