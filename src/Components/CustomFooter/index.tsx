import "./index.css"


const CustomFooter = () =>  {
    return (
        <footer className="footerBottom">
            <div>
                <p>© {new Date().getFullYear()} ExpenseSplit. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default CustomFooter