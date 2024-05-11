import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
    
    const { mode, changeMode } = props;

    return (
        <>
            <nav className={`sticky-top navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">NewsUpdate</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/business">Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/general">General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/technology">Technology</NavLink>
                            </li>
                        </ul>
                        
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" onClick={changeMode} type="checkbox" value='abc' role="switch" id="flexSwitchCheckDefault" />
                        </div>

                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={searchHandle} aria-label="Search" />
                            <button className={`btn btn-outline-${mode==='light'?'dark':'light'}`}  type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
