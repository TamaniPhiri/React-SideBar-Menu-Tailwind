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
        <div className="flex flex-row my-2 w-full items-center justify-between">
          <div className="flex w-full p-1 bg-gray-200 rounded-md items-center flex-row">
            <svg
              viewBox="0 0 24 24"
              className="fill-gray-600"
              height="1.5em"
              width="1.5em"
            >
              <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
            <input type="search" placeholder="Search" className="w-full bg-inherit flex px-2 placeholder-gray-600" />
            <div className='flex text-gray-600 items-center gap-1 bg-gray-300 rounded-md p-1'>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M3.5 2A1.5 1.5 0 015 3.5V5H3.5a1.5 1.5 0 110-3zM6 5V3.5A2.5 2.5 0 103.5 6H5v4H3.5A2.5 2.5 0 106 12.5V11h4v1.5a2.5 2.5 0 102.5-2.5H11V6h1.5A2.5 2.5 0 1010 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1112.5 5H11zm0 6h1.5a1.5 1.5 0 11-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 113.5 11H5z" />
              </svg>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
