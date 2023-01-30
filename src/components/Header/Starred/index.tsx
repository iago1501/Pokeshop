import { IconButton, Tooltip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from 'react-router-dom';

const Starred = () => {
    const { push } = useHistory();

    return (
        <div>
            <Tooltip title="Starred">
                <IconButton
                    onClick={() => push(`/starred`)}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <StarIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default Starred;
