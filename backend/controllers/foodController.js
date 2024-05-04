import foodModel from '../models/foodModel.js';
import fs from 'fs';

const addFood = async (req, res) => {
    // Lấy tên tệp hình ảnh từ req.file.filename nếu bạn đang sử dụng multer để xử lý tệp tải lên
    const image_filename = req.file.filename; // Đảm bảo rằng req.file đã được xử lý bởi multer

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename // Thêm tên tệp hình ảnh vào đối tượng food
    });

    try {
        await food.save();
        res.json({ success: true, message: "Đã thêm món ăn" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Đã xảy ra lỗi khi thêm món ăn" });
    }
};
// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error(err);
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};
export { addFood, listFood, removeFood }

