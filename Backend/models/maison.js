const mongoose = require("mongoose");
const schema = mongoose.Schema;
const MaisonSchema = new schema({
  image: {
    type: String,
    default:"https://previews.123rf.com/images/muslihalamin/muslihalamin1811/muslihalamin181100606/132081897-real-estate-logo-house-logo-simple-design.jpg"
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("maison", MaisonSchema);
