import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { apiSlice } from '../../services/apiSlice';
import { logOut, selectUser } from '../../services/auth/authSlice';

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <>
      <p>{user?.username}</p>
      <button
        onClick={async () => {
          dispatch(logOut());
          dispatch(apiSlice.util.resetApiState());
          location.pathname = '';
        }}
      >
        Homes
      </button>
    </>
  );
};

export default Home;
