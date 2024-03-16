import React from 'react';

const PessoalPage = () => {
  return (
    <>
      <div className="timeline">
        <div className="timeline-year">
          <h4>2023</h4>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            {/* Add more events as needed */}
          </ul>
        </div>
        <div className="timeline-year">
          <h4>2022</h4>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            {/* Add more events as needed */}
          </ul>
        </div>
        {/* Add more timeline years as needed */}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Pessoal' },
  };
}

export default PessoalPage;
