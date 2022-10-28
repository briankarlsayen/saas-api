'use strict';
import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface KeyAttributes {
  id: number;
  uuid: string;
  type: string;
  expire: Date;
  user_id?: number;
  is_active: boolean;
  is_blocked: boolean;
  is_deleted: boolean;
};

interface KeyCreationAttributes
  extends Optional<KeyAttributes, 'id'> {}

interface KeyInstance
extends Model<KeyAttributes, KeyCreationAttributes>,
KeyAttributes {
    createdAt?: Date;
    updatedAt?: Date;
  }

  const AppKey = sequelize.define<KeyInstance>(
    'AppKey',
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
      expire: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      type: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
      is_active: {
        allowNull: false,
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
      tableName: "app_keys",
      modelName: 'AppKey',
    }
  );
  
export default AppKey;