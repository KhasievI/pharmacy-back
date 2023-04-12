import Cart from "../models/Cart.js";

export const createCartItem = async (req, res) => {
  console.log(req)
  try {
    const addedCart = await Cart.create({
      cart: req.body.cart,
      customer: req.body.customer
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

export const getCartByPharm = async (req, res) => {
  console.log(req);
  try {
    const carts = await Cart.find(req.params.pharm);
    return res.json(carts);
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

export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete( req.params.id );
    res.json({
      cart,
      message: 'Удалено'
    });
  } catch (error) {
    res.json({ message: error.message });
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