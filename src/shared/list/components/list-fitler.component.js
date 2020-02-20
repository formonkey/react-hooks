import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import TuneIcon from '@material-ui/icons/Tune';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import SortAscendingIcon from 'mdi-react/SortAscendingIcon';
import SortDescendingIcon from 'mdi-react/SortDescendingIcon';

export const ListFilter = ({ data }) => {
    const [ showFilter, toggleFilter ] = useState(false);
    const [ isFavorite, toggleFavorite ] = useState(false);
    const [ isSortAscending, toggleSort ] = useState(false);
    
    return (
        <Paper elevation={0} style={{ padding: '5px 17px', borderBottom: '1px solid #EDEDED', borderRadius: 0 }}>
            <MaterialList style={{ display: 'inline-flex', width: '100%'}}>
                <div style={{ width: '100%' }}>
                    <MaterialListItemIcon style={{ minWidth: 20, paddingRight: 20 }} onClick={ () => toggleFilter(!showFilter) }>
                        <TuneIcon color="primary"/>
                    </MaterialListItemIcon>
                    <Chip 
                        label={data.filters.find((element) => element.selected).label} 
                        color="primary" 
                        variant="outlined" 
                        style={{ marginTop: '-15px', margin: '-15px 3px 0', maxWidth: 100 }}
                    />

                    <Chip
                        label={data.orders.find((element) => element.selected).label}
                        color="primary"
                        variant="outlined"
                        style={{ marginTop: '-15px', margin: '-15px 3px 0', maxWidth: 100 }}
                    />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <MaterialListItemIcon
                        style={{ color: '#006666', minWidth: 20, paddingRight: 10 }}
                        onClick={ () => toggleSort(!isSortAscending)}
                    >
                        {
                            isSortAscending ? <SortAscendingIcon /> : <SortDescendingIcon />
                        }
                    </MaterialListItemIcon>
                    <MaterialListItemIcon onClick={ () => toggleFavorite(!isFavorite)}  style={{ minWidth: 20 }}>
                        {
                            isFavorite ? <StarIcon color="primary"/> : <StarBorderOutlinedIcon color="primary"/>
                        }
                    </MaterialListItemIcon>
                </div>
            </MaterialList>
            {
                showFilter && (
                    <Paper elevation={0} style={{ marginTop: 10 }}>
                        <Grid container spacing={ 0 }>
                            <Grid item xs={ 6 } md={ 6 }>
                                <strong style={{ textTransform: 'uppercase', fontSize: 14 }}>Filtrar</strong>
                                <MaterialList>
                                    {
                                        data.filters.map((element, i) => (
                                            <MaterialListItem key={ i } style={{ padding: '0 10px' }} selected={ element.selected }>
                                                <MaterialListItemText primary={ element.label } onClick={ () => console.log(element.key) }/>
                                            </MaterialListItem>
                                        ))
                                    }
                                </MaterialList>
                            </Grid>
                            <Grid item xs={ 6 } md={ 6 }>
                                <strong style={{ textTransform: 'uppercase', fontSize: 14  }}>Ordenar por</strong>
                                <MaterialList>
                                    {
                                        data.orders.map((element, i) => (
                                            <MaterialListItem key={ i } style={{ padding: '0 10px' }} selected={ element.selected }>
                                                <MaterialListItemText primary={ element.label } onClick={ () => console.log(element.key) }/>
                                            </MaterialListItem>
                                        ))
                                    }
                                </MaterialList>
                            </Grid>
                        </Grid>
                    </Paper>
                )
            }
        </Paper>
    );
};