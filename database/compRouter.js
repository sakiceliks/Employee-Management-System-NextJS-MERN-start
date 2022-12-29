import Companys from '../model/company'

export async function getCompany(req,res){
try{
const companys = await Companys.find({})
if(!companys)return res.status(404).json({error:"Data not Found"})
res.status(200).json(companys)
}catch(error){
    res.status(404).json({error: "Error While Fetching Data"})
}
}


export async function postCompany(req,res){
    try{
const formData = req.body;
if(!formData)return res.status(404).json({error:"Form Data Not Provided...!"});
Companys.create( formData,function(err,data){
    return res.status(200).json(data)
})
    }catch(error){
        return res.status(404).json({error})
    }
}

export async function putCompany(req,res){
try{
    const {companyId} = req.query;
    const formData = req.body;
    if(companyId && formData){
        const company = await Companys.findByIdAndUpdate(companyId, formData)
        res.status(200).json(company)
    }
    res.status(404).json({error:"company Not Selected..!"})
}catch(error){
    res.status(404).json({error:"Error While Updating the Data...!"})
}
}

export async function deleteCompany(req,res){
    try{
        const {companyId} = req.query;
    if(companyId){
        const company = await Companys.findByIdAndDelete(companyId)
        return res.status(200).json({deleted:companyId})
    }
    res.status(404).json({error:"company Not Selected...!"})
    } catch (error){
        res.status(404).json({error:"Error While Deleting the company..!"})
    }

}