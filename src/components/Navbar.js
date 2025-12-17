import {Link} from 'react-router-dom';
const Navbar=()=>{
    return<>
    
    <div className='bg-dark text-white w-100 p-3 d-flex justify-content-between align-items-center'>
    <div>
    <img  src="/image files/AK Favicon.png" alt="Error" width="50px"/>
    <h1> GAMES</h1>
    </div>
    <form class="d-flex items-align-center">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button class="btn btn-danger" type="submit">Search</button>
</form>
        <div>
        <Link className='list-unstyled p-4' to="/"><button className='btn btn-danger btn-sm'>FORM</button></Link>
        <Link className='list-unstyled p-4' to="/Admin"><button className='btn btn-danger btn-sm'> ADMIN</button></Link>
        <Link className='list-unstyled p-4 ' to="/Home"><button className='btn btn-danger btn-sm'> HOME</button></Link>
        <Link className='list-unstyled p-4' to="/Library"><button className='btn btn-danger btn-sm'> LIBRARY</button></Link>
        <Link className='list-unstyled p-4' to="/About"><button className='btn btn-danger btn-sm'> ABOUT</button></Link>
        </div>
    </div>
    </>;
}
export default Navbar;