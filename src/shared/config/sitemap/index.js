import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';
import AboutSection from '../../components/sections/about';
import ServicesSection from '../../components/sections/services';
import ContactSection from '../../components/sections/contact';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      id: 1,
      title: 'Inicio',
      url: '/inicio',
      component: HomeSection,
    }, {
      id: 2,
      title: 'Nosotros',
      url: '/nosotros',
      component: AboutSection,
    }, {
      id: 3,
      title: 'Servicios',
      url: '/servicios',
      component: ServicesSection,
    }, {
      id: 4,
      title: 'Contacto',
      url: '/contacto',
      component: ContactSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/',
  }],
  addresses: [{
    title: 'Tijuana',
    tel: '(664) 634-1615 / 684-7425',
  }, {
    title: 'Mexicali',
    tel: '(686) 552-3672',
  }, {
    title: 'Ensenada',
    tel: '(686) 552-3672',
  }, {
    title: 'Farmacia de la Piel',
    tel: '(664) 684-8288',
  }],
};
