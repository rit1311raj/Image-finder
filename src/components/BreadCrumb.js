
import { Box, makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
component:{
    background: '#F6F6F6',
    '& > *' :{
       margin:theme.spacing(1)
    }
}
}))

const BreadCrumb = ({onTextChange, onCountChange}) =>{
    const classes =useStyle();
    return (
        
        <Box className={classes.component}>
        <TextField
            label="Search Images"
            onChange={(e)=>onTextChange(e.target.value)}
        />
        <TextField
            label="Number of Images"
            onChange={(e)=>onCountChange(e.target.value)}
        />

        </Box>
    )
}
export default BreadCrumb;