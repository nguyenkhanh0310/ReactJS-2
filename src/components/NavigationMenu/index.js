function NavigationMenu() {
    const handleClick = (e) => {
        console.log(e.target);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleFocus = (e) => {
        e.target.classList.add("input--active");
        console.log(e.target);
    }

    const handleBlur = (e) => {
        console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <>
            <div className="box">
                <div>NavigationMenu</div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <button onClick={handleClick}>Search</button>
                </form>
            </div>
        </>
    )
}

export default NavigationMenu;