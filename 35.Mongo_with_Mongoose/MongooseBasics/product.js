const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.greet = function () {
  console.log("Hello!!");
  console.log(`- from ${this.name}`);
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));

// findProduct();

// const bike = new Product({name: 'Cycling Jersey', price: 33.50, categories: ['Cycling', 'Clothes'], size: 'XS'})
// bike.save()
//     .then(data => {
//         console.log("It WORKED!!!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR");
//         console.log(err.errors);
//     })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -10}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("It WORKED!!!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR");
//         console.log(err);
//     })
