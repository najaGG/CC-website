import Navbar from "./Navbar"

function Template (props){
    return(
        <>
            <div className="wrapper">
                <Navbar/>
                
                <div className="content-wrapper pt-3">
                    <section className="content">
                        {props.children}
                    </section>
                </div>
                
            </div>
        </>
    )
}
export default Template;