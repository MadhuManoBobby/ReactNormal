import react from "react";
import StuArray from "./StuArray";

function StudentDetails(props){
    console.log(StuArray);

    return <div>
    {StuArray.map(data =>{
            return <ul>
            <li>StuId: {data.id}</li>
            <li>StuName: {data.name} </li>
            <li>StuAge: {data.age}</li>
            </ul>
           })}
        </div>
}

export default StudentDetails;

{/* <ul>
        <li>StuId: {props.stuId}</li>
        <li>StuName: {props.stuName} </li>
        <li>StuAge: {props.stuAge}</li>
        </ul> */}

        // function display(stu){
        //     return <ul>
        //     <li>StuId: {stu.id}</li>
        //     <li>StuName: {stu.name} </li>
        //     <li>StuAge: {stu.age}</li>
        //     </ul>
        // }

         {/* {StuArray.map(display)} */}


        //  <ul>
        //  <li>StuId: {StuArray[0].id}</li>
        //  <li>StuName: {StuArray[0].name} </li>
        //  <li>StuAge: {StuArray[0].age}</li>
        //  </ul>
        //  <ul>
        //  <li>StuId: {StuArray[1].id}</li>
        //  <li>StuName: {StuArray[1].name} </li>
        //  <li>StuAge: {StuArray[1].age}</li>
        //  </ul>
        //  <ul>
        //  <li>StuId: {StuArray[2].id}</li>
        //  <li>StuName: {StuArray[2].name} </li>
        //  <li>StuAge: {StuArray[2].age}</li>
        //  </ul>
        //  <ul>
        //  <li>StuId: {StuArray[3].id}</li>
        //  <li>StuName: {StuArray[3].name} </li>
        //  <li>StuAge: {StuArray[3].age}</li>
        //  </ul>


        