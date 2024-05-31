import { Link } from 'react-router-dom';
import './ServiceLayout.css';

const ServiceComponent = ({ title, description, bullets, isEven }) => {
    return (
      <div className={`service ${isEven ? 'even' : 'odd'}`}>
        <div className="service-content">
          <div className={`service-text ${isEven ? 'left' : 'right'}`}>
            <div className="service-title">{title}</div>
            <div className="service-description">{description}</div>
            <ul className="service-bullets">
              {bullets.map((bullet, index) => (
                <li key={index}>
                    <Link to={bullet.href} className='text-decorate'>
                    {bullet.label}   
                    </Link>
                    </li>
              ))}
            </ul>
          </div>
          <div className={`service-picture ${isEven ? 'right' : 'left'}`}>Picture Placeholder</div>
        </div>
      </div>
    );
  };
  
  export default ServiceComponent;