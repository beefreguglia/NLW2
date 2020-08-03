import React from 'react'

import { Link } from 'react-router-dom'

//icons
import logoIcon from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps{

    title: string;

}

//Tenho um componente PageHeader, ele é um Funcinal Component do React e as prorpiedades
//são <PageHeaderProps> 

const PageHeader: React.FC<PageHeaderProps> = (props)=> {

    return(
    
        <header className="page-header">

                <div className="top-bar-container">

                    <Link to="">

                        <img src={backIcon} alt="Voltar"/>

                    </Link>

                    <img src={logoIcon} alt="Proffy"/>

                </div>

                <div className="header-content">

                <strong>{props.title}</strong>

                {props.children}
                
                </div>

            </header>

    );

}

export default PageHeader;