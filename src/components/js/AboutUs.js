import React from "react";
import "../css/AboutUs.css";

const Aboutus = () => {
  return (
    <div>
      <div className="w-100 mt-5">
        <h2>Sales of Properties in Spain on the Costa Del Sol</h2>
      </div>
       <div className="aboutus size d-flex mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <img src={`${process.env.PUBLIC_URL}/img/apartments.jpg`} alt="Apartments" className="p-2"></img>
      </div>
      <div className="p-4 d-flex flex-column justify-content-center align-items-center">
        <div className="pt-2 w-100">
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nibh venenatis cras sed felis eget. Odio ut sem nulla pharetra. 
            Quis imperdiet massa tincidunt nunc. Sed blandit libero volutpat sed cras ornare arcu. Scelerisque eleifend donec pretium vulputate sapien nec. 
          </p>
          <p className="p-4">
            Dolor sit amet consectetur adipiscing elit ut. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Proin fermentum leo vel orci porta non pulvinar neque laoreet. 
            Ac ut consequat semper viverra nam. Nisl vel pretium lectus quam id leo in. At augue eget arcu dictum varius duis at. Urna cursus eget nunc scelerisque viverra mauris in aliquam. 
            Aliquet eget sit amet tellus. Purus gravida quis blandit turpis cursus in hac. Erat imperdiet sed euismod nisi porta lorem mollis aliquam.
          </p>
        </div>
        <div className='form pt-2'>
            <div className='d-flex justify-content-center'> 
                <button variant="warning" className='mt-1 form__button'><a className='form' href="/Properties">Check what we offer</a></button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
