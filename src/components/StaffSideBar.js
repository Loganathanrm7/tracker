import Link from "next/link";

export default function StaffSideBar() {
  return (
    <div className="subcontainer  fixed h-full flex flex-col justify-between   bg-teal-400  ">
      <div className="flex flex-col">
        <div className="mb-8">
          <h3 className="mb-2">Login360 Tracker</h3>
          <p>Staff Panel</p>
        </div>
        <Link href="/staff">Home</Link>
        <Link href="/staff/attendance">Attendance</Link>
      </div>
      <div>
        <Link href="/admin">Login to Staff</Link>
      </div>
    </div>
  );
}
