import CourseCard from "@/components/cards/CourseCard";
import SideBar from "@/components/SideBar";
export default function AdminDashboard() {
  return (
    <div className="dashboard flex border-2 border-teal-900  ">
      <div className="flex flex-col border-2 border-teal-900 p-5  text-2xl text-teal-900">
        <button className="m-5">Courses</button>
        <button className="m-5">Students</button>
        <button className="m-5">Staff</button>
      </div>
      <div className="container">
        <div className="flex">
          <h1 className="text-teal-800 w-full text-center my-4"> Dashboard</h1>
          <button className="m-4 px-2 text-sm border-2 bg-teal-800 text-white rounded-md ">
            Add
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <CourseCard coursename="Frontend" batchtime="Batch 1 - 8-10" />
          <CourseCard coursename="Backend" batchtime="Batch 1 - 8-10" />
          <CourseCard coursename="Testing" batchtime="Batch 1 - 8-10" />
          <CourseCard
            coursename="Digital Marketing"
            batchtime="Batch 1 - 8-10"
          />
          <CourseCard coursename="Frontend" batchtime="Batch 2 - 11-1" />
          <CourseCard coursename="Backend" batchtime="Batch 2 - 11-1" />
          <CourseCard coursename="Testing" batchtime="Batch 2 - 11-1" />
          <CourseCard
            coursename="Digital Marketing"
            batchtime="Batch 2 - 11-1"
          />
        </div>
      </div>
    </div>
  );
}
