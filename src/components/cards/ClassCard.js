export default function ClassCard(props) {
  return (
    <div className="p-4 flex flex-col justify-between rounded-md bg-teal-800 shadow-md hover:shadow-xl text-white h-48 cursor-pointer ">
      <span className=" ">
        <p className="text-2xl mb-2 ">{props.courseName}</p>
        <p className="">{props.batch_time}</p>
      </span>
      <p className="w-fit text-base underline underline-offset-4">
        Open details
      </p>
    </div>
  );
}
