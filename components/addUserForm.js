import { useReducer } from "react";
import { BiPlus } from 'react-icons/bi'
import Success from "./success";
import Bug from '../components/bug'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Object.keys(formData).length ==0) return <Bug message="Error"/>
  }

if(Object.keys(formData).length>0) return <Success message="Data Added"></Success>


  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4 justify-center" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          className=" bg-gray-700 border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="firstname"
          placeholder="First Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          className=" bg-gray-700 border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="lastname"
          placeholder="Last Name"
        ></input>
      </div>{" "}
      <div className="input-type">
        <input
          className=" bg-gray-700 border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="email"
          placeholder="Email"
        ></input>
      </div>
      <div className="input-type">
        <input
          className=" bg-gray-700 border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="title"
          placeholder="Title"
        ></input>
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="date"
          name="date"
          onChange={setFormData}
        ></input>
      </div>
      <div className="flex gap-10 items-center container mx-auto p-3">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="Durum"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <label htmlFor="radioDefault1" className="inline-block text-gray-200">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="Durum"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <label htmlFor="radioDefault2" className="inline-block text-gray-200">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add
        <span className="px-1">
            <BiPlus size={24}/>
        </span>
      </button>
    </form>
  );
}
