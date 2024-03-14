const ProfissionalPage = () => {
  return (
    <>
      <h3>aqui o bundao</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Profissional' },
  };
}

export default ProfissionalPage;
