
function Button ({type, text}){
    return (
        <section className="button__wrapper">
            <button className={`button button--${type}`}>{text}</button>
        </section>
    )
}

export default Button
