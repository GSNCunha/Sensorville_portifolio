import React from 'react';

const PessoalPage = () => {
  return (
    <>
      <style jsx>{`
        .timeline {
          font-family: Arial, sans-serif;
        }
        .item {
          margin-bottom: 20px;
          border-left: 4px solid;
          padding-left: 10px;
          max-width: 50%; /* Define o limite de largura para metade da página */
        }
        .year {
          font-weight: bold;
          font-size: 30px; /* Tamanho maior para as datas */
          margin-right: 10px;
        }
        .year-2020 {
          color: #61DAFB; /* Cor para o ano de 2020 */
          border-color: #61DAFB; /* Cor da borda para o ano de 2020 */
        }
        .year-2021 {
          color: #E34F26; /* Cor para o ano de 2021 */
          border-color: #E34F26; /* Cor da borda para o ano de 2021 */
        }
        .year-2022 {
          color: #1572B6; /* Cor para o ano de 2022 */
          border-color: #1572B6; /* Cor da borda para o ano de 2022 */
        }
        .esportes {
          color: #F7DF1E; /* Cor para o ano de 2023 */
          border-color: #F7DF1E; /* Cor da borda para o ano de 2023 */
        }
  
        p {
          color: white; /* Cor do texto branco */
        }
      `}</style>
      <div className="timeline">
        <div className="item year-2020">
          <span className="year">2013-2019</span>
          <h2>Formação escolar Sinodal</h2>
          <p>Durante o ensino médio, minha paixão pelo desenvolvimento de projetos era evidente, alimentando meu sonho de lançar uma startup focada em soluções de engenharia. Esses sonhos e ambições me levaram a dedicar meu tempo aos cursos de robótica e empreendedorismo, que se tornaram uma prioridade em minha vida, ocupando todas as minhas horas vagas, incluindo períodos de férias. Essa jornada foi incrivelmente gratificante, proporcionando um desenvolvimento pessoal significativo e permitindo que eu conhecesse pessoas inspiradoras que compartilhavam meu entusiasmo. Guardo com carinho todas as lições aprendidas e as conexões feitas ao longo desse período.</p>
        </div>
        <div className="item year-2022">
          <span className="year">2020</span>
          <h2>Novos Hobbies de Impressão 3D</h2>
          <p>Após concluir os cursos de empreendedorismo e robótica no colégio, senti a necessidade de preencher meu tempo com algo igualmente estimulante. Em 2020, embarquei no hobby da impressão 3D. Testemunhar a transformação de um modelo virtual em uma peça física é verdadeiramente mágico. No entanto, esse hobby também traz desafios, muitas vezes passando mais tempo resolvendo problemas em uma impressora 3D do que efetivamente imprimindo. Apesar disso, essa jornada tem sido extremamente envolvente e gratificante, proporcionando uma oportunidade única de explorar minha criatividade e habilidades técnicas.</p>
        </div>
        <div className="item year-2021">
          <span className="year">2021</span>
          <h2>Empresa Sinc Jr</h2>
          <p>Após sair do curso de empreendedorismo e continuar sentindo falta de atividades estimulantes, encontrei uma oportunidade empolgante no segundo semestre da faculdade: engajar-me na empresa júnior do nosso campus. Nesse ambiente dinâmico, pude desenvolver habilidades valiosas de comunicação com os clientes e adquirir experiência na parte burocrática, atuando como assessor administrativo e financeiro. Meu principal objetivo era absorver o máximo de conhecimento possível para, quem sabe no futuro, embarcar em minha própria jornada empreendedora.</p>
        </div>
        <div className="item year-2022">
          <span className="year">2022</span>
          <h2>Web Dev course in Florida, EUA. Cross.Team company.</h2>
          <p>A oportunidade de estudar em outro país, como Miami, verdadeiramente expandiu minha visão além das minhas fronteiras. Mesmo trabalhando no Brasil, sou consciente de que o mundo é vasto e repleto de oportunidades esperando para serem descobertas em todos os cantos. Essa experiência foi um lembrete constante da importância de permanecer aberto a novas perspectivas e de estar sempre pronto para explorar o desconhecido. </p>
        </div>
        <div className="item esportes">
          <span className="year">Esportes</span>
          <h2>Minha história com Tênis de Mesa e Basquete</h2>
          <p>Sempre mantive uma forte ligação com os esportes, especialmente o basquete e o tênis de mesa. Durante meus anos escolares, participei ativamente do time de basquete, não apenas como uma forma de desestressar, mas também como uma paixão genuína. Passava inúmeras horas praticando o esporte, e sinto saudades dos dias em que podia jogar mais regularmente. Quanto ao tênis de mesa, minha afinidade começou como um interesse compartilhado com meu pai. Hoje, minha habilidade no esporte está bem desenvolvida, e tenho a honra de representar o time de tênis de mesa da faculdade.</p>
        </div>
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
