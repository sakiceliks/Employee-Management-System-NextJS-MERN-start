import { Schema,models,model } from "mongoose";

const companySchema = new Schema({
    name:String,
    logo:String,
    email:String,
    idNo:String,
    type:String,
    startTime:String,
    endTime:String,
    Durum:String,
    gorevli:String

})

const Companys = models.company || model('company',companySchema)
export default Companys



