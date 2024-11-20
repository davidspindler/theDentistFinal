import { UserRoundX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
const UserProfile = () => {
  return (
    <section className="register">
      <section className="">
    {/* <button className='sign'>
   Insurance
    </button> */}
        {/* <Link to={`#`}>Log in</Link> */}
        {/* <Phone color="white" size={24} /> */}
        <button className="sign"> <Phone color="black" size={18} /><a href="tel:(714) 540-3838">(714) 540-3838</a></button>
      </section>
    </section>
  );
};

export default UserProfile;
