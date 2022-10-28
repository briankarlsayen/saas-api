'use strict';
import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface UserAttributes {
  id: number;
  uuid: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  type: string;
  is_active: boolean;
  is_blocked: boolean;
  is_deleted: boolean;
};

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

interface UserInstance
extends Model<UserAttributes, UserCreationAttributes>,
UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
  }


const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    type: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    is_active: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_blocked: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_deleted: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    modelName: 'User',
  }
);

export default User;

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     uuid: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     is_active: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     is_blocked: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   }, {
//     sequelize,
//     tableName: "users",
//     modelName: 'User',
//   });
//   return User;
// };