import React,{FC, Fragment} from 'react';
import Header from '../components/Header';

interface HomePageProps {
  translate:(key:string)=>string;
}

const Homepage:FC<HomePageProps> = ({translate})=>{
return(
  <Fragment>
    <Header fixed transparent/>
    <section className="intro">
      <div className="inro__overlay"></div>
      <div className="intro__body">
        <h1>React</h1>
        <p>{translate('introText')}</p>
      </div>
    </section>
  </Fragment>
)

  
}
export default Homepage;