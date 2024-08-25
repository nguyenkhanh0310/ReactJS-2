function Content(props) {
    const { text, number, active } = props;
    // console.log(props);
    // console.log(props.text);

    // Khong cho phep dung if else cac thu vao trong return, neu muon dung thi dung ben tren return
    return (
        <>
            <div className={"box " + (active ? "box--active" : "")}>
                {text} - {number}
            </div>
        </>
    );
}

export default Content;