import UserProfile from "./UserProfile";

const UserHome = () => {
  return (
    <div className="py-5 space-y-5">
      <h2 className="text-[#151515] font-semibold text-2xl md:text-3xl lg:text-4xl">
        Hi, Welcome Back!
      </h2>
      <UserProfile />
    </div>
  );
};

export default UserHome;
