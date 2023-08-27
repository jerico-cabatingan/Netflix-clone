import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  function logOut() {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      alert(error.message)
    });
  }

  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img className="" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Display Picture"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button onClick={() => logOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileScreen