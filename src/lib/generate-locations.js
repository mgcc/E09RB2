// Get locations from SARAI DB

const mongoose = require('mongoose');
const fs = require('fs');

const ProvinceSchema = new mongoose.Schema({
  province: String,
  municipality: [String]
});

mongoose.connect('mongodb://localhost:3001/meteor', (err) => {
  if (err) {
    console.log('Error connecting to DB');
  } else {
    console.log('DB Connected...');
  }
});


mongoose.model('Province', ProvinceSchema);

const Province = mongoose.model('Province');
const formatArray = (municipalities) => {
    let result = '[';

    for (let a = 1; a < municipalities.length; a++) {
      result += `${JSON.stringify(municipalities[a])}`

      if (a < municipalities.length - 1) {
        result += ', '
      }
    }

    result += ']';

    return result;
}


let OUTPUT = 'exports.provinces = ['

Province.find({}, (err, provinces) => {
  provinces.forEach((province, index) => {
    OUTPUT += `\
      \n\t{ id: ${index}, name: '${province.province}', municipalities: ${formatArray(province.municipality)} },`
  });
  // console.log(OUTPUT);
  fs.writeFile('/home/mon/Workspace/E09RB2/src/lib/provinces.js', OUTPUT, (err) => {
    if (!err) {
      console.log('Saved!');
    }
  });
});

