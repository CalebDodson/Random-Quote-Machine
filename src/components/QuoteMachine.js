import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import IconButton from '@mui/material/IconButton';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            { props.selectedQuote ? 
            (
                <>
                    <Typography variant="body1" align="center" id="text">
                        "{props.selectedQuote.quote}"
                    </Typography>
                    <Typography variant="body2" align="right" id="author">
                        ~{props.selectedQuote.author}
                    </Typography>
                </>
            ) : null
            }
        </CardContent>
        <CardActions>
            <IconButton id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote} -${props.selectedQuote.author}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button sx={{ color: 'black' }} size="small" onClick={props.assignNewQuoteIndex} id="new-quote">New Quote</Button>
                </Grid>
            </Grid>
        </CardActions>
    </Card>
)

export default QuoteMachine;