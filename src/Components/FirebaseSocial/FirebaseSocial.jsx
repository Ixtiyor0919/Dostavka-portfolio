// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from '../../Assets/Icons/google.svg';
import Twitter from '../../Assets/Icons/twitter.svg';
import Facebook from '../../Assets/Icons/facebook.svg';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const googleHandler = async () => {
        // login || singup
    };

    const twitterHandler = async () => {
        // login || singup
    };

    const facebookHandler = async () => {
        // login || singup
    };
    const style = {
        backgroundColor: '#ffffff',
        borderRadius: "10px",
        border: "1px solid grey",
        color: 'grey'
    }
    return (
        <Stack
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={googleHandler}
                sx={style}
            >
                {!matchDownSM && 'Google'}
            </Button>
            <Button
                variant="outlined"
                fullWidth={!matchDownSM}
                startIcon={<img src={Twitter} alt="Twitter" />}
                onClick={twitterHandler}
                sx={style}
            >
                {!matchDownSM && 'Twitter'}
            </Button>
            <Button
                variant="outlined"
                fullWidth={!matchDownSM}
                startIcon={<img src={Facebook} alt="Facebook" />}
                onClick={facebookHandler}
                sx={style}
            >
                {!matchDownSM && 'Facebook'}
            </Button>
        </Stack>
    );
};

export default FirebaseSocial;
