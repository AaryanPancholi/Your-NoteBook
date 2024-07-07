const mongoose =require('mongoose');
const mongoURi="mongodb://localhost:27017";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURi);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports=main;
