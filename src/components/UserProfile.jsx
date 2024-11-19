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
        <a href='tel:(714) 540-3838' className="sign"> <Phone color="black" size={18} />(714) 540-3838</a>
      </section>
    </section>
  );
};

export default UserProfile;
