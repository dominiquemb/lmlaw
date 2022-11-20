import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Roger Sepulveda ',
    description: `Founder & Chief Executive Officer`,
  }, 
  {
    label: 'Joshua Sepulveda',
    description: `General Manager`,
  },
  {
    label: 'Aaron Thompson ',
    description: 'Director Of Logistics ',
  },
  {
    label: 'Leticia Gonzalez',
    description: `Director Of People Operations`,
  },
  {
    label: 'Jordan Kincaid ',
    description: 'Director Of Marketing',
  },
  {
    label: 'Ashley leery',
    description: `Chief Marketing Officer`,
  },
 {
    label: 'Ben Martinez',
    description: `Chief Technology Officer`,
  },  {
    label: 'Melody Ryna',
    description: `Chief Financial Officer `,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: "4vw",
          pl: 2,
          bgcolor: 'background.default',
          fontSize:"1vw"
        }}
      >
        <Typography style={{fontSize:"2vw"}}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{  width: '100%', p: 2  , backgroundColor:"#eeeeee",fontSize:"2vw",height:"8vw"}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}

          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
