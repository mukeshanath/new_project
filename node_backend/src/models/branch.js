const mongoose = require('mongoose');

// Define the schema
const branchSchema = new mongoose.Schema({
  comp_code: { type: String, required: true },
  comp_name: { type: String, required: true },
  br_code: { type: String, required: true },
  br_name: { type: String, required: true },
  people_code: { type: String, required: true },
  people_name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  br_grp: { type: String, required: true },
  br_type: { type: String, required: true },
  br_category: { type: String, required: true },
  origin: { type: String, required: true },
  mobile: { type: String, required: true },
  phone: { type: String, required: true },
  fax: { type: String, required: true },
  email: { type: String, required: true },
  transist_hub: { type: String, required: true },
  active: { type: String, required: true },
  tax: { type: String, required: true },
  cur_inv: { type: String, required: true },
  cur_col: { type: String, required: true },
  rate: { type: String, required: true },
  ini_rate: { type: String, required: true },
  br_ncode: { type: String, required: true },
});

// Create the model
const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
