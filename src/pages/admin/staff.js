import SideBar from "../../components/cards/SideBar";
import CourseCard from "../../components/cards/CourseCard";
import Button from "@/components/Button";

export default function StaffLayout() {
  return (
    <>
      <div className="dashboard flex m-10 border-2 border-teal-900 min-h-screen ">
        <div>
          <SideBar />
        </div>
        <div className="container">
          <span>Students </span>
          <table className="border-2 min-w-full  border-seperate  border-teal-900">
            <thead className="">
                <tr>
              <th className="border-2  border-teal-900">Sl No</th>
              <th className="border-2  border-teal-900">Name</th>
              <th className="border-2  border-teal-900"></th>
            </tr></thead>
            <tbody >
                <tr>
              <td className="border  border-teal-900"> 1 </td>
              <td className="border  border-teal-900">  Logan</td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900">2  </td>
              <td className="border  border-teal-900"> Deepak </td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900"> 3 </td>
              <td className="border  border-teal-900"> kabilan </td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900"> 4 </td>
              <td className="border  border-teal-900"> Lalith </td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900"> 5 </td>
              <td className="border  border-teal-900"> Ajay </td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900"> 6 </td>
              <td className="border  border-teal-900">  Partha</td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900">  7</td>
              <td className="border  border-teal-900">  Arul</td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
                <tr>
              <td className="border  border-teal-900">  8</td>
              <td className="border  border-teal-900"> Navin </td>
              <td className="border  border-teal-900">
                <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                  Edit
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
