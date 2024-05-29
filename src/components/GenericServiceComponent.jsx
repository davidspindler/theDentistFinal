import './GenericServiceComponent.css';

const GenericServiceComponent = ({ title, description, sectionOneTitle, sectionOneData, sectionTwoTitle, sectionTwoData, sectionThreeData, sectionThreeTitle }) => {
  return (
    <div className="smile-design">
      <div className="styled-content">
        <div className="padding-20">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder" className="card-image padding-20"/>
      </div>

      <hr className='style-one'></hr>
      <div className="section">
        <h2 className="section-title">{sectionOneTitle}</h2>
        <ul className="card-list">
          {sectionOneData.map((item, index) => (
            <li className="card" key={index}>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">{sectionTwoTitle}</h2>
        <ul className="feature-list">
          {sectionTwoData.map((item, index) => (
            <li className="feature" key={index}>
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {
        sectionThreeData && 
        <div className="section">
        <h2 className="section-title">{sectionThreeTitle}</h2>
        <ul className="feature-list">
          {sectionThreeData?.map((item, index) => (
            <li className="feature" key={index}>
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      }
    
    </div>
  );
};

export default GenericServiceComponent;