import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://munglolicon2002:munglolicon0@cluster0.vpgllqh.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected database");
  } catch (err) {
    console.log(err);
  }
}

export default connect;
