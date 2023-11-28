import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accoridons.css'
import TransactionList from "./TransactionHistory/TransactionList";
import CryptocurrencyList from "./Сryptocurrency/СryptocurrencyList";

const Accordions = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='accordions'>
            <Accordion className='accordion-item' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    className='accordion-item__title'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>AML</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-item__details'>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    className='accordion-item__title'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Сryptocurrency</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-item__details'>
                    <Typography>
                        <CryptocurrencyList />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    className='accordion-item__title'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Transaction History</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-item__details'>
                    <Typography>
                       <TransactionList />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordions;