import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});ct = mo
// const produngoose.model("Product", productSchema);

export default mongoose.model("Product", productSchema);  