const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Board = sequelize.define(
    "board",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "board",
        timestamps: false
    }
);

module.exports = Board;