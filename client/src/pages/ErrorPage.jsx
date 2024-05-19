import errorPic from "../assets/404.gif";
import Container from "../components/common/Container/Container";
import CommonButton from "../components/common/Button/CommonButton";

const ErrorPage = () => {
  return (
    <section>
      <Container>
        <div className="h-screen flex flex-col items-center justify-center py-10">
          <img className="size-full object-contain" src={errorPic} alt="404" />
          <CommonButton text="Back" />
        </div>
      </Container>
    </section>
  );
};

export default ErrorPage;
