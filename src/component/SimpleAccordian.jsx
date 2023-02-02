import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';
import Description from './Description';
import "../style.css"

export default function SimpleAccordion(props) {
  console.log(props.list[1].name)

  return (
    <div className='simpleAccordion'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Card key = {props.list[0]} users={props.list[1]}/>
        </AccordionSummary>
        <AccordionDetails>
            <Description key = {props.list[0]} users={props.list[1]}/>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}