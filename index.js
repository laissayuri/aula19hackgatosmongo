// //funçao no formato arrow
// () => {

// }

const express = require('express');
const app = express();

app.get("", (req, res) =>{
    res.send(`
        <link rel="stylesheet" href="/styles.css">
        <h1> Bem Vindo ao Rent-a-Cat</h1>
        <nav>
            <a href="/"> Home </a>
            <a href="/gatos"> Gatos </a>
            <a href="/sobre"> Sobre </a>
        </nav>
    `);
});

app.get("/gatos", (req, res) =>{
    res.send(`
        <link rel="stylesheet" href="/styles.css">
        <h1> Gatos </h1>
        <nav>
            <a href="/"> Home </a>
            <a href="/gatos"> Gatos </a>
            <a href="/sobre"> Sobre </a>
        </nav>
        <ul>
            <li>Siamês</li>
            <li>Persa</li>
        </ul>
    `);
});

app.get("/sobre", (req, res) =>{
    res.send(`
        <link rel="stylesheet" href="/styles.css">
        <h1> Sobre </h1>
        <nav>
            <a href="/"> Home </a>
            <a href="/gatos"> Gatos </a>
            <a href="/sobre"> Sobre </a>
        </nav>
        <p>
            Milk the cow flee in terror at cucumber discovered on floor. Cough hairball on conveniently placed pants spend all night ensuring people don't sleep sleep all day. Asdflkjaertvlkjasntvkjn (sits on keyboard) meow all night having their mate disturbing sleeping humans swat turds around the house for love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) and reward the chosen human with a slow blink rub face on everything, and thug cat. 
        </p>
    `);
});

app.get("/styles.css", (req, res) => {
    let cores = ["blue", "red", "yellow"];
    let numero = Math.floor(Math.random()*3);

    let cor = cores[numero];
    res.send(`
        body{
            color:${cor};
        }
    `)
});


app.listen(3000, () => { // 3000 é porta para acessar o meu computador, que virou um servidor
    console.log("Servidor Inicializado");
});
