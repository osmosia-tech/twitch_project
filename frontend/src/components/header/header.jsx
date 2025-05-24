import React from 'react';
import logo from './logotwitch.svg'
import recherche from './rechercher.svg'
import menu from './menu.svg'


function Header(){


    return(
        <>
        <div className='divNav'>
            <nav className='nav'>
                <ul className='menu'>

                    <li className='liensNav'>
                        <img src={logo} className='logo' alt='logoTwitch'/>
                    </li>

                    <li className='liensNav'>
                        Top Games
                    </li>

                    <li className='liensNav'>
                        Top Streams
                    </li>

                    <li className='liensNav'>
                        <form className='formSubmit'>
                            <input className='inputRecherche'/>
                            <button type='submit' className='loupe' > <img src={recherche} className='loupeLogo'/> </button>
                        </form>

                    </li>

                </ul>

            </nav>
            <div className='boutonMenu'>
                <img src={menu}/>
            </div>
        </div>
        </>
    )
}

export default Header; 