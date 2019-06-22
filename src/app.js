'use strict'
import React, { Component } from 'react'
import Search from './components/search'
const App = () => (
    <div className='app'>
        <Search />
        <div className='user-info'>
            <img src='https://avatars2.githubusercontent.com/u/12123871?v=4' />
            <h1 className='username'>
                <a href="https://vvesly.github.io"> Wesley Ferreira </a>
            </h1>

            <ul className='repos-info'>
                <li>- Repositorios: 0</li>
                <li>- Seguidores: 0</li>
                <li>- Repositorios: 0</li>
            </ul>

        </div>

        <div className="actions">
            <button> Ver Repositorios</button>
            <button> Ver favoritos</button>
        </div>

        <div className='repos'>
            <h2>Repositorios:</h2>
            <ul>
                <li > <a href="#"> Nome Repo</a></li>
                <li > <a href="#"> Nome Repo</a></li>
            </ul>
        </div>
        <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
                <li > <a href="#"> Nome Repo</a></li>
                <li > <a href="#"> Nome Repo</a></li>
            </ul>
        </div>
    </div>
)

export default App