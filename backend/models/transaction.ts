'use strict';
import {
  Model
} from 'sequelize';

interface TransactionAttributes{
  id: number,
  title: string,
  image: string,
  price :number,
  last_updated: Date,
  sellerID: number
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Transaction extends Model <TransactionAttributes>
  implements TransactionAttributes {
    id!: number;
    title!: string;
    image!: string;
    price!: number;
    last_updated!: Date;
    sellerID!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  };
  Transaction.init({
    id: {
      type : DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING

    },
    price: {
      type : DataTypes.FLOAT,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE
    },
    sellerID: {
      type: DataTypes.INTEGER,
      allowNull:  false
    }

  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};