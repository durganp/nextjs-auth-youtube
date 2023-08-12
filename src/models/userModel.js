import mongoose from 'mongoose';

const userShema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'please provide a user name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'please provide a user email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide a user password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model('users', userShema);

export default User;
