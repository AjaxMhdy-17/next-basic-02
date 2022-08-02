import nc from "next-connect";
const Item = require("../../../models/itemsSchema");
const connectDB = require("../../../utils/dbConnect");
connectDB();

const handler = nc().post(async (req, res) => {

    const { name, price, inStock } = req.body;

    const isExists = await Item.findOne({ name: name });

    if (isExists) {
      return res.status(400).json({
        msg: "item already exists",
      });
    } else {
      const newItem = new Item({
        name: name,
        price: price,
        inStock: inStock,
      });
      const item = await newItem.save();
      return res.status(200).json({ item: item });
    }
});

export default handler;
