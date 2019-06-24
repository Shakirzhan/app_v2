import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createReactClass from "create-react-class"
import menuList from "./menu_list"
import intermediaReport from "./intermedia_report"

var application = createReactClass({
  getInitialState: function() {
    return {
      displayedContacts: intermediaReport
    };
  },
  handleFiltr: function(e) {
    var filtr = +e.target.value;
    var d = [];
    var displayedData = intermediaReport.map(function(el, index) {
      var obj = {};
      var data = el.child_element;
      obj.id = el.id;
      obj.year = el.year;
      obj.child_element = [];
      data.filter(function(it, i) {
        if ( it.bix == filtr ) {
          obj.child_element.push( it );  
        }
      });
      d.push( obj );
    });
    this.setState({
      displayedContacts: d
    });
  },
  InterimReports: function() {
    return(
      <div className="types">
        <b className="types__head">Типы отчетов:</b>
        <div className="types__wrap">
          <label className="types__button types__button--darker">
            <input type="radio" name="all" value="1" onChange={this.handleFiltr} />
            <div className="types__visual"></div>
            <span className="types__txt">ДТП</span>
          </label>
        </div>
        <div className="types__wrap">
          <label className="types__button types__button--lighter">
            <input type="radio" name="all" value="2" onChange={this.handleFiltr} />
            <div className="types__visual"></div>
            <span className="types__txt">Дорожные работы</span>
          </label>
        </div>
        <div className="types__wrap">
          <label className="types__button types__button--blue-light">
            <input type="radio" name="all" value="3" onChange={this.handleFiltr} />
            <div className="types__visual"></div>
            <span className="types__txt">Опасные участки</span>
          </label>
        </div>
      </div>   
    );
  },
  InterimReportsContent: function() {
    function elements(el) {
      const doubled = el.map( (it) =>  
        <a href="#" className="annual-section__item annual-section__item--pink-dark" key={it.id}>
          <b className="annual-section__item-head">{it.title}</b>
          <b className="annual-section__item-date">{it.date}</b>
        </a>
      );
      return (
        <div className="annual-section__list">
          {doubled}
        </div> 
      );
    }

    const doubled = this.state.displayedContacts.map( (it) => 
      <div className="annual-section" key={it.id}>
        <b className="annual-section__head">{it.year}</b>
        {elements(it.child_element)}
      </div>    
    );
    return (
      <div className="main-wrap" id="main-wrap">
        {doubled} 
      </div>
    );
  },
  Menu: function() {
    const doubled = menuList.map((it) => 
      <li className={`main-tab__item col-lg-3 ${it.class_active}`} key={`${it.id}`}>
        <Link to={`${it.url}`}>{`${it.name_url}`}</Link>
      </li> );

    return (
      <ul className="main-tab row">
        {doubled}   
      </ul> 
    );
  },
  Logo: function() {
    return(
      <Link to="/"><img src="img/logo_v_2.svg" alt="logo" /></Link>
    );
  },
  Header: function() {
    return (
      <div className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="row">
              <div className="col-lg-8">
                <div className="header__logo">
                  <div id="header__logo">
                    {this.Logo()}
                  </div>
                  <div className="header__logo-wrap">
                    <b className="header__logo-head">Трансдорстат</b>
                    <span className="header__logo-slogan">Унифицированная система сбора отчетностсти</span>
                  </div>  
                </div>
              </div>
              <div className="col-lg-4 header__right-block">
                <div className="row justify-content-between">
                  <div className="col-lg-8">
                    <div className="header__geolocation">
                      <a className="header__geolocation-button" href="#">Алтайский край</a>  
                      <div className="header__geolocation-block">
                        <ul className="header__geolocation-list"></ul> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="header__login">
                      <a className="header__login-button" href="#">Вход</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  Content: function() {
    return(
      <div className="main">
        <div className="container">
          <div className="main--white">
            
              <Route component={this.Menu} />
              <div>
                <Route path="/interimreports" component={this.InterimReports} />
                <Route path="/interimreports" component={this.InterimReportsContent} />
              </div>
            
          </div>
        </div>
      </div>
    );
  },
  Footer: function() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer__logo">
                  <div>
                    <img src="img/logo-b.svg" alt="foot-logo" />
                  </div>
                  <div className="footer__logo-wrap">
                    <b className="footer__logo-head">Трансдорстат</b>
                    <span className="footer__logo-slogan">Унифицированная система сбора отчетностсти</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="menu row">
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Помощь и поддержка</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Вход и регистрация</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Задать вопрос</a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Партнёрам</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Государственным органам</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Коммерческим организациям</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Документы</a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Полезные ресурсы</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Российская общественная инициатива</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Интернет-портал правовой информации</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    return (
      <Router>
        {this.Header()}
        {this.Content()}
        {this.Footer()}
      </Router>
    );
  }
});

export default application