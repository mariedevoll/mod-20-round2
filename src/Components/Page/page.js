import React from 'react'; 

import AboutPage from '../../Pages/About/about';
import ContactPage from '../../Pages/Contact/contact';
import PortiolioPage from '../../Pages/Portfolio/portfolio';
import ResumePage from '../../Pages/Resume/resume';
import PageContent from '../Page-Content/content';

function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === 'About') {
            return <AboutPage/>
        } else if (currentPage.name === 'Contact') {
            return <ContactPage/>
        } else if (currentPage.name === 'Portfolio') {
            return <PortiolioPage/>
        } else if (currentPage.name === 'Resume') {
            return <ResumePage/>
        } else {
            return <AboutPage/>
        }
    }
    return <section>
        <PageContent>{renderPage()}</PageContent>
    </section>
}
export default Page;