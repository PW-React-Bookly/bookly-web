import { Button } from "react-bootstrap"

const BanUserButton = (props: {userId: number}) => {

    const handleUserBan = () => {
        throw new Error(`Not implemented, userId: ${props.userId}`);
    }

    return (
        <Button
            onClick={handleUserBan}
            variant='outline-danger'
        >
            Ban
        </Button>
    );
}

export default BanUserButton;