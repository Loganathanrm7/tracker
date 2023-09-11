import StaffSideBar from "@/components/StaffSideBar";
import ClassCard from "../../components/cards/ClassCard";

export default function StaffClassLayout() {
  return (
    <div>
      <StaffSideBar />

      <div className="container ">
        <h1 className="text-teal-900"> Classes </h1>
        <div className="grid grid-cols-3 gap-4 my-4">
          <ClassCard courseName="Frontend" batch_time="batch 1 - 8-10 " />
          <ClassCard courseName="Frontend" batch_time="batch 2 - 11-1 " />
          <ClassCard courseName="Frontend" batch_time="batch 3 - 2-4 " />
          <ClassCard courseName="Backend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="backend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="backend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="Frontend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="Frontend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="Frontend" batch_time="batch 1 - 8-10 am" />
          <ClassCard courseName="Frontend" batch_time="batch 1 - 8-10 am" />
        </div>
      </div>
    </div>
  );
}
