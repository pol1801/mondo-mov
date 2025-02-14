import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const Social = () => {
    return (
        <div>
            <Link href='https://facebook.com' target='_blank'>
                <FacebookIcon style={{margin: '0 15px'}}/>
            </Link>
            <Link href='https://instagram.com' target='_blank'>
                <InstagramIcon style={{margin: '0 15px'}}/>
            </Link>
            <Link href='https://x.com' target='_blank'>
                <XIcon style={{margin: '0 15px'}}/>
            </Link>
            <Link href='https://linkedin.com' target='_blank'>
                <LinkedInIcon style={{margin: '0 15px'}}/>
            </Link>
        </div>
    );
};

export default Social;