import React from 'react';

const Footer = (props) => {

    const year = (new Date()).getFullYear();

    return (
        <footer className="py-5 bg-dark mt-4">
            <div className="container">
                <p className="m-0 text-center text-white">
                    Copyright &copy;{' '}
                    <a href="https://github.com/saulobr88" target="_blank" rel="noopener noreferrer">
                        Saulo Gomes
                    </a> 
                    {' '}{year}
                </p>
            </div>
        </footer>
    );
}

export default Footer;