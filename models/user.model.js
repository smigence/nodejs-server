module.exports = (sequelize, Datatypes) => {
  let user = sequelize.define(
    'user',
    {
      id: {
        type: Datatypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userName: {
        type: Datatypes.CHAR(15),
        allowNull: false,
        field: 'user_name'
      },
      password: {
        type: Datatypes.CHAR(20),
        allowNull: false
      },
      email: {
        type: Datatypes.CHAR(25),
        allowNull: false
      }
    },
    {
      tableName: 'tbl_user',
      timestamps: false
    }
  );

  return user;
};
