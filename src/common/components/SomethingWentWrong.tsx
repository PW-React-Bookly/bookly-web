const SomethingWentWrong = (props: {error: string}) => {
    return (
        <div>
            <div>
                Something Went Wrong!
            </div>
            <div>
                Error: {props.error}
            </div>
        </div>
    );
}

export default SomethingWentWrong;