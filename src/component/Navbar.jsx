import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const [loginStatus, setLoginStatus] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const menus = [ 'signup', 'login']
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token) {
            setLoginStatus(false)
        } else {
            setLoginStatus(true)
        }
    }, [loginStatus])

    const handleLogout = () => {
        localStorage.clear()
        setLoginStatus(false)
        navigate('/')
    }

    const menuHandler = () => {
        setOpen(true)
    }

    const handlePageChange = (menu) =>{
        navigate('/'+menu)
    }

    return (
        <nav className="nav-main">
            <div className="nav-1">
                <Link className="navbar-brand" to={'/'}>
                    <small className="small-1">SHOP</small><small className="small-2 text-dark">LANE</small>
                </Link>

                {loginStatus ? (
                    <Link
                    className="btn btn-danger"
                    onClick={handleLogout}> Logout </Link>
                ) : (
                    <ul className="nav-dropdowns">
                    <li
                     className="nav-dropdown" 
                     onClick={menuHandler}
                     style={{cursor:"pointer"}}
                    >Login or Sign Up</li>
                    { 
                        open && (menus.map((menu) => (
                            <li className="nav-dropdown" onClick={() => setOpen(false)}>
                               <a onClick={() => handlePageChange(menu)}>{menu}</a>
                                </li>
                        )))
                    }
                    
                </ul>
                )
                }
                
                
                
            </div>
            <hr />
            <div className="nav-2">
                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/'}>All</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/electronics'}>Electronics</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/jewelery'}>Jewelery</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={"/men's clothing"}>Men's Clothing</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={"/women's clothing"}>Women's Clothing</Link>
                </li>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar