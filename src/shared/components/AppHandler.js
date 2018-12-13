/* eslint max-len: [2, 500, 4] */
import React from 'react';

import sitemap from '../config/sitemap';
import MainMenu from './layout/menu/menu2';
import Footer from './layout/footer/footer2';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';

let doMenuAnimation = true;


export default class AppHandler extends React.Component {

  componentDidMount() {
    this.scrollHandler(true);
    window.addEventListener('scroll', this.onScroll, false);

    const width = window.innerWidth;
    if (width < 768) {
      $('#menu_wrapper').addClass('navbar-fixed-top');
      $('.navbar-brand').css('display', 'block');
      $('.navbar-icons').css('display', 'block');
    }
  }

  componentDidUpdate() {
    this.scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const offset = window.pageYOffset;
    const width = window.innerWidth;
    if (width < 768) {
      $('#menu_wrapper').addClass('navbar-fixed-top');
      $('.navbar-brand').css('display', 'block');
      $('.navbar-icons').css('display', 'block');
    } else {
      if (offset > 386) {
        if (doMenuAnimation) {
          $('#menu_wrapper').css('display', 'none');
          $('.navbar-brand').css('display', 'block');
          $('.navbar-icons').css('display', 'block');
          $('#menu_wrapper').addClass('navbar-fixed-top').fadeIn('slow');
          doMenuAnimation = false;
        }
      } else {
        $('#menu_wrapper').removeClass('navbar-fixed-top');
        $('.navbar-brand').css('display', 'none');
        $('.navbar-icons').css('display', 'none');
        doMenuAnimation = true;
      }
    }
  }

  scrollHandler(isFirstTime) {
    const { location } = this.props;
    scrollUtil(location);
    if (!isFirstTime) {
      const bits = location.pathname.split('/');
      menuUtil(bits[1] || 'inicio');
    }
  }

  clickHandler() {
    if ($('.navbar-header button').is(':visible')) {
      $('.navbar-header button').click();
    }
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child);
    });
    return (<div>
      <MainMenu items={sitemap.items.children} icons={sitemap.icons} onClick={this.clickHandler} />
      {children}
      <Footer items={sitemap.items.children} addresses={sitemap.addresses} icons={sitemap.icons}/>
    </div>);
  }
}

AppHandler.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.any,
  context: React.PropTypes.any,
};
