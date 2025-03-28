import Profile from "../assets/images/profile-2d.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-blue-200">
      <div className="flex-1 bg-gradient-to-l from-sky-400 to-sky-600 flex flex-col lg:items-center px-10 lg:p-8 gap-4 justify-center drop-shadow-2xl z-50">
        <img
          src={Profile}
          alt="profile"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full border-2  border-white shadow-md"
        />
        <div className="flex flex-col gap-2 text-left lg:text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight font-mono">
            Hello i'am Ni'am
          </h1>
          <p className="text-sm md:text-base lg:text-lg w-auto text-white font-sans">
            I am a 12th grade student of SMK Walisongo 2 Gempol, majoring in IT.
          </p>
        </div>

        <button className="p-2 lg:p-4 text-sm lg:text-base bg-blue-700 rounded-lg text-white cursor-pointer border-gray-400 shadow-lg hover:bg-sky-700 transition-all ease-in-out duration-300 active:text-gray-300 font-medium">
          <a href="https://portofolio.niam.my.id" target="_blank">
            Don't Touch
          </a>
        </button>
      </div>

      <div className="flex-2 flex justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-700 font-mono animate-spin duration-1000 gap-3.5 grid">
          <button className="bg-blue-700 rounded-full px-6 p-4 text-white"></button>
          <button className="bg-blue-700 rounded-full px-6 p-4 text-white"></button>
        </h1>
      </div>
    </div>
  );
};

export default Home;
