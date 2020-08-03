import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {

    return (

        <article className="teacher-item">

            <header>

                <img src="https://avatars3.githubusercontent.com/u/64103507?s=400&u=7fb2f781cf0eff6ef2e91758c08fecd83b48d5b1&v=4" alt="Bernardo Freguglia" />

                <div>

                    <strong>Bernardo Freguglia</strong>
                    <span>Quimica</span>

                </div>

            </header>

            <p>

                Entusiasta das melhores tecnologias de quimica avançada.<br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
                        através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas
                        experiências

                    </p>

            <footer>

                <p>

                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>

                <button type="button" >

                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato

                        </button>

            </footer>

        </article>

    );

}

export default TeacherItem;