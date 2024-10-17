import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from '@mui/material';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ children, title }: SectionProps) => {
  const id = title.toLowerCase().replace(' ', '-');
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
