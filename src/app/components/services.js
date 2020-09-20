import React from 'react';

const Services = () => (
  <section className='page-section' id='services'>
    <div className='container'>
      <div className='text-center'>
        <h2 className='section-heading text-uppercase'>Services</h2>
        <h3 className='section-subheading text-muted'>Sell Your Scrap Cars</h3>
      </div>
      <div className='row text-center'>
        <div className='col-md-6 '>
          <span className='fa-stack fa-4x mb-5'>
            <i className='fas fa-circle fa-stack-2x text-primary'></i>
            <i className='fas fa-car fa-stack-1x fa-inverse'></i>
          </span>
          <h4 className='mt-3'>Buy any car</h4>
          <p className='text-muted'>
            Here at global recoveries, we are able to match any quote and buy
            your cars
          </p>
        </div>
        <div className='col-md-6'>
          <span className='fa-stack fa-4x mb-5'>
            <i className='fas fa-circle fa-stack-2x text-primary'></i>
            <i className='fas fa-recycle fa-stack-1x fa-inverse'></i>
          </span>
          <h4 className='my-3'>Scrap your cars</h4>
          <p className='text-muted'>We can scrap your cars safely for you</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
