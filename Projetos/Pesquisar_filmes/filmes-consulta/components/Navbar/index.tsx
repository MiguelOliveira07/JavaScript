export default function Navbar(){
    return(
        <header className="top">
        <h1 className="active">Movies site</h1>
        <div className="search-container">
            <form role="search" id="formulario">
                {/* <input type="search" name="q" id="query" placeholder="Pesquisar"> */}
            </form>
        </div>
    </header>
    )
}