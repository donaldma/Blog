import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    // checkUserLogin = () => {
    //   if(!user) {
    //     return (
    //       <li><a href="/user/login">Login</a></li>
    //     )
    //   } else {
    //     return (
    //       <span>
    //         <li>
    //           <a href='/profile/user.id'>
    //             <img className="nav-avatar" src={user.avatar_url} />&nbsp;&nbsp;{user.name}
    //           </a>
    //         </li>
    //         <li><a href="/user/logout">Log out</a></li>
    //       </span>
    //     )
    //   }
    // }
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <ul className="navbar-toggle nav-social">
              <li><a href="https://www.facebook.com/kenaduhh" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="https://twitter.com/kenaduhh" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="https://www.instagram.com/ken_eggy/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            </ul> 
            <button type="button" className="navbar-toggle nav-menu" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/posts/all'}>All posts</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="full-nav"><a href="https://www.facebook.com/kenaduhh" target="_blank"><i className="fa fa-facebook fa-lg" aria-hidden="true" /></a></li>
              <li className="full-nav"><a href="https://twitter.com/kenaduhh" target="_blank"><i className="fa fa-twitter fa-lg" aria-hidden="true" /></a></li>
              <li className="full-nav"><a href="https://www.instagram.com/ken_eggy/" target="_blank"><i className="fa fa-instagram fa-lg" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}