import React, {Suspense} from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import Header from "./components/header/Header";
import Parallax_Effect from "./components/main_content/Main_Content_Parallax";
import Footer from "./components/footer/Footer";
import './i18n';
import Loader from 'react-loader-spinner'


function Page() {
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    };

    function onSelectFlag(countryLang) {
        if(countryLang === "GB"){
            changeLanguage('en')
        }
        if(countryLang === "PL"){
            changeLanguage('pl')
        }

    }
    function ChooseLanguage() {
        return( <ReactFlagsSelect
            className="flag-select"
            countries={["GB","PL"]}
            customLabels={{"GB": " EN","PL":" PL"}}
            placeholder="Languages:"
            alignOptions="left"
            selectedSize={12}
            optionsSize={12}
            defaultCountry="PL"
            onSelect={onSelectFlag}
        />)
    }
  return (
    <>

        {ChooseLanguage()}

        {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Parallax_Effect/>


            </>
  );
}

export default function App() {
    return (
        <Suspense fallback={
            <Loader
                className="loading"
                type="Hearts"
                color="red"
                height={300}
                width={300}
                timeout={5000} //3 secs
            />
        }>
            <Page/>
        </Suspense>
    );
}
