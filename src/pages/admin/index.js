import CourseCard from "../../components/cards/CourseCard";
import SideBar from "../../components/cards/SideBar";
export default function AdminDashboard() {
  return (
    <div className="dashboard flex m-10 border-2 border-teal-900 min-h-screen ">
      <div>
        <SideBar />
      </div>
      <div className="container">
        <div className="flex">
          <h1 className="text-teal-800 w-full text-center my-4"> Dashboard</h1>
          <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
                Add
              </button>
        </div>
        <div className="flex flex-row">
          <CourseCard course="Frontend" edit="edit" delete="delete" />
          <CourseCard course="Backend" edit="edit" delete="delete" />
          <CourseCard course="Testing" edit="edit" delete="delete" />
          <CourseCard course="Digital Marketing" edit="edit" delete="delete" />
        </div>
      </div>
    </div>
  );
}
