const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/3 p-3 m-1 shadow-md rounded-md">
      <div className="flex text-sm flex-col w-full items-center">
        {/* Row-1 wideLab TeamPlan */}
        <div className="flex flex-row w-full mb-6 items-center justify-between">
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

        {/* Row 2 Search Component */}
        <div className="flex flex-row my-2 w-full items-center justify-between">
          <div className="flex w-full p-1 bg-gray-100 rounded-md items-center flex-row">
            <svg
              viewBox="0 0 24 24"
              className="fill-gray-600"
              height="1.5em"
              width="1.5em"
            >
              <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="w-full focus:outline-none bg-inherit flex px-2 placeholder-gray-600"
            />
            <div className="flex text-gray-600 items-center gap-1 bg-gray-200 rounded-md p-1">
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

        {/* Row-3 Inbox */}
        <div className="flex flex-row mb-2 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
              <path
                className="fill-gray-600"
                fillRule="evenodd"
                d="M7.754.82a.5.5 0 00-.508 0l-5.5 3.25a.5.5 0 000 .86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 000-.86L7.754.82zM7.5 7.17L2.983 4.5 7.5 1.83l4.517 2.67L7.5 7.17zm-5.93.326a.5.5 0 01.684-.176l5.246 3.1 5.246-3.1a.5.5 0 11.508.86l-5.5 3.25a.5.5 0 01-.508 0l-5.5-3.25a.5.5 0 01-.177-.684zm0 3a.5.5 0 01.684-.177l5.246 3.1 5.246-3.1a.5.5 0 01.508.861l-5.5 3.25a.5.5 0 01-.508 0l-5.5-3.25a.5.5 0 01-.177-.684z"
                clipRule="evenodd"
              />
            </svg>
            <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
              Inbox
            </span>
            <div className="flex text-gray-600 items-center bg-gray-200 rounded-md p-1">
              <svg
                className="fill-gray-600"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M3.5 2A1.5 1.5 0 015 3.5V5H3.5a1.5 1.5 0 110-3zM6 5V3.5A2.5 2.5 0 103.5 6H5v4H3.5A2.5 2.5 0 106 12.5V11h4v1.5a2.5 2.5 0 102.5-2.5H11V6h1.5A2.5 2.5 0 1010 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1112.5 5H11zm0 6h1.5a1.5 1.5 0 11-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 113.5 11H5z" />
              </svg>
              <span>2</span>
            </div>
          </div>
        </div>

        {/* Row-4 Activity */}
        <div className="flex flex-row mb-2 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <svg
              viewBox="0 0 448 512"
              className="fill-gray-600"
              height="1.5em"
              width="1.5em"
            >
              <path d="M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 015.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z" />
            </svg>
            <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
              Activity
            </span>
            <div className="flex text-gray-600 items-center bg-gray-200 rounded-md p-1">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M3.5 2A1.5 1.5 0 015 3.5V5H3.5a1.5 1.5 0 110-3zM6 5V3.5A2.5 2.5 0 103.5 6H5v4H3.5A2.5 2.5 0 106 12.5V11h4v1.5a2.5 2.5 0 102.5-2.5H11V6h1.5A2.5 2.5 0 1010 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1112.5 5H11zm0 6h1.5a1.5 1.5 0 11-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 113.5 11H5z" />
              </svg>
              <span>3</span>
            </div>
          </div>
        </div>

        {/* Row-4 Activity */}
        <div className="flex border-b-[1.5px] flex-row pb-6 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <svg
              viewBox="0 0 24 24"
              className="fill-gray-600"
              height="1.5em"
              width="1.5em"
            >
              <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
              <path d="M8 6h9v2H8z" />
            </svg>
            <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
              Schedule
            </span>
            <div className="flex text-gray-600 items-center bg-gray-200 rounded-md p-1">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M3.5 2A1.5 1.5 0 015 3.5V5H3.5a1.5 1.5 0 110-3zM6 5V3.5A2.5 2.5 0 103.5 6H5v4H3.5A2.5 2.5 0 106 12.5V11h4v1.5a2.5 2.5 0 102.5-2.5H11V6h1.5A2.5 2.5 0 1010 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1112.5 5H11zm0 6h1.5a1.5 1.5 0 11-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 113.5 11H5z" />
              </svg>
              <span>4</span>
            </div>
          </div>
        </div>

        {/* Row-6 */}
        <div className="flex flex-row mt-2 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <span className="w-full text-xs bg-inherit text-gray-600 flex px-2 placeholder-gray-600">
              Shared
            </span>
            <div className="flex items-center rounded-md p-1">
              <svg
                className="fill-gray-600"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 018 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Row-7 Boost */}
        <div className="flex flex-row mb-2 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.697.04a.5.5 0 01.296.542L8.09 6h4.41a.5.5 0 01.4.8l-6 8a.5.5 0 01-.893-.382L6.91 9H2.5a.5.5 0 01-.4-.8l6-8a.5.5 0 01.597-.16zM3.5 8h4a.5.5 0 01.493.582L7.33 12.56 11.5 7h-4a.5.5 0 01-.493-.582L7.67 2.44 3.5 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
              Boosts
            </span>
          </div>
        </div>

        {/* Row-8 Documents */}
        <div className="flex flex-row mb-2 w-full items-center justify-between">
          <div className="flex w-full p-1 rounded-md items-center flex-row">
            <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.697.04a.5.5 0 01.296.542L8.09 6h4.41a.5.5 0 01.4.8l-6 8a.5.5 0 01-.893-.382L6.91 9H2.5a.5.5 0 01-.4-.8l6-8a.5.5 0 01.597-.16zM3.5 8h4a.5.5 0 01.493.582L7.33 12.56 11.5 7h-4a.5.5 0 01-.493-.582L7.67 2.44 3.5 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
              Documents
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
