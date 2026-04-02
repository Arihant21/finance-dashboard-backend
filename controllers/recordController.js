import Record from '../models/Record.js';

export const createRecord = async (req, res) => {
    try {
        const { amount, type, category } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                message: "Invalid amount"
            });
        }

        const record = await Record.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json(record);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getRecords = async (req, res) => {
    try {
        const { type, category, page = 1, limit = 5 } = req.query;

        const query = {};

        if (type) query.type = type;
        if (category) query.category = category;

        const records = await Record.find(query)
        .skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });

        res.status(200).json(records);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const updateRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({
                message: "Record not found"
            });
        }

        const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({
                message: "Record not found"
            });
        }

        await Record.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Record deleted successfully"
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};