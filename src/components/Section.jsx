import propTypes from 'prop-types';

export const Section = ({ children, title }) => {
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  };

  Section.propTypes ={
    title: propTypes.string,
    children: propTypes.any
  }