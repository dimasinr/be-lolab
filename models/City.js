    import mongoose from 'mongoose';
// const { Schema } = mongoose;

const CitySchema = new mongoose.Schema({
    nameCity: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

export default mongoose.model("City", CitySchema)