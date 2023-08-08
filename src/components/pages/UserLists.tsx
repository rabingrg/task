import { useState } from "react";
import { UserListData } from "../store/AllUsers";
import SearchUser from "./ui/SearchUser";
import UserList from "./ui/UserTable";
import SideBar from "./ui/SideBar";
import { UserListTypes } from "../types/UserListTypes";

const SearchList = () => {
  const [searchRole, setSearchRole] = useState<string>("");
  const filteredUsers: UserListTypes[] = UserListData.filter((user) =>
    user.role.toLowerCase().includes(searchRole.toLowerCase())
  );

  // console.log("filteredUsers", filteredUsers);

  return (
    <div>
      <div className="w-screen h-screen">
        <header className="h-20 flex justify-center items-center bg-blue-100 text-center text-3xl text-gray-600 shadow-md">
          User Lists
        </header>
        <section className="w-full h-full flex">
          <aside className="w-[18rem] h-full p-6 bg-gray-200">
            <SideBar />
          </aside>
          <div className="w-[calc(100%-18rem)] flex justify-center ">
            <div className="w-full relative">
              <div className="absolute top-5 left-7">
                <SearchUser
                  searchRole={searchRole}
                  setSearchRole={setSearchRole}
                />
              </div>
              <div className="mt-10">
                <UserList filteredUsers={filteredUsers} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchList;
