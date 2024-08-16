import { useState } from "react";
import "./App.css";

function App() {
  const [formData,setData]=useState({
    name:"",rollno:"",year:"",branch:"",email:"",field:"Frontend",experiences:"",skills:[]
  });
  function changeHandler(event) {
    const { type, name, value, id, checked } = event.target;

    setData(prevData => {
        if (type === "checkbox") {
            let updatedSkills;
            if (checked) {
                updatedSkills = [...prevData.skills, id]; // Add skill if checked
            } else {
                updatedSkills = prevData.skills.filter(skill => skill !== id); // Remove skill if unchecked
            }
            return { ...prevData, [name]: updatedSkills };
        } else {
            return { ...prevData, [name]: value };
        }
    });
}

  function submitHandler(event){
    event.preventDefault();
    console.log("You Submit your data\n",formData);
  }
  return (
    <div className=" bg-gray-100 flex flex-col items-center">
    <div className="flex flex-col  items-center gap-2 w-[400px]">
    <p className=" text-[2rem] font-serif font-extrabold">Hiring Application TO</p>
    <p className="text-[2rem] font-serif font-bold text-purple-700 self-end">Web Dev Club <span className="text-green-600">NITJ</span></p>
    </div>
    <br/>
    <div className="w-[400px] ">
    <form className="flex flex-col" onSubmit={submitHandler}>
    <div className="formInput flex justify-between items-center">
    <label>Name :- </label>
    <input type="text" name="name" placeholder="Name" onChange={changeHandler} ></input>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Roll No. :- </label>
    <input type="text" name="rollno" placeholder="Roll Number" onChange={changeHandler}></input>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Year :- </label>
    <input type="text" name="year" placeholder="Year" onChange={changeHandler}></input>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Branch :- </label>
    <input type="text" name="branch" placeholder="Branch" onChange={changeHandler}></input>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Email Id :- </label>
    <input type="text" name="email" placeholder="Official gmail id" onChange={changeHandler}></input>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Field :- </label>
    <select className=" dropdown text-white" name="field" onChange={changeHandler}>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="UI/UX">UI/UX</option>
    </select>
    </div>

    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Skills :-</label>
    <div className="w-[300px] grid grid-cols-2  ">
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="html" onChange={changeHandler} className="checkbox-btn" ></input><label htmlFor="html">HTML & CSS</label></div>
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="tailwind" onChange={changeHandler} className="checkbox-btn"></input><label htmlFor="tailwind">TAILWIND CSS</label></div>
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="js" onChange={changeHandler} className="checkbox-btn"></input><label htmlFor="js">Javascript</label></div>
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="react" onChange={changeHandler} className="checkbox-btn"></input><label htmlFor="react">REACT</label></div>
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="nodeJs" onChange={changeHandler} className="checkbox-btn"></input><label htmlFor="nodeJs">NODE JS</label></div>
    <div className="flex new gap-2 "><input type="checkbox" name="skills" id="expressJs" onChange={changeHandler} className="checkbox-btn"></input><label htmlFor="expressJS">EXPRESS JS</label></div>
    </div>
    </div>
    <br/><br/>
    <div className="formInput flex justify-between items-center">
    <label>Detail :-</label>
    <textarea placeholder="Expirences" name="experiences" onChange={changeHandler}></textarea>
    </div>
    <br/><br/>
    <button type="submit"  className="btn self-center bg-blue-800 text-white rounded-md p-1 mb-4 border-2 border-black">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default App;
