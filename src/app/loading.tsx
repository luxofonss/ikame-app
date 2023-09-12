import RiseLoader from "react-spinners/ClipLoader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen">
      <RiseLoader color="#36d7b7" className="bg-main-0" />
    </div>
  );
}
