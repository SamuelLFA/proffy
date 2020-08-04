import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/42184385?s=60&v=4" alt="Samuel" />
                <div>
                    <strong>Samuel</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Teste Teste Teste Teste Teste Teste
                        <br />
                        TesteTesteTesteTeste
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;