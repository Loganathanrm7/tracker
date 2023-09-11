import AdminSideBar from "@/components/AdminSideBar";
import CourseCard from "@/components/cards/CourseCard";
export default function AdminDashboard() {
  return (
    <div className="dashboard flex  relative ">
      <AdminSideBar />
      <div className="container  ">
        <div className="flex">
          <h1 className="text-teal-800 w-full  mb-2"> Dashboard</h1>
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
