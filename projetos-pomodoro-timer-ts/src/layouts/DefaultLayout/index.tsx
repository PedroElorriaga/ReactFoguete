import { Outlet } from "react-router-dom";
import Header from "../../components/Header/index";

import { LayoutContanier } from "./styles";

export default function DefaultLayout() {
    return (
        <LayoutContanier>
            <Header />
            <Outlet />
        </LayoutContanier>
    )
}