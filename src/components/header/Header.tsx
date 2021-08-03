import './Header.scss';
import * as React from 'react';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header_left">
        <div className="menu__button">
          <span className="menu__span"></span>
        </div>
        <p className="menu__text">MENU</p>
      </div>
      <div className="header_centre">
        <div className="header_centre__search">
          <img src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" className="search-icon" />
          <input type="text" className="header_centre__input" placeholder="SEARCH FOR INSPIRATION" />
        </div>
        <div className="header_centre__logo">LOGO</div>
        <button className="header_centre__auth">REGISTER / LOG IN</button>
      </div>
      <div className="header_right">
        <button className="header__button_close">close</button>
      </div>
    </header>
  );
}
