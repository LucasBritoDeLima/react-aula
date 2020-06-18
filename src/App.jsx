import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
  <div className="App">
    <h1>Fundamentos do React</h1>

    <div className="Cards">
    <Card titulo="#11 - Mega-Sena" color="#5271B5">
        <Mega qtdeNumero={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#99D2CB">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#42CC32">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06 - Condicional v2" color="#FC2BAC">
        <CondicionalComIf numero={8}></CondicionalComIf>
      </Card>
      <Card titulo="#05 - Condicional v1" color="#123DC5">
        <Condicional numero={11}></Condicional>
      </Card>
      <Card titulo="#04 - Repetição" color="#321AFD">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 - Componente com filho" color="#FFDD44">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com parâmetro" color="#44DFCD">
        <ComParametro
          titulo="Esse é o título"
          subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#624BCA">
        <Primeiro />
      </Card>
    </div>
  </div>

);