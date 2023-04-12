const { ProductSchema } = require("../model/productSchema")


const getProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await ProductSchema.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const addProducts = async (req, res) => {
    try {
        let fileArray = []
        await req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path
            }
            fileArray.push(file)
        })
        const product = new ProductSchema({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            files: fileArray
        })
        const result = await product.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await ProductSchema.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                files: fileArray
            }
        }, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await ProductSchema.findByIdAndDelete(id)
        res.status(204).json({ message: "succesfully deleted" })
    } catch (error) {
        res.status(400).json({ error: error })
    }
}


module.exports = { getProducts, addProducts, getProduct, updateProduct, deleteProduct }