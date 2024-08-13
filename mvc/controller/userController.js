const userModel = require("../model/user");

const createTicket = async(req,res)=>{
    try{
    const {name,email,role,priority} = req.body;
    if(!name || !email || !role || !priority){
        return res.status(404).json({
            status : false,
            "message" : "Required All Fields!!!"
        })
    }
    const newTicket = new userModel({name,email,role,priority});
           await newTicket.save();

           res.json({
            status : true,
            message : "Successfully Created An Ticket !!!"
           })
    }
    catch(err){
        console.log(err)
    }
}

const getData = async (req,res)=>{
    try{
        const info = await userModel.find();
        if(!info){
            return res.status(500).json({
                status : false,
                message : "Something Went Wrong, Try Later !!!"
            })
        }
        res.json({
            status : true,
            info,
        })
    }
    catch(err){
        res.status(404).json({
            status : false,
            message : err
        })
    }
}

const updateDetails = async (req, res) => {
    try {
        const { customerId, updateStatus } = req.body;

        if (!customerId || !updateStatus) {
            return res.status(400).json({
                status: false,
                message: "All fields are required!"
            });
        }

        // Update the status of the user with the given customerId
        await userModel.findByIdAndUpdate(
            { _id: customerId },
            { $set: { Status: updateStatus } }
        );

        res.json({
            status: true,
            message: "Updated successfully!"
        });

    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message || "An error occurred"
        });
    }
};


const userController = {
    createTicket,getData,updateDetails
}

module.exports = userController;