module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
        },
        { timestamps: true }
      )
    );
    return User;
  };