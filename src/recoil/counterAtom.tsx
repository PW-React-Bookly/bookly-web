import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist()
export const counterAtom = atom({
    key: 'counterAtom',
    default: 1,
    effects_UNSTABLE: [persistAtom],
});
