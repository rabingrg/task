import DigitalClock from "./ui/DigitalClock";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen">
      <header className="h-20 flex justify-center items-center bg-blue-100 text-center text-3xl text-gray-600">
        Welcome to Dashboard
      </header>
      <section className="w-full h-full flex">
        <aside className="w-[18rem] h-full bg-gray-200">

        </aside>
        <div className="w-[calc(100%-18rem)] flex justify-center ">
         <DigitalClock/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
