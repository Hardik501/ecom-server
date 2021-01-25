const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const cartSchema = new Schema( {
    data: { type: Array, required: true }, // push products in array and send it here
    user_Id:{type:String,required:true},
}, {
    timestamps: true,
} );



module.exports = mongoose.model( "Cart", cartSchema );
