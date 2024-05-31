import { UserRoundX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
const UserProfile = () => {
  return (
    <div className="register">
    
      <div className="">
        {/* <Link to={`#`}>Log in</Link> */}
        {/* <Phone color="white" size={24} /> */}
        <button className="sign"> <Phone color="black" size={18} />777-777-7777</button>
      </div>
    </div>
  );
};

export default UserProfile;
