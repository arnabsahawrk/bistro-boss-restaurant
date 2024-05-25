import Container from "../common/Container/Container";
import bgAuth from "../../assets/others/authentication.png";
import authentication from "../../assets/others/authentication2.png";
import { FaGoogle } from "react-icons/fa";
import useFirebase from "../../hooks/useFirebase";
import toast from "react-hot-toast";
import loadingGif from "../../assets/others/loader3.gif";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../common/Button/CommonButton";
import useAxiosPublic from "../../hooks/Axios/useAxiosPublic";

const SignIn = () => {
  const { signInWithGoogle, authLoading, setAuthLoading } = useFirebase();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Successfully Sign In");
      setAuthLoading(false);
      navigate(location?.state || "/");
      if (result?.user?.email) {
        const { data } = await axiosPublic.post("/jwt", {
          email: result?.user?.email,
        });

        localStorage.setItem("access-token", data.token);
      }
    } catch (err) {
      toast.error(`${err}`);
      setAuthLoading(false);
    }
  };
  return (
    <section
      style={{
        backgroundImage: `url(${bgAuth})`,
      }}
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
    >
      <Container
        style={{
          backgroundImage: `url(${bgAuth})`,
        }}
        className="bg-cover bg-center bg-no-repeat w-full"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center p-10 shadow-2xl w-full">
          <img
            className="object-cover flex-grow"
            src={authentication}
            alt="authentication"
          />
          <div className="flex-grow space-y-5">
            <h1 className="text-[#151515] font-bold text-xl md:text-3xl text-center lg:text-left">
              Sign In
            </h1>
            {authLoading ? (
              <img className="h-20 object-cover" src={loadingGif} />
            ) : (
              <button
                onClick={handleSignIn}
                className="flex items-center gap-3 bg-[#d9b783] py-4 px-8 text-white"
              >
                <FaGoogle /> Sign With Google
              </button>
            )}
            <CommonButton text="Back" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;
