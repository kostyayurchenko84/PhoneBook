import imgLogo from '@/assets/logo.png';
import classes from './main-header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
/**/
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={imgLogo} alt="A Beloil phonebook" priority/>
                </Link>
            </header>
        </>
    );
}