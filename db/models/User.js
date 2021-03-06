const Users = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataType.STRING,
        unique: {
          args: true,
          msg: "Username already exists",
        },
        allowNull: false,
      },
      password: { type: DataType.STRING, allowNull: false },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
    },
    { timestamps: false }
  );
  return User;
};
module.exports = Users;
