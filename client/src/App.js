
import './App.css';
import Home from './Home';
import { About } from './About';
import { NavBar } from './NavBar';
import { FooTer } from './FooTer';
import { Packages } from './Packages';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WebDesignServices from './webDesignServices';
import { WebRedesign } from './WebRedesign';
import WebEcommerce from './WebEcommerce';
import { CmsWeb } from './CmsWeb';
import { WebPortal } from './WebPortal';
import { StaticWeb } from './StaticWeb';
import WebDev from './WebDev';
import PhpWeb from './PhpWeb';
import { WordPressWeb } from './WordPressWeb';
import { EcomWevDev } from './EcomWevDev';
import MogentoWeb from './MogentoWeb';
import GraphicDesign from './GraphicDesign';
import { LogoDesign } from './LogoDesign';
import { FlyerDesign } from './FlyerDesign';
import BrochureDesign from './BrochureDesign';
import { PsdHtml } from './PsdHtml';
import MobileApp from './MobileApp';
import AndroidApp from './AndroidApp';
import IosApp from './IosApp';
import Seo from './Seo';
import Content from './Content';
import { EcomSeo } from './EcomSeo';
import Smo from './Smo';
import FbMarket from './FbMarket';
import { YtMarket } from './YtMarket';
import { Sem } from './Sem';
import Ppc from './Ppc';
import { GwordManage } from './GwordManage';
import EmailMarket from './EmailMarket';
import Contact from './Contact';
import { TnC } from './TnC';
import { PrivacyPolicy } from './PrivacyPolicy';
import DigitalMarket from './DigitalMarket';
import Services from './Services';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/who-we-are">
            <About />
          </Route>
          <Route exact path="/price-packages">
            <Packages />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/term-and-conditions">
            <TnC />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/website-design-services">
            <WebDesignServices />
          </Route>
          <Route exact path="/website-redesign-services">
            <WebRedesign />
          </Route>
          <Route exact path="/ecommerce-website-design-services">
            <WebEcommerce />
          </Route>
          {/* <Route exact path="/hotel-website-design-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/cms-website-design-services">
            <CmsWeb />
          </Route>
          <Route exact path="/web-portal-design-services">
            <WebPortal />
          </Route>
          <Route exact path="/static-website-design-services">
            <StaticWeb />
          </Route>
          <Route exact path="/web-development-services">
            <WebDev />
          </Route>
          <Route exact path="/php-website-development-services">
            <PhpWeb />
          </Route>
          <Route exact path="/wordpress-website-development-services">
            <WordPressWeb />
          </Route>
          <Route exact path="/ecommerce-website-development-services">
            <EcomWevDev />
          </Route>
          <Route exact path="/magento-website-development-services">
            <MogentoWeb />
          </Route>
          <Route exact path="/graphic-design-services">
            <GraphicDesign />
          </Route>
          <Route exact path="/logo-design-services">
            <LogoDesign />
          </Route>
          <Route exact path="/flyer-design-services">
            <FlyerDesign />
          </Route>
          <Route exact path="/brochure-design-services">
            <BrochureDesign />
          </Route>
          {/* <Route exact path="/mailer-design-services">
            <WebDesignServices />
          </Route>
          <Route exact path="/visiting-card-design-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/psd-to-html">
            <PsdHtml />
          </Route>
          <Route exact path="/digital-marketing-services">
            <DigitalMarket />
          </Route>
          <Route exact path="/seo-services">
            <Seo />
          </Route>
          <Route exact path="/content-marketing-services">
            <Content />
          </Route>
          {/* <Route exact path="/hotel-website-seo-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/ecommerce-website-seo-services">
            <EcomSeo />
          </Route>
          {/* <Route exact path="/orm-management-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/conversion-rate-optimization-services">
            <WebDesignServices />
          </Route>
          <Route exact path="/email-marketing-services">
            <EmailMarket />
          </Route>
          {/* <Route exact path="/bulk-sms-services">
            <WebDesignServices />
          </Route> */}
          <Route exact path="/sem-marketing-services">
            <Sem />
          </Route>
          <Route exact path="/ppc-campaign-marketing-services">
            <Ppc />
          </Route>
          <Route exact path="/google-adwords-management-services">
            <GwordManage />
          </Route>
          <Route exact path="/smo-marketing-services">
            <Smo />
          </Route>
          <Route exact path="/facebook-marketing-services">
            <FbMarket />
          </Route>
          <Route exact path="/youtube-video-marketing-services">
            <YtMarket />
          </Route>
          <Route exact path="/mobile-application-development-services">
            <MobileApp />
          </Route>
          <Route exact path="/android-application-development-services">
            <AndroidApp />
          </Route>
          <Route exact path="/ios-application-development-services">
            <IosApp />
          </Route>
          {/* <Route exact path="/ipad-application-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/mobile-website-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/web-application-development-services">
            <WebDesignServices />
          </Route> */}
          {/* <Route exact path="/custom-software-development-services">
            <WebDesignServices />
          </Route> */}
        </Switch>
        <FooTer />
      </Router>
    </>
  );
}

export default App;
