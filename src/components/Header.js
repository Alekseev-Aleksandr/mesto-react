import logo from '../images/logo.svg';

function Header(props) {

    return (
        <header className="header">
            <img className="logo" src={logo} alt="Логотип" />
        </header>
    )
}

export default Header