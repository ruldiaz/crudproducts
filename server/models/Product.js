import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  productIsNew: {
    type: Boolean,
    required: true,
  },
  reviews: {
    type: Array,
    required: true,
    default: [],
  },
  stock: {
    type: Number,
    required: true,
  },
  stripeId: {
    type: String,
    required: true,
  },
}, { timestamps: true});

const Product = mongoose.model('Product', productSchema);

export default Product;