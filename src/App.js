import logo from './logo.svg';
import moduleCSS from './App.module.css';
import react from 'react';
import { Component } from 'react';
import ProductFreeze from './productFreeze';

class App extends Component {

  state = {
    ProductData: {
      title: 'FitBit 19 - The Smartest Watch',
      description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      colorOptions: [
          {
              styleName: 'Black Strap',
              imageUrl: 'https://imgur.com/iOeUBV7.png'
          },
          {
              styleName: 'Red Strap',
              imageUrl: 'https://imgur.com/PTgQlim.png'
          },
          {
              styleName: 'Blue Strap',
              imageUrl: 'https://imgur.com/Mplj1YR.png'
          },
          {
              styleName: 'Purple Strap',
              imageUrl: 'https://imgur.com/xSIK4M8.png'
          },
      ],
      featureList: [
          "Time", "Heart Rate"
      ]
  },

  hold: 0
  }  


  render(){
  const doSome = (pos) => {
    this.setState({hold: pos})
    // let getState = this.state.ProductData;
    // let getObjectFiled = getState.colorOptions;
    // let getPosition = getObjectFiled[pos];
    return pos;
  }
  const iterate = this.state.ProductData.colorOptions.map(
    (item, pos) => {
      return (
        <button  className={moduleCSS.press} onClick={() => doSome(pos)}>
          <img className={moduleCSS.picture} src={item.imageUrl} key={pos}/>
        </button>
      )
    }
  );
    return (
      <div className={moduleCSS.App}>
         <header className={moduleCSS.companyName}>Product Details</header>
         <div className={moduleCSS.mainContainer}>
         <div className={moduleCSS.displayPicture}>  
          <img className={moduleCSS.bigWatch} src={this.state.ProductData.colorOptions[this.state.hold].imageUrl}></img>

          <div className={moduleCSS.featureData}>
          <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
        </div>
        <div className={moduleCSS.info}>
        <ProductFreeze tittle={this.state.ProductData.title} description={this.state.ProductData.description} SelectColor="Select Color"/>
        <div className={moduleCSS.watchBtns}>
          {iterate}
        </div>
        <p className={moduleCSS.feature}> <b>Features</b></p>
        <div className={moduleCSS.Morebtns}>
            <div className={moduleCSS.Time}>
                <button className={moduleCSS.featureBtn}>{this.state.ProductData.featureList[0]}</button>
            </div>
            <div className={moduleCSS.Hrate}>
                <button className={moduleCSS.featureBtn}>{this.state.ProductData.featureList[1]}</button>
            </div>
        </div>
        <div className={moduleCSS.bNow}>
          <button className={moduleCSS.buyNowBtn}>Buy Now</button>
        </div>
        </div>
         </div>
      </div>
    );
  }



}

export default App;
