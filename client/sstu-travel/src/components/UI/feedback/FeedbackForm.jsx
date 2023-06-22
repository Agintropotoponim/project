import classes from './FeedbackForm.module.css'


function FeedbackForm() {
    return (
        <div>
            <h2 className={classes.header2}>
                <span>МЫ ВСЕГДА ГОТОВЫ ВАМ ПОМОЧЬ В</span><p className={classes.p}> ВЫБОРЕ</p>
            </h2>
            <section className={classes.form__block}>
                <form className={classes.height}>
                    <input placeholder='Имя' className={classes.input} type="text" />
                    <input placeholder='Email' className={classes.input} type="text" />
                    <input placeholder='Телефон' className={classes.input} type="text" />
                    <input placeholder='Сообщение' className={classes.input} type="text" />
                    <p className={classes.confindational}>
                        Предоставляя свою информацию, вы соглашаетесь с политикой конфиденциальности.
                    </p>
                    <div className={classes.confirm}>
                        Отправить
                    </div>
                </form>
            </section>
        </div>
    );
}

export default FeedbackForm;