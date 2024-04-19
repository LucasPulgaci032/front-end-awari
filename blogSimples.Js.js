const posts = [
    {
       
        title: "Futebol", 
        content: " O futebol é o esporte coletivo mais popular do planeta. Segundo dados da Federação Internacional de Futebol (Fifa), cerca de 270 milhões de pessoas atuam em atividades diretamente relacionadas ao esporte (seja como jogador, seja como árbitro). O futebol moderno surgiu na Inglaterra durante o século XIX, mas relatos históricos apontam que já existiam práticas esportivas parecidas."
    },
    {
        title: "Basquetebol",
        content:"O basquetebol foi criado pelo professor de Educação Física canadense James Naismith (1861-1940), em 1891. Sua invenção foi desenvolvida quando ele publicou as 13 regras para jogar basquetebol, em 1892. Na época, ele trabalhava na Associação Cristã de Moços de Springfield, Massachusetts, nos Estados Unidos."
       
    },
    {
        title: "Voleibol",
        content: "O voleibol foi inventado em 9 de Fevereiro de 1895 por William George Morgan nos Estados Unidos da América. O objetivo de Morgan, que trabalhava na ACM de Holyoke no Massachusetts, era criar um esporte de equipes sem contato físico entre os adversários de modo a minimizar os riscos de lesão. " 
    }
];
    const wind = document.getElementById('posts');

    for (var i = 0; i <posts.length; i++) {

    const postData = posts[i];
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const content = document.createElement('p');

    
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(postData.title);
    title.appendChild(postData.content);

    article.appendChild(title);

    wind.appendChild(article);

  

    }