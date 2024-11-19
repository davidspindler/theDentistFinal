import { useRouteError } from 'react-router-dom';

const NotMatch = () => {
  const error = useRouteError();

  return (
    <main>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </main>
  );
};
export default NotMatch;
