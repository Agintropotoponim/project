import classes from './Feedbacks.module.css'

function Feedbacks() {



    return (
        <div className={classes.flex__container}>
            <h2 className={classes.header2}>
                НАШИ КЛИЕНТЫ ПОД &nbsp;<span className={classes.span}> ВПЕЧАТЛЕНИЯМИ</span>
            </h2>
            <section className={classes.articles__block}>
                <article className={classes.feedback__small}>
                    <div className={classes.articles__block}>
                        <img className={classes.avatar__small} src={"http://localhost:8080/images/andrey.svg"} alt="photo" />
                        <span>Andrey</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione optio fugit asperiores sapiente modi eveniet perferendis veniam laborum iste?</p>
                </article>
                <article className={classes.feedback}>
                    <div className={classes.articles__block}>
                        <img className={classes.avatar} src={"http://localhost:8080/images/stas.svg"} alt="photo" />
                        <span>Stas</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias eos, quasi voluptatibus aliquam recusandae molestias excepturi maiores sint a magni labore tempora facere ipsa.</p>
                </article>

                <article className={classes.feedback__small}>
                    <div className={classes.articles__block}>
                        <img className={classes.avatar__small} src={"http://localhost:8080/images/karolina.svg"} alt="photo" />
                        <span>Karolina</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non delectus necessitatibus nesciunt dolor dolore?</p>
                </article>
            </section>
        </div>
    );
}


export default Feedbacks;