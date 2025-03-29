import ProfilePhoto from "../../assets/images/profile-2d.png";

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={ProfilePhoto}
        alt="profile"
        className="w-16 h-16 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full border-2  border-white shadow-md"
      />
      <div className="flex flex-col gap-2 text-left lg:text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight font-mono">
          Hello i'am Ni'am
        </h1>
        <p className="text-sm md:text-base lg:text-lg w-auto text-white font-sans">
          I am a 12th grade student of SMK Walisongo 2 Gempol Majoring in
          Computer Network Engineering.
        </p>
      </div>
    </div>
  );
};

export default Profile;
