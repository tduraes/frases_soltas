window.onload = init;
function init(){
    generateQuote()
}

function generateQuote(){
    /*console.log("new quote")*/
    let randomIndex = Math.floor(Math.random() * QUOTEBANK.length);
    let randomQuote = QUOTEBANK[randomIndex];
    
    let twitterLink = "https://twitter.com/intent/tweet?text="
    
    let quoteInApiFormat = randomQuote.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    let authorInApiFormat = randomQuote.author.replace(/ /g, "%20");

    twitterLink += " - " + authorInApiFormat ;
    

    document.getElementById("text").innerText = randomQuote.quote;
    document.getElementById("author").innerText = randomQuote.author;
    document.getElementById("tweet-quote").href = twitterLink;
}

const QUOTEBANK = [
        {author:"José Saramago",
        quote:"Gostar é provavelmente a melhor maneira de ter, ter deve ser a pior maneira de gostar."}, 
       {author:"José Saramago",
        quote:"Não tenhamos pressa, mas não percamos tempo."}, 
       {author:"José Saramago",
        quote:"Dentro de nós há uma coisa que não tem nome, essa coisa é o que somos."}, 
       {author:"José Saramago",
        quote:"Se tens um coração de ferro, bom proveito. O meu, fizeram-no de carne, e sangra todo dia."}, 
       {author:"José Saramago",
        quote:"Todos sabemos que cada dia que nasce é o primeiro para uns e será o último para outros e que, para a maioria, é só um dia mais."}, 
       {author:"José Saramago",
        quote:"De que adianta falar de motivos, às vezes basta um só, às vezes nem juntando todos."}, 
       {author:"José Saramago",
        quote:"Dirão, em som, as coisas que, calados, no silêncio dos olhos confessamos?"}, 
       {author:"José Saramago",
        quote:"O que as vitórias têm de mau é que não são definitivas. O que as derrotas têm de bom é que também não são definitivas."}, 
       {author:"José Saramago",
        quote:"Se podes olhar, vê. Se podes ver, repara."}, 
       {author:"José Saramago",
        quote:"Há esperanças que é loucura ter. Pois eu digo-te que se não fossem essas já eu teria desistido da vida."}, 
       {author:"José Saramago",
        quote:"Para temperamentos nostálgicos, em geral quebradiços, pouco flexíveis, viver sozinho é um duríssimo castigo."}, 
       {author:"José Saramago",
        quote:"Fisicamente, habitamos um espaço, mas, sentimentalmente, somos habitados por uma memória."}, 
       {author:"José Saramago",
        quote:"O espelho e os sonhos são coisas semelhantes, é como a imagem do homem diante de si próprio."}, 
       {author:"José Saramago",
        quote:"O que dá o verdadeiro sentido ao encontro é a busca, e é preciso andar muito para se alcançar o que está perto."}, 
       {author:"José Saramago",
        quote:"Sempre chega a hora em que descobrimos que sabíamos muito mais do que antes julgávamos."}, 
       {author:"José Saramago",
        quote:"Mesmo que a rota da minha vida me conduza a uma estrela, nem por isso fui dispensado de percorrer os caminhos do mundo."}, 
       {author:"José Saramago",
        quote:"Nada é para sempre, dizemos, mas há momentos que parecem ficar suspensos, pairando sobre o fluir inexorável do tempo."}, 
       {author:"José Saramago",
        quote:"Cada dia traz sua alegria e sua pena, e também sua lição proveitosa."}, 
       {author:"José Saramago",
        quote:"As palavras proferidas pelo coração não tem língua que as articule, retém-nas um nó na garganta e só nos olhos é que se podem ler."}, 
       {author:"José Saramago",
        quote:"O difícil não é viver com as pessoas, o difícil é compreendê-las."}, 
       {author:"José Saramago",
        quote:"A única maneira de liquidar o dragão é cortar-lhe a cabeça, aparar-lhe as unhas não serve de nada."}, 
       {author:"José Saramago",
        quote:"Não sou pessimista. O mundo é que é péssimo."}, 
       {author:"José Saramago",
        quote:"Tentei não fazer nada na vida que envergonhasse a criança que fui."}, 
       {author:"José Saramago",
        quote:"Se eu estiver a ser sincero hoje, que importa que tenha de arrepender-me amanhã?"}, 
       {author:"José Saramago",
        quote:"Se não disseres nada compreenderei melhor [...], há ocasiões em que as palavras não servem de nada."}, 
       {author:"José Saramago",
        quote:"Aprendi a não tentar convencer ninguém. O trabalho de convencer é uma falta de respeito, é uma tentativa de colonização do outro."}, 
       {author:"José Saramago",
        quote:"A vida é breve, mas cabe nela muito mais do que somos capazes de viver."}, 
       {author:"José Saramago",
        quote:"Arranca metade do meu corpo, do meu coração, dos meus sonhos. Tira um pedaço de mim, qualquer coisa que me desfaça. Me recria, porque eu não suporto mais pertencer a tudo, mas não caber em lugar algum."}, 
       {author:"José Saramago",
        quote:"O problema não é um Deus que não existe, mas a religião que O proclama!"}, 
       {author:"José Saramago",
        quote:"Nunca se pode saber de antemão de que são capazes as pessoas, é preciso esperar, dar tempo ao tempo, o tempo é que manda, o tempo é o parceiro que está a jogar do outro lado da mesa e tem na mão todas as cartas do baralho, a nós compete-nos inventar os encartes com a vida..."}, 
       {author:"José Saramago",
        quote:"Ainda está por nascer o primeiro ser humano desprovido daquela segunda pele a que chamamos de egoísmo, bem mais dura que a outra, que por qualquer coisa sangra."}, 
       {author:"José Saramago",
        quote:"Costuma-se dizer que as paredes têm ouvidos, imagine-se o tamanho que terão as orelhas das estrelas."}, 
       {author:"José Saramago",
        quote:"O certo e o errado são apenas modos diferentes de entender nossa relação com os outros."}, 
       {author:"José Saramago",
        quote:"O silêncio ainda é o melhor aplauso."}, 
       {author:"José Saramago",
        quote:"O costume de cair endurece o corpo, ter chegado ao chão, só por si, já é um alívio."}, 
       {author:"José Saramago",
        quote:"Não nos vemos se não nos saímos de nós."}, 
       {author:"José Saramago",
        quote:"Damos voltas e voltas, mas, na realidade, só há duas coisas: ou escolhes a vida ou afastas-te dela."}, 
       {author:"José Saramago",
        quote:"Não é a pornografia que é obscena, é a fome que é obscena."}, 
       {author:"José Saramago",
        quote:"Os únicos interessados em mudar o mundo são os pessimistas, porque os otimistas estão encantados com o que há..."}, 
       {author:"José Saramago",
        quote:"Não se percebeu ainda que o instinto serve melhor aos animais do que a razão serve ao homem."}, 
       {author:"José Saramago",
        quote:"Em rigor, não tomamos decisões, são as decisões que nos tomam a nós."}, 
       {author:"José Saramago",
        quote:"O Bem e o Mal não existem em si mesmos, cada um é somente a ausência do outro."}, 
       {author:"José Saramago",
        quote:"Toda a obra literária leva uma pessoa dentro, que é o autor. O autor é um pequeno mundo entre outros pequenos mundos"}, 
       {author:"José Saramago",
        quote:"Nós somos manipulados, enganados, desde que nascemos!"}, 
       {author:"José Saramago",
        quote:"Nunca terá sido perdido o dia em que fomos contemplados, ao menos, com um bom conselho."}, 
       {author:"José Saramago",
        quote:"Não se pode trabalhar num esgoto sem cheirar a esgoto."}, 
       {author:"José Saramago",
        quote:"A esperança é como o sal, não alimenta, mas dá sabor ao pão."}, 
       {author:"José Saramago",
        quote:"Quando a esquerda chega ao poder, não usa as razões pelas quais chegou. A esquerda deixa de o ser muitas vezes quando chega ao poder e isso é dramático."}, 
       {author:"José Saramago",
        quote:"A palavra deixou de ter conteúdo e de ter qualquer coisa dentro, é pronunciada com uma leviandade total."}, 
       {author:"José Saramago",
        quote:"Costuma-se dizer, dêmos tempo ao tempo, mas aquilo que sempre nos esquecemos de perguntar é se haverá tempo para dar."}, 
       {author:"José Saramago",
        quote:"É desta massa que nós somos feitos: metade de indiferença, outra metade de maldade."}, 
       {author:"José Saramago",
        quote:"Nunca esperei nada da vida. Por isso tenho tudo."}, 
       {author:"José Saramago",
        quote:"Quando a igreja inventou o pecado, inventou um instrumento de controle, não tanto das almas, porque à igreja não importam as almas, mas dos corpos."}, 
       {author:"José Saramago",
        quote:"Aprendi que o sentimento do amor não é mais nem menos forte conforme as idades, o amor é uma possibilidade de uma vida inteira, e se acontece, há que recebê-lo."}, 
       {author:"José Saramago",
        quote:"O bem e o mal não existem em si mesmos, cada um deles é somente a ausência do outro.”"}, 
       {author:"José Saramago",
        quote:"Olhar, ver e reparar são maneiras distintas de usar o órgão da vista. Só o reparar, no entanto, pode chegar a ser visão plena."}, 
       {author:"José Saramago",
        quote:"...É preciso voltar aos passos que foram dados, para repetir e para traçar caminhos novos ao lado deles. É preciso recomeçar a viagem. Sempre."}, 
       {author:"José Saramago",
        quote:"Os sismógrafos não escolhem os terremotos, reagem aos que vão ocorrendo, e o blog é isso, um sismógrafo."}, 
       {author:"José Saramago",
        quote:"Por causa e em nome de Deus é que se tem permitido e justificado tudo, principalmente o mais horrendo e cruel."}, 
       {author:"José Saramago",
        quote:"Não posso crer num deus que foi capaz de criar o ser humano."}, 
       {author:"José Saramago",
        quote:"A cabeça dos seres humanos nem sempre está completamente de acordo com o mundo em que vivem, há pessoas que tem dificuldade em ajustar-se à realidade dos factos, no fundo não passam de espíritos débeis e confusos que usam as palavras, às vezes habilmente, para justificar a sua covardia."}, 
       {author:"José Saramago",
        quote:"Há coisas que nunca se poderão explicar por palavras."}, 
       {author:"José Saramago",
        quote:"A lucidez é um luxo que nem todos se podem permitir."}, 
       {author:"José Saramago",
        quote:"Nem a juventude sabe o que pode, nem a velhice pode o que sabe."}, 
       {author:"José Saramago",
        quote:"Os politicos são a mentira, legitimada pela vontade do povo!"}, 
       {author:"José Saramago",
        quote:"O sofrimento em silêncio causa uma doença silenciosa: A Insanidade Mental!"}, 
       {author:"José Saramago",
        quote:"Ser-se homem não deveria significar nunca impedimento a proceder como cavalheiro."}, 
       {author:"José Saramago",
        quote:"A vida é uma aprendizagem diária. Afasto-me do caos e sigo um simples pensamento: Quanto mais simples, melhor!"}, 
       {author:"José Saramago",
        quote:"É preciso variar, se não tivermos cuidado a vida torna-se rapidamente previsível, monótona, uma seca."}, 
       {author:"José Saramago",
        quote:"É preciso sair da ilha para ver a ilha. Não nos vemos se não saímos de nós."}, 
       {author:"José Saramago",
        quote:"Não sou um ateu total, todos os dias tento encontrar um sinal de Deus, mas infelizmente não o encontro."}, 
       {author:"José Saramago",
        quote:"Das habilidades que o mundo sabe, essa ainda é a que faz melhor: dar voltas."}, 
       {author:"José Saramago",
        quote:"Existem duas superpotências no Mundo, uma é os E.U.A, outra, és tu..."}, 
       {author:"José Saramago",
        quote:"Saberemos cada vez menos o que é um ser humano"}, 
       {author:"José Saramago",
        quote:"A alegoria chega quando descrever a realidade já não nos serve"}, 
       {author:"José Saramago",
        quote:"Quero encontrar a ilha desconhecida, quero saber quem sou quando nela estiver."}, 
       {author:"José Saramago",
        quote:"Num matrimônio há três pessoas: o Homem, a Mulher e a terceira pessoa formada pelos dois."}, 
       {author:"José Saramago",
        quote:"É ainda possível chorar sobre as páginas de um livro, mas não se pode derramar lágrimas sobre um disco rígido."}, 
       {author:"José Saramago",
        quote:"Estamos usando nosso cérebro de maneira excessivamente disciplinada, pensando só o que é preciso pensar, o que se nos permite pensar."}, 
       {author:"José Saramago",
        quote:"As pessoas se transformam em máquinas de fazer de dinheiro ou que tentam fazer dinheiro."}, 
       {author:"José Saramago",
        quote:"A propósito, não resistiremos a recordar que a morte, por si mesma, sozinha, sem qualquer ajuda externa, sempre matou muito menos que o homem."}, 
       {author:"José Saramago",
        quote:"Somos todos escritores, só que alguns escrevem e outros não."}, 
       {author:"José Saramago",
        quote:"É assim a vida, vai dando com uma mão até que chega o dia em que tira tudo com a outra."}, 
       {author:"José Saramago",
        quote:"A leitura é, provavelmente, uma outra maneira de estar em um lugar."}, 
       {author:"José Saramago",
        quote:"Quero estar onde minha sombra estiver, se lá é que estiverem os teus olhos."},
        {author:"Fernando Pessoa",
        quote:"Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?"},
        {author:"Fernando Pessoa",
        quote:"Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido."},
        {author:"Fernando Pessoa",
        quote:"Tudo vale a pena quando a alma não é pequena."},
        {author:"Fernando Pessoa",
        quote:"Tenho em mim todos os sonhos do mundo."},
        {author:"Fernando Pessoa",
        quote:"Tenho pensamentos que, se pudesse revelá-los e fazê-los viver, acrescentariam nova luminosidade às estrelas, nova beleza ao mundo e maior amor ao coração dos homens."},
        {author:"Fernando Pessoa",
        quote:"A liberdade é a possibilidade do isolamento. Se te é impossível viver só, nasceste escravo."},
        {author:"Fernando Pessoa",
        quote:"Para viajar basta existir."},
        {author:"Fernando Pessoa",
        quote:"O próprio viver é morrer, porque não temos um dia a mais na nossa vida que não tenhamos, nisso, um dia a menos nela."},
        {author:"Fernando Pessoa",
        quote:"Adoramos a perfeição, porque não a podemos ter; repugna-la-íamos se a tivéssemos. O perfeito é o desumano porque o humano é imperfeito."},
        {author:"Fernando Pessoa",
        quote:"O meu passado é tudo quanto não consegui ser. Nem as sensações de momentos idos me são saudosas: o que se sente exige o momento; passado este, há um virar de página e a história continua, mas não o texto."},
        {author:"Fernando Pessoa",
        quote:"Querer não é poder. Quem pôde, quis antes de poder só depois de poder. Quem quer nunca há-de poder, porque se perde em querer."},
        {author:"Fernando Pessoa",
        quote:"Matar o sonho é matarmo-nos. É mutilar a nossa alma. O sonho é o que temos de realmente nosso, de impenetravelmente e inexpugnavelmente nosso."},
        {author:"Fernando Pessoa",
        quote:"Sentir é criar. Sentir é pensar sem ideias, e por isso sentir é compreender, visto que o Universo não tem ideias."},
        {author:"Fernando Pessoa",
        quote:"Quero para mim o espírito desta frase, transformada a forma para a casar com o que eu sou: Viver não é necessário; o que é necessário é criar."},
        {author:"Fernando Pessoa",
        quote:"Precisar de dominar os outros é precisar dos outros. O chefe é um dependente."},
        {author:"Fernando Pessoa",
        quote:"Toda a poesia - e a canção é uma poesia ajudada - reflete o que a alma não tem. Por isso a canção dos povos tristes é alegre e a canção dos povos alegres é triste."},
        {author:"Fernando Pessoa",
        quote:"Amar é cansar-se de estar só: é uma covardia portanto, e uma traição a nós próprios (importa soberanamente que não amemos)."},
        {author:"Fernando Pessoa",
        quote:"A arte é a autoexpressão lutando para ser absoluta."},
        {author:"Fernando Pessoa",
        quote:"Eu não escrevo em português. Escrevo eu mesmo."},
        {author:"Fernando Pessoa",
        quote:"Considerar a nossa maior angústia como um incidente sem importância, não só na vida do universo mas da nossa mesma alma, é o princípio da sabedoria."},
        {author:"Fernando Pessoa",
        quote:"Haja ou não deuses, deles somos servos."},
        {author:"Fernando Pessoa",
        quote:"A renúncia é a libertação. Não querer é poder."},
        {author:"Fernando Pessoa",
        quote:"Nunca sabemos quando somos sinceros. Talvez nunca o sejamos. E mesmo que sejamos sinceros hoje, amanhã podemos sê-lo por coisa contrária."},
        {author:"Fernando Pessoa",
        quote:"Sinto-me nascido a cada momento; Para a eterna novidade do Mundo..."},
        {author:"Fernando Pessoa",
        quote:"O mundo é de quem não sente. A condição essencial para se ser um homem prático é a ausência de sensibilidade."},
        {author:"Fernando Pessoa",
        quote:"Para realizar um sonho é preciso esquecê-lo, distrair dele a atenção. Por isso realizar é não realizar."},
        {author:"Fernando Pessoa",
        quote:"De sonhar ninguém se cansa, porque sonhar é esquecer, e esquecer não pesa e é um sono sem sonhos em que estamos despertos."},
        {author:"Fernando Pessoa",
        quote:"O gênio, o crime e a loucura, provêm, por igual, de uma anormalidade; representam, de diferentes maneiras, uma inadaptabilidade ao meio."},
        {author:"Fernando Pessoa",
        quote:"Tudo que existe existe talvez porque outra coisa existe. Nada é, tudo coexiste: talvez assim seja certo."},
        {author:"Fernando Pessoa",
        quote:"Ter opiniões é estar vendido a si mesmo. Não ter opiniões é existir. Ter todas as opiniões é ser poeta."},
        {author:"Fernando Pessoa",
        quote:"O amor é um sono que chega para o pouco ser que se é"},
        {author:"Fernando Pessoa",
        quote:"Ver e ouvir são as únicas coisas nobres que a vida contém. Os outros sentidos são plebeus e carnais. A única aristocracia é nunca tocar."},
        {author:"Fernando Pessoa",
        quote:"Tudo que se passa no onde vivemos é em nós que se passa. Tudo que cessa no que vemos é em nós que cessa."},
        {author:"Fernando Pessoa",
        quote:"A ciência descreve as coisas como são; a arte, como são sentidas, como se sente que são."},
        {author:"Fernando Pessoa",
        quote:"É preciso ser um realista para descobrir a realidade. É preciso ser um romântico para criá-la."},
        {author:"Fernando Pessoa",
        quote:"A bondade é a delicadeza das almas grosseiras."},
        {author:"Fernando Pessoa",
        quote:"O fim da arte inferior é agradar, o fim da arte média é elevar, o fim da arte superior é libertar."},
        {author:"Fernando Pessoa",
        quote:"Todo o homem de ação é essencialmente animado e otimista porque quem não sente é feliz."},
        {author:"Fernando Pessoa",
        quote:"Quanto mais diferente de mim alguém é, mais real me parece, porque menos depende da minha subjetividade."},
        {author:"Fernando Pessoa",
        quote:"As figuras imaginárias têm mais relevo e verdade que as reais."},
        {author:"Fernando Pessoa",
        quote:"Conhece alguém as fronteiras à sua alma, para que possa dizer - eu sou eu?"},
        {author:"Fernando Pessoa",
        quote:"A única maneira de teres sensações novas é construíres-te uma alma nova."},
        {author:"Fernando Pessoa",
        quote:"O dinheiro é belo, porque é a libertação."},
        {author:"Fernando Pessoa",
        quote:"Há tanta suavidade em nada dizer e tudo entender..."},
        {author:"Fernando Pessoa",
        quote:"Nenhum livro para crianças deve ser escrito para crianças."},
        {author:"Fernando Pessoa",
        quote:"Saber interpor-se constantemente entre si próprio e as coisas é o mais alto grau de sabedoria e prudência."},
        {author:"Fernando Pessoa",
        quote:"Podemos morrer se apenas amámos."},
        {author:"Fernando Pessoa",
        quote:"A fé é o instinto da ação..."},
        {author:"Fernando Pessoa",
        quote:"Deus é o existirmos e isto não ser tudo."},
        {author:"Fernando Pessoa",
        quote:"A vida prejudica a expressão da vida. Se eu vivesse um grande amor nunca o poderia contar."},
        {author:"Fernando Pessoa",
        quote:"O mais alto de nós não é mais que um conhecedor mais próximo do oco e do incerto de tudo."},
        {author:"Fernando Pessoa",
        quote:"Pode ser que nos guie uma ilusão; a consciência, porém, é que nos não guia."},
        {author:"Fernando Pessoa",
        quote:"Falar é ter demasiada consideração pelos outros. Pela boca morrem o peixe e Oscar Wilde."},
        {author:"Fernando Pessoa",
        quote:"As nações são todas mistérios. Cada uma é todo o mundo a sós."},
        {author:"Fernando Pessoa",
        quote:"A felicidade está fora da felicidade."},
        {author:"Fernando Pessoa",
        quote:"Exteriorizar impressões é mais persuadirmo-nos de que as temos do que termo-las."},
        {author:"Fernando Pessoa",
        quote:"A celebridade é uma contradição. Parecendo que dá valor e força às criaturas, apenas as desvaloriza e enfraquece."},
        {
            author: "Camilo Castelo Branco",
            quote: "O amor é a primeira condição da felicidade do homem."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O amor só vive pelo sofrimento e cessa com a felicidade; porque o amor feliz é a perfeição dos mais belos sonhos, e tudo que é perfeito, ou aperfeiçoado, toca o seu fim."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O ciúme vê com lentes, que fazem grandes as coisas pequenas, gigantes os anões, verdades as suspeitas."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O silêncio é uma confissão."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O amor é uma luz que não deixa escurecer a vida."
        },
        {
            author: "Camilo Castelo Branco",
            quote:"Não há amor que resista a vinte e quatro horas de filosofia."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A saudade pelos vivos é dor suave."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Quem não conhece a mulher amiga, põe a mão sobre o coração e não encontra aí a flor, que se rega nas lágrimas, quer de alegria quer de recíproca tristeza."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "É falso o amor que leva o homem à indignidade."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Em coisas insignificantes é que um verdadeiro amigo se avalia."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Reparar, quando o coração repara mais que o juízo, é amar."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A felicidade é parecida com a liberdade, porque toda a gente fala nela e ninguém a goza."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Todas as paixões são vencíveis."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "As maiores desgraças são aquelas que a si próprias não podem perdoar."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "As ações de cada pessoa são boas ou más consoante a maneira como as outras as comentam."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Atrás da poesia do amor vem a prosa do casamento."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Os dias prósperos não vêm por acaso. São granjeados, como as searas, com muita fadiga e com muitos intervalos de desalento."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Não há metade do coração. Ou todo o amor ou toda a indiferença; quando não, é uma insustentável impostura, chamada estima."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O homem que ama é um tolo sublime."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A beleza é o poder moderador dos delitos do coração."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A escala dos sofrimentos humanos é infinita."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A paciência é a riqueza dos infelizes."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Os raciocínios do amor-próprio não gozam do crédito das melhores consequências."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A caridade é a felicidade dos que dão e dos que recebem."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A morte é amparo."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Viver é ansiar a felicidade possível e a impossível."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O amor nascente é tão melindroso, pueril e tímido, que receia desagradar até com o pensamento ao ídolo da sua concentrada adoração."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O amor, que não perde nem desvaira, esse é que é o amor."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Daqui a 50 anos quem vai estar mais bonito o caráter ou a aparência?"
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A verdade dói, mas duas verdades aproxima a felicidade."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A vida nos ensina a entendê-la, pena que o nosso tempo não corresponde a necessidade do nosso ego"
        },
        {
            author: "Camilo Castelo Branco",
            quote: "As injustiças, se alanceiam as vítimas, também ferem quem as faz."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A verdadeira lei do progresso moral é a caridade."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A civilização é a razão da igualdade."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A história, a indefectível história, vai a reboque das ideias."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Há horas na vida em que a mais leve contrariedade toma as proporções de uma catástrofe."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O homem é um composto de grandeza e pequenez, uma dualidade de gigante e de pigmeu."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Ninguém é pobre quando ama."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O melhor amigo é o dinheiro. Conselhos, os melhores é o dinheiro que os dá."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "O extremo de um grande prazer é um desgosto."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A mulher devia ser velha quando não sente o coração... quando já não ama."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "As quedas de algumas mulheres justificam-nas alguns maridos."
        },
        {
            author: "Camilo Castelo Branco",
            quote: 	"Quando a eloquência, inspirada do íntimo da alma, regurgita em jorros dos lábios de uma amante, é certo o triunfo."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Amigo é uma palavra profanada pelo uso e barateada a cada hora, como a palavra de honra, que por aí anda desvirtualizando a honra."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Entre namorar e amar, está o reflectir."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Amigos verdadeiros são os que nos acodem inopinados com valedora mão nas tormentas desfeitas."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "A maldade é congénere do homem."
        },
        {
            author: "Camilo Castelo Branco",
            quote:"A morte emenda todos os atos da vida."
        },
        {
            author: "Camilo Castelo Branco",
            quote: "Depois do céu, quem mais pasmosos milagres faz é o amor."
        },
        {
            author: "Florbela Espanca",
            quote: "Quem disser que pode amar alguém durante a vida inteira é porque mente."
        },
        {
            author: "Florbela Espanca",
            quote: "É pensando nos homens que eu perdoo aos tigres as garras que dilaceram."
        },
        {
            author: "Florbela Espanca",
            quote: "Se penetrássemos o sentido da vida seríamos menos miseráveis."
        },
        {
            author: "Florbela Espanca",
            quote: "Eu não sou boa nem quero sê-lo, contento-me em desprezar quase todos, odiar alguns, estimar raros e amar um."
        },
        {
            author: "Florbela Espanca",
            quote: "Sou talvez a visão que alguém sonhou; Alguém que veio ao mundo prá me ver; E que nunca na vida me encontrou"
        },
        {
            author: "Florbela Espanca",
            quote: "Sou uma céptica que crê em tudo, uma desiludida cheia de ilusões, uma revoltada que aceita, sorridente, todo o mal da vida, uma indiferente a transbordar de ternura."
        },
        {
            author: "Florbela Espanca",
            quote: "Não és sequer a razão de meu viver, pois que tu és já toda a minha vida."
        },
        {
            author: "Florbela Espanca",
            quote: "Estou cansada, cada vez mais incompreendida e insatisfeita comigo, com a vida e com os outros. Diz-me, porque não nasci igual aos outros, sem dúvidas, sem desejos de impossível? E é isso que me traz sempre desvairada, incompatível com a vida que toda a gente vive."
        },
        {
            author: "Florbela Espanca",
            quote: "Tão pobres somos que as mesmas palavras nos servem para exprimir a mentira e a verdade"
        },
        {
            author: "Florbela Espanca",
            quote: "Amo-te tanto. E nunca te beijei... E nesse beijo, amor, que eu não te dei, guardo os versos mais lindos que te fiz."
        },
        {
            author: "Florbela Espanca",
            quote: "Eu quero amar, amar perdidamente. Amar só por amar."
        },
        {
            author: "Florbela Espanca",
            quote: "Trago no olhar visões extraordinárias, de coisas que abracei de olhos fechados..."
        },
        {
            author: "Florbela Espanca",
            quote: "Gosto da noite imensa, triste,preta,como esta estranha borboleta que eu sinto sempre a voltejar em mim!..."
        },
        {
            author: "Florbela Espanca",
            quote: "Quem me dera encontrar o verso puro, O verso altivo e forte, estranho e duro, Que dissesse a chorar isto que sinto!"
        },
        {
            author: "Florbela Espanca",
            quote: "No gelo da indiferença ocultam-se as paixões."
        },
        {
            author: "Florbela Espanca",
            quote: "E se um dia hei de ser pó, cinza e nada, que seja minha noite uma alvorada, que eu saiba me perder para me encontrar..."
        },
        {
            author: "Florbela Espanca",
            quote: "Longe de ti são ermos os caminhos."
        },
        {
            author: "Florbela Espanca",
            quote: "Perdoo facilmente as ofensas, mas por indiferença e desdém: nada que me vem dos outros me toca profundamente."
        },
        {
            author: "Florbela Espanca",
            quote: "Quantas vezes? Amor, já te esqueci, para mais doidamente me lembrar, mais doidamente me lembrar de ti."
        },
        {
            author: "Miguel Torga",
            quote: "Recomeça... se puderes, sem angústia e sem pressa e os passos que deres, nesse caminho duro do futuro, dá-os em liberdade, enquanto não alcances não descanses, de nenhum fruto queiras só metade."
        },
        {
            author: "Miguel Torga",
            quote: "Só havia três coisas sagradas na vida: a infância, o amor e a doença. Tudo se podia atraiçoar no mundo, menos uma criança, o ser que nos ama e um enfermo. Em todos esses casos a pessoa está indefesa."
        },
        {
            author: "Miguel Torga",
            quote: 	"Mais um ano. Mais um palmo a separar-me dos outros, já que a vida não passa de um progressivo distanciamento de tudo e de todos, que a morte remata."
        },
        {
            author: "Miguel Torga",
            quote: "A vida afectiva é a única que vale a pena. A outra apenas serve para organizar na consciência o processo da inutilidade de tudo."
        },
        {
            author: "Miguel Torga",
            quote: "Não perturbes a paz que me foi dada. Ouvir de novo a tua voz seria matar a sede com água salgada."
        },
        {
            author: "Miguel Torga",
            quote: "Os homens só me deram tristezas. Ou eu nunca os entendi, ou eles nunca me entenderam."
        },
        {
            author: "Miguel Torga",
            quote: "Mas a vida é uma coisa imensa, que não cabe numa teoria, num poema, num dogma, nem mesmo no desespero inteiro dum homem."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "A eternidade é saber que existes, abrir os olhos enquanto dormes, ou então adormecer enquanto me olhas, e depois viver para sempre."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "O infeliz fecha os olhos para morrer; o feliz fecha os olhos para viver. Ninguém vive de olhos abertos."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "E que a distância não impeça o abraço..."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "É por causa dos que vivem na Lua - só por eles - que vale a pena viver na Terra."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "A saudade é feita de aprendizagem, de ruídos que servem para não ouvir."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "As pessoas que eu amo não são as melhores pessoas do mundo. Mas são pessoas. Basta-me isso para as poder amar."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "O grande artista é só aquele que está sempre aquém daquilo que ama."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Qualquer um sabe mexer-se; mas são raros o que sabem mexer-se no sentido certo."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Os loucos vêem no impossível todos os motivos para continuar enquanto os outros vêem todos os motivos para desistir."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "De tudo o que amo é você que mais me apaixona."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "O amor nasce para todos, e é bom que você saiba disso."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Os amores resistem a tudo menos à falta de tentativa. Tens de te esfalfar todo para conseguir amar. Tens de rastejar e voar com a mesma vontade, com a mesma euforia."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Os amores acabam quando alguém se esquece de que os amores não acabam."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Só está sozinho aquele que não procura ninguém."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "A criança sabe pouco e vive muito, o adulto sabe muito e vive pouco."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Só quem ama corre o risco de perder; os outros correm apenas o risco de continuar perdidos."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "Há uma pessoa a mais num casal quando existe o orgulho a separá-lo."
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "⁠Há um menos a mais em cada mais ou menos que se vive. "
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "⁠A morte serve para valorizar a vida - e para acabar com ela também. "
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "⁠O optimismo não é ver o copo meio cheio; é estar constantemente a encher o copo. "
        },
        {
            author: "Pedro Chagas Freitas",
            quote: "⁠ É claro que o mundo às vezes é um cabrão; é claro que a vida às vezes é uma cabra. Leva-nos pessoas, leva-nos coisas, leva-nos sonhos. Às vezes leva-nos mesmo tudo (ou o que julgávamos ser tudo). Mas viver é suportar todos os cabrões e todas as cabras que a vida tem para oferecer. "
        }
    
        
];
