import React        from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd   from 'material-ui/svg-icons/content/add';
import SERVICE      from './../../../assets/img/Untitled-1.png';
import LaunchImage  from './../../../assets/img/LaunchImage.jpg';
import './HomePage.scss';

const fontFamilyName = 'Cabin';
const homePageStyles = {
  defaultDiv:{
      backgroundImage:`url(${LaunchImage})`,
      minHeight:'400px',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'right 0px bottom 140px'
  }
};

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container--fluid">
        <div style={homePageStyles.defaultDiv}>

        </div>
      </div>
    );
  }
}

export default HomePage;
