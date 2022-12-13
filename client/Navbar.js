const Navbar = () => {

    
       const navbarHeader = "Navbar";
    return ( 

        <nav className="navbar">
            <h1>{navbarHeader}</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/workouts">Workouts</a>

            </div>
        </nav>
     );
}
 
export default Navbar;