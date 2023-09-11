export default function ClassCard(props) {
  return (
    <div className="p-4 flex flex-col justify-between rounded-md bg-teal-800 shadow-md hover:shadow-xl text-white h-48 cursor-pointer ">
      <div className=" ">
        <p className="text-2xl mb-2 ">{props.courseName}</p>
        <span className="flex ">
          <p className="">{props.batchName}</p>
          <p className="">{props.batchTime}</p>
        </span>
      </div>
      <p className="w-fit text-base underline underline-offset-4">
        Open details
      </p>
    </div>
  );
}
