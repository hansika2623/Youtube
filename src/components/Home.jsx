import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden mt-16">
      <Sidebar />
      <div className="h-[calc(100vh-6.25rem)] overflow-x-hidden overflow-y-scroll">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {Array.isArray(data) &&
            !loading &&
            data.map((item) => {
              if (item.type !== "video") return null;
              return <Video key={item.id} video={item?.video} />; //Here we have done optional chaining so that if an error occurs it will display nothing, i.e, application will not crash
            })}
        </div>
      </div>
    </div>
  );
}
export default Home;
