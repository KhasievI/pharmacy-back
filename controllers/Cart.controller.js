import Cart from "../models/Cart.js";

export const createCartItem = async (req, res) => {
  try {
    const addedCart = await Cart.create({
      cart: req.body,
    });
    return res.json(addedCart);
  } catch (err) {
    return res.json(err);
  }
}

export const updateCart = async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
      cart: req.body,
    });
    return res.json(updateCart);
  } catch (err) {
    return res.json(err);
  }
}

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    return res.json(cart);
  } catch (err) {
    return res.json(err);
  }
}

export const getAllCarts = async (req, res) => {
  try {
    const allCarts = await Cart.find();
    return res.json(allCarts);
  } catch (err) {
    return res.json(err);
  }
}

// export const addMedToCart = async (req, res) => {
//   try {
//     const med = await Medicine.findById(req.body.item);
//     const cart = await Cart.findById(req.params.id);

//     const addedMed = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $push: {
//           cart: { med: req.body.med, count: 1 },
//         },
//         totalPrice: cart.totalPrice + med.price,
//       },
//       { new: true }
//     )
//     return res.json(addedMed);
//   } catch (err) {
//     return res.json(err);
//   }
// }