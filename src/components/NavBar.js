import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles =makeStyles({
    components:{
        background: '#F0A500'
    }
})

const NavBar = () =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.components} position="static">
           <Toolbar>
             <CollectionsIcon />
             <Typography style={{marginLeft:10}}>Image-Finder</Typography>
           </Toolbar>
        </AppBar>
        
    );
}
 
export default NavBar;