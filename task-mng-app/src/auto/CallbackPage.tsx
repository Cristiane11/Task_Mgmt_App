import { useAuth0 } from "@auth0/auth0-react";


const CallbackPage: React.FC = () => {

    const { error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

  return (
    <>
      <h1>Call back Page</h1>
    </>
  );
};
export default CallbackPage;