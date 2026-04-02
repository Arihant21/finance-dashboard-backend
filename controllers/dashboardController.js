import Record from '../models/Record.js';

export const getSummary = async (req, res) => {
    try {
        const income = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const expenses = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalIncome = income[0] ? income[0].total : 0;
    const totalExpenses = expenses[0] ? expenses[0].total : 0;
    const balance = totalIncome - totalExpenses;

    res.status(200).json({ totalIncome, totalExpenses, balance });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getCategorySummary = async (req, res) => {
  try {

    const data = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getMonthlySummary = async (req, res) => {
  try {

    const data = await Record.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
      {
        $sort: { "_id": 1 }
      }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getRecentRecords = async (req, res) => {
  try {

    const records = await Record.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
