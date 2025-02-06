import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const footerCardData = [
    {
        title: 'avo',
        content: 'Far far away, behind the word mountains, far from the countries.',
        listItems: ['ad'],
    },
    {
        title: 'Community',
        listItems: ['Projects', 'Team', 'Reviews', 'FAQs'],
    },
    {
        title: 'About Us',
        listItems: ['Our Story', 'Meet the team', 'Careers'],
    },
    {
        title: 'Company',
        listItems: ['About Us', 'Press', 'Contact', 'Careers'],
    },
    {
        title: 'Have a Questions?',
        listItems: [
            '203 Fake St. Mountain View, San Francisco, California, USA',
            '+2 392 3929 210',
            'info@yourdomain.com',
        ],
    },
];

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footermain">
            {footerCardData.map((item,index)=>(
                <div className="footercard" key={index}> 
                    {item.title && <h3>{item.title}</h3>}
                    {item.content && <p>{item.content}</p>}
                    {item.listItems && ( 
                        <ul>
                            {item.listItems.map((list,lastindex)=>(
                                <li key={lastindex}>{list}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            </div>

            <p>Copyright ©2025 All rights reserved | This template is made with <span><FontAwesomeIcon icon={faHeart} /></span> by <span style={{color:'#D1002C'}}> Colorlib</span></p>
        </div>
    );
};

export default Footer;