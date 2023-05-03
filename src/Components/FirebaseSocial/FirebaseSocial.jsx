// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from '../../Assets/Icons/google.svg';
import Github from '../../Assets/Icons/Github.svg';
import Facebook from '../../Assets/Icons/facebook.svg';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, facebookAuthProvider, googleAuthProvider, githubAuthProvider } from '../../Api/Services/Firebase';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const googleHandler = async () => {
        // login || singup
        signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // setToken(token)
            const response = {
                name: result.user.displayName,
                email: result.user.email,
                phoneNumber: result.user.phoneNumber,
                photoURL: result.user.photoURL
            }
          console.log(token)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const githubHandler = async () => {
        // login || singup
        signInWithPopup(auth, githubAuthProvider)
        .then((result) => {
          console.log(result.user)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const facebookHandler = async () => {
        // login || singup
        signInWithPopup(auth, facebookAuthProvider)
        .then((result) => {
          console.log(result.user)
        })
        .catch((error) => {
          console.log(error);
        });
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
                startIcon={<img src={Github} alt="Github" width="20" height="20" />}
                onClick={githubHandler}
                sx={style}
            >
                {!matchDownSM && 'GitHub'}
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