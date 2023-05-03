import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Skeleton, Stack } from '@mui/material';

// project import
import MainCard from '../MainCard';

// ===============================|| COMPONENT - SKELETON ||=============================== //

const ComponentSkeleton = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const skeletonCard = (
        <MainCard
            img={<Skeleton variant="rectangular" width={210} height={118} />}
            title={<Skeleton sx={{ width: { xs: 120, md: 180 } }} />}
            secondary={<Skeleton animation="wave" variant="circular" width={24} height={24} />}
        >
            {/* <Stack spacing={1}>
                <Skeleton />
                <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
                <Skeleton />
                <Skeleton />
            </Stack> */}
              <Skeleton />
              <Skeleton width="60%" />
        </MainCard>
    );

    return (
        <>
            {isLoading && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={12} md={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={12} md={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={12} md={2}>
                        {skeletonCard}
                    </Grid>
                </Grid>
            )}
            {!isLoading && children}
        </>
    );
};

ComponentSkeleton.propTypes = {
    children: PropTypes.node
};

export default ComponentSkeleton;
