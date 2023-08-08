// import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { UserListTypes } from "../types/UserListTypes";
import { UserListData } from "../store/AllUsers";
import SideBar from "./ui/SideBar";

const UserList = () => {
  const columnHelper = createColumnHelper<UserListTypes>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("role", {
      header: "Role",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data: UserListData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-screen h-screen">
      <header className="h-20 flex justify-center items-center bg-blue-100 text-center text-3xl text-gray-600 shadow-md">
        User Lists
      </header>
      <section className="w-full h-full flex">
        <aside className="w-[18rem] h-full p-6 bg-gray-200">
          <SideBar />
        </aside>
        <div className="w-[calc(100%-18rem)] flex justify-center ">
          <div className="w-full px-5 py-7">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {" "}
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="h-[2.25rem] pb-[1.5rem] font-normal text-[rem] text-gray-600 leading-[rem] text-center"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                    <>
                  <tr
                    key={row.id}
                    className=" mt-[1.5rem] bg-gray-100 h-[3.25rem]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-2 text-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                  <div className="h-1" />
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
