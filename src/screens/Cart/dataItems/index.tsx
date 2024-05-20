import ListItems from "../ListItems";
import ImageItem from "./imageItem";

function geraId(): number{
    return Math.floor(Math.random() * 100 + 999)
}


export const data = [
    {
        id: 1,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2042.jpg?w=740&t=st=1716237317~exp=1716237917~hmac=ed629b7ee25970c6f29d114de2bc0456ea680885ba376c38762293c9e20f5b64"/>
    },
    {
        id: 2,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2143.jpg?w=740&t=st=1716237308~exp=1716237908~hmac=5521c777e3e28907a4efaf3cb0011ac07979b8f4f09dc3a68b86ada221084757"/>
    },
    {
        id: 3,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 4,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-de-vicio-em-internet-substituicao-na-vida-real-desordem-on-line-viva-vicio-em-web-comportamento-viciante-digital-uso-excessivo-de-internet-metafora-abstrata-de-midia-social_335657-2266.jpg?w=740&t=st=1716243428~exp=1716244028~hmac=feef9f55e631eca945c6e8f25eae83409c324dd7190646e7f1092edbed051696"/>
    },
    {
        id: 5,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-premium/icone-de-www_23-2147929408.jpg?w=740"/>
    },
    {
        id: 6,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-de-compartilhar-icone_53876-5842.jpg?w=740&t=st=1716243433~exp=1716244033~hmac=749100f869ff8825cb8160361c4c954515d5007205d5821270583e02a503608d"/>
    },
    {
        id: 7,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-premium/janela-do-navegador-com-icone-de-doodle-de-contorno-desenhado-de-mao-de-texto-http-hiperlink-conceito-de-link-de-site-ilustracao-de-desenho-vetorial-para-impressao-web-mobile-e-infograficos-em-fundo-branco_107173-18811.jpg?w=740"/>
    },
    {
        id: 8,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/link-building-concept_23-2147998008.jpg?w=740&t=st=1716243440~exp=1716244040~hmac=d70edcb12973fc886c67e9e1d7078442be93c9a779d5829c54b15825ae46147c"/>
    },
    {
        id: 9,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-www_114360-3247.jpg?w=740&t=st=1716243441~exp=1716244041~hmac=0fff1d24de440fdaace6e3bd054786ab027ebf4e9c73ebc4418f968d93fa1252"/>
    },
    {
        id: 10,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-dia-da-internet-plana_23-2148912134.jpg?w=740&t=st=1716243442~exp=1716244042~hmac=baef34b9d01fb6d635f94ee8dec63b2fa9121ca1e06280f5b2e6424d27cec290"/>
    },
    {
        id: 11,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-conectividade-moderna_23-2147934056.jpg?w=740&t=st=1716243446~exp=1716244046~hmac=e900ec89e02ed007c554879e9c2e71a2430c749588d56d84a407b76a5256e5e8"/>
    },
    {
        id: 12,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 13,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 14,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 15,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 16,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 17,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 18,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 19,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
    {
        id: 20,
        product: <ListItems amount={0}/>,
        imgProduct: <ImageItem url="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-www_114360-2073.jpg?w=740&t=st=1716243241~exp=1716243841~hmac=a0dc94b0822939a02f19657dc0cd9e0d8b171ea7eadc965f68af3612426febbe"/>
    },
]

