const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/3 p-3 m-1 shadow-md rounded-md">
      <div className="flex text-sm flex-col w-full items-center">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex items-center gap-2 flex-row">
            <div className="bg-[#4934f5] text-white rounded-md flex">
              <span className="p-2">WL</span>
            </div>
            <div>
              <h1 className="font-bold">widelab</h1>
              <span className="text-gray-500">Team Plan</span>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M11.5 15a.5.5 0 00.5-.5V2.707l3.146 3.147a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L11 2.707V14.5a.5.5 0 00.5.5zm-7-14a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L4 13.293V1.5a.5.5 0 01.5-.5z"
              />
            </svg>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
