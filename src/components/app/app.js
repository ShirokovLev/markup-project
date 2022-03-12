import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Header from '../header';
import Breadcrumbs from '../breadcrumbs';
import Banner from '../banner/banner';
import bannerPic from '../../assets/images/banner-pic.png'
import GameList from '../game-list';
import Footer from '../footer';
import CollapseList from '../collapse-list';
import Overlay from '../overlay';
import XsNavigation from '../xs-navigation';


function App() {

  const { isPopupVisible } = useSelector((state) => ({
    isPopupVisible: state.isPopupVisible,
  }));

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <Breadcrumbs />
          <h1 className="content__caption caption caption_size_xl text_color_black">
            Games
          </h1>
          <Banner className="content__banner" title="Refer a friends and get $10 off!" description="Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27." linkName="Invite a friend" link="/" picUrl={bannerPic}/>
          <GameList />
          <div className="info-block">
            <h2 className="caption caption_size_medium info-block__caption">Frequently asked questions</h2>
            <p className="text text_size_regular text_weight_regular text_color_gray info-block__sub-caption">Everything you need to know about the games.</p>
          </div>
          <CollapseList />
        </div>
      </div>
      <Footer />
      <XsNavigation />
      { isPopupVisible && <Overlay />}
    </div>
  );
}

export default App;
