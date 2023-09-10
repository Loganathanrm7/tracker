import Button from "@/components/Button";
import SideBar from "@/components/SideBar";
import CourseCard from "@/components/cards/CourseCard";

export default function StudentLayout() {
  return (
    <div className="dashboard flex  relative ">
      <div className="subcontainer fixed h-full flex flex-col items-start border-2 border-teal-900 p-5  text-2xl text-teal-900">
        <button className="m-5">Courses</button>
        <button className="m-5">Students</button>
        <button className="m-5">Staff</button>
      </div>
      <div className="container">
        <h1 className="text-teal-800 w-full text-center">Students </h1>
        <table className="border-2 min-w-full  border-seperate  border-teal-900 text-center">
          <thead>
            <tr>
              <th className="border-2  border-teal-900">Sl No</th>
              <th className="border-2  border-teal-900">Name</th>
              <th className="border-2  border-teal-900"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border  border-teal-900"> 1 </td>
              <td className="border  border-teal-900"> Logan</td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900">2 </td>
              <td className="border  border-teal-900"> Deepak </td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 3 </td>
              <td className="border  border-teal-900"> kabilan </td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 4 </td>
              <td className="border  border-teal-900"> Lalith </td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 5 </td>
              <td className="border  border-teal-900"> Ajay </td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 6 </td>
              <td className="border  border-teal-900"> Partha</td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 7</td>
              <td className="border  border-teal-900"> Arul</td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border  border-teal-900"> 8</td>
              <td className="border  border-teal-900"> Navin </td>
              <td className="border  border-teal-900">
                <button className="m-1 p-1  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
          Add Student
        </button>
      </div>
    </div>
  );
}
