import AdminSideBar from "@/components/AdminSideBar";
import SideBar from "@/components/SideBar";
import ClassCard from "@/components/cards/ClassCard";

export default function Courses() {
  return (
    <div className="dashboard flex  relative">
      <AdminSideBar />
      <div className="container ">
        <h1 className="text-teal-800 w-full ">Courses</h1>
        <div className="grid grid-cols-3 gap-4 my-4">
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
          <ClassCard
            courseName="Frontend"
            batchName=" Batch 1 "
            batchTime="8-10 am"
          />
        </div>
        <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
          Add
        </button>
      </div>
    </div>
  );
}
