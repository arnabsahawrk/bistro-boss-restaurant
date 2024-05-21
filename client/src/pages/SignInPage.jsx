import SignIn from "../components/SignIn/SignIn";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const SignInPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Sign In" />
      <section>
        <SignIn />
      </section>
    </>
  );
};

export default SignInPage;
