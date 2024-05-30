import React from 'react';

const PageContent = (props) => {
    return <section className='page-content'>
        {props.children}
    </section>
}
export default PageContent;