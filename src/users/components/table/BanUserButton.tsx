import { Button } from "react-bootstrap"
import {useRecoilState} from "recoil";
import {refreshAtom} from "../../../common/recoil/refreshAtom";

const BanUserButton = (props: {userId: number}) => {

    const [_, setRefresh] = useRecoilState(refreshAtom);

    const handleUserBan = () => {
        const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
        const endpointUrl = `/users/ban/${props.userId}`;
        const url = baseUrl + endpointUrl;

        fetch(url, {
            method : "POST",
            mode: 'cors',
        })
            .then(() => {
                setRefresh(Date.now());
            })
            .catch((error) => console.error(error));
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