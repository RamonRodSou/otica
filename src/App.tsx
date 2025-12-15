import React from 'react';
import './App.css';
import Cabecalho from './component/cabecalho';
import Hero from './component/hero';
import Produtos from './component/produtos';
import Duvidas from './component/duvidas';
import Formulario from './component/formulario';
import Solucao from './component/solucao';
import Vantagem from './component/vantagem';
import Feedbacks from './component/feedbacks';
import Rodape from './component/rodape';
import Lojas from './component/lojas';
import BotaoUp from './component/botaoUp';

function App() {
    return (
        <div className="App">
        <Cabecalho/>
        <main>
            <Hero/>
            <Lojas/>
            <Produtos/>
            <Solucao/>
            <Vantagem/>
            <Feedbacks/>
            <Formulario/>
            <Duvidas/>
            <BotaoUp/>
        </main>
        <footer>
            <Rodape/>
        </footer>
        </div>
    );
}

export default App;
