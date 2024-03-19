const ProfissionalPage = () => {// Define um componente de função chamado ProfissionalPage.
  return (
    <>
            <style jsx>{`  // Define estilos CSS específicos para esta página usando a sintaxe jsx.
        .timeline {
          font-family: Arial, sans-serif;  // Define a fonte para a linha do tempo.
        }
        // Estilos para os itens da linha do tempo.
        .item {
          margin-bottom: 20px;  // Define a margem inferior dos itens.
          border-left: 4px solid;  // Define a borda esquerda dos itens.
          padding-left: 10px;  // Define o preenchimento à esquerda dos itens.
          max-width: 50%;  // Define a largura máxima dos itens para metade da página.
        }
        .year {
          font-weight: bold;  // Define o peso da fonte para negrito.
          font-size: 30px;  // Define o tamanho da fonte para as datas.
          margin-right: 10px;  // Define a margem direita para as datas.
        }
        // Estilos específicos para cada ano.
        .year-2020 {
          color: #61DAFB;  // Cor para o ano de 2020.
          border-color: #61DAFB;  // Cor da borda para o ano de 2020.
        }
        .year-2021 {
          color: #E34F26;  // Cor para o ano de 2021.
          border-color: #E34F26;  // Cor da borda para o ano de 2021.
        }
        .year-2022 {
          color: #1572B6;  // Cor para o ano de 2022.
          border-color: #1572B6;  // Cor da borda para o ano de 2022.
        }
        .year-2023 {
          color: #F7DF1E;  // Cor para o ano de 2023.
          border-color: #F7DF1E;  // Cor da borda para o ano de 2023.
        }
        .year-2024 {
          color: #E34F26;  // Cor para o ano de 2024.
          border-color: #E34F26;  // Cor da borda para o ano de 2024.
        }
        p {
          color: white;  // Cor do texto branco.
        }
      `}</style>
      <div className="timeline"> 
        <div className="item year-2020"> 
          <span className="year">2020</span> 
          <h2>Engenharia de Controle e Automação</h2>
          <p>Minha jornada profissional teve início quando escolhi cursar Engenharia de Controle e Automação na UFRGS. Desde cedo, minha paixão pela robótica direcionou minhas escolhas, e optar por essa área foi uma decisão natural. A cada ano que passa, minha convicção de que fiz a escolha certa só se fortalece, pois encontro verdadeiro prazer em trabalhar nesse campo.</p>
        </div>
        <div className="item year-2021">
          <span className="year">2021</span>
          <h2>Empresa Sinc Jr</h2>
          <p>Durante o segundo semestre da faculdade, minha mentalidade já estava voltada para a exploração do mercado. Compreendi que a formação acadêmica, embora essencial, não seria suficiente para me preparar para o mundo profissional. Após ter sido impedido pela minha universidade de realizar um estágio na Dell para o qual fui selecionado, decidi buscar experiência prática. Encontrei essa oportunidade na empresa júnior da faculdade. Lá, pude entender como é o contato direto com o mercado, lidar com clientes reais e trabalhar por hora. Exercendo os papéis de SDR, consultor de engenharia e assessor administrativo e financeiro.</p>
        </div>
        <div className="item year-2022">
          <span className="year">2022</span>
          <h2>Web Dev course in Florida, EUA. Cross.Team company.</h2>
          <p>Durante o quarto semestre da universidade, fui agraciado com uma incrível oportunidade de estudar desenvolvimento web em uma empresa localizada em Miami, nos Estados Unidos. Além de aprimorar significativamente minha compreensão sobre o trabalho com desenvolvimento de software, essa experiência ampliou consideravelmente meu horizonte de conhecimento. Os projetos significativos nos quais participei podem ser encontrados na seção de projetos deste site.</p>
        </div>
        <div className="item year-2023">
          <span className="year">2023</span>
          <h2>Trainee de Web development na Union</h2>
          <p>Após meu retorno, tive a oportunidade de mergulhar na prática do desenvolvimento de software na empresa Union Informativa. Lá, estive envolvido diretamente na programação de um site focado na área da saúde. Este ambiente desafiador me levou a trabalhar com diversas linguagens, frequentemente saindo da minha zona de conforto. Fui obrigado a adotar uma abordagem mais centrada em lógica e estruturação de código, priorizando a compreensão prática sobre teórica das linguagens utilizadas.</p>
        </div>
        <div className="item year-2024">
          <span className="year">2024</span>
          <h2>Estágio Obrigatório UFRGS</h2>
          <p>Meu objetivo para o primeiro semestre de 2024 é me engajar em um estágio que proporcione uma experiência profissional enriquecedora e alinhada com a minha formação em engenharia. Estou determinado a garantir minha graduação em Engenharia de Controle e Automação, e para isso, busco uma oportunidade de estágio na empresa Sensorville. Espero que essa experiência me permita aplicar e aprimorar os conhecimentos adquiridos ao longo da minha jornada acadêmica, além de contribuir significativamente para o meu desenvolvimento profissional.</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Profissional' }, // Retorna o título da página.
  };
}

export default ProfissionalPage; // Exporta o componente ProfissionalPage para ser utilizado em outros lugares da aplicação.
