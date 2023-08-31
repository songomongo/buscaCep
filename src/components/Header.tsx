import React from "react";

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <span>Buscador de CEP</span> @SENAI
        </header>

    );
}

export default Header;