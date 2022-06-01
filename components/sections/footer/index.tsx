import Image from "next/image";
import Link from "next/link";
import { FooterContainer, FooterContent, FooterLink, ParagraphFooter,  } from "./styled";

const Footer = () =>{
    return(
        <FooterContainer>
            <ParagraphFooter>Created by JVC</ParagraphFooter>
            <FooterContent>   
                
                <FooterLink href="https://www.instagram.com/o_jvc/" target="_blank"><Image src='/images/instagram-logo.png' height={20} width={20}></Image></FooterLink>
                <FooterLink href="https://github.com/joaov13" target="_blank"><Image src='/images/git-hub-logo.png' height={20} width={20}></Image></FooterLink>
                <FooterLink href="https://twitter.com/justJVC" target="_blank"><Image src='/images/twitter-logo.png' height={20} width={20}></Image></FooterLink>
            </FooterContent>
            <ParagraphFooter className="copyright">Copyright <span>&#169;</span> 2022, All Rights Reserved</ParagraphFooter>
            
        </FooterContainer>
    )
}

export default Footer;