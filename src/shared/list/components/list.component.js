import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';

import { withStyles } from '@material-ui/core';
import { SwipeableListItem, SwipeableList } from '@sandstreamdev/react-swipeable-list';

import { ICON_MAP } from '../constants';
import { listStyles } from './list.styles';
import { ListFilter } from './list-fitler.component';

export const List = withStyles(listStyles)(({ classes, data, swipeRight, swipeLeft, ...props }) => {
    return (
        <>
            <ListFilter data={ props.filters }/>
            <MaterialList style={{ padding: 8 }}>
                <SwipeableList 
                    threshold={ .25 } 
                    scrollStartThreshold={ 1 }
                >
                    {
                        data && data.map((element, i) => (
                            <SwipeableListItem
                                key={ i }
                                swipeLeft={{
                                    content: (
                                        <div className={ classes.swipeLeft }>
                                            { swipeLeft.content }
                                        </div>
                                    ),
                                    action: () => swipeLeft.action(element),
                                }}
                                swipeRight={{
                                    content: (
                                        <div className={ classes.swipeRight }>
                                            { swipeRight.content }
                                        </div>
                                    ),
                                    action: () => swipeRight.action(element),
                                }}
                            >
                                <div onClick={ props.onClick } 
                                     style={{ background: '#fff', width: '100%', display: 'inline-block', border: '1px solid #EDEDED', marginBottom: 8, borderRadius: 8 }}>
                                    <MaterialListItem style={{ paddingBottom: 0 }}>
                                        <MaterialListItemText
                                            primary={ <strong>{element[props.title].toUpperCase()}</strong> }
                                            secondary={ element[props.subtitle] }
                                        />
                                        {
                                            element.isFavorite &&
                                                <MaterialListItemIcon style={{ minWidth: 10 }}>
                                                    <StarIcon color="primary"/>
                                                </MaterialListItemIcon>
                                        }
                                    </MaterialListItem>
                                    <MaterialListItem style={{ paddingTop: 0 }}>
                                        <MaterialListItemIcon style={{ minWidth: 35, color: '#006666' }}>
                                            {
                                                ICON_MAP[element[props.icon]] || ICON_MAP['default']
                                            }
                                        </MaterialListItemIcon>
                                        <MaterialListItemText 
                                            inset 
                                            primary={ 
                                                element[props.iconLabel].toUpperCase()
                                            } 
                                            style={{ paddingLeft: 0 }} 
                                        />
                                        <MaterialListItemText 
                                            inset 
                                            primary={
                                                element[props.firstDate].dateFormat() + (props.lastDate ? ` - ${ element[props.lastDate].dateFormat() }` : '')
                                            }
                                            style={{ textAlign: 'right' }} 
                                        />
                                    </MaterialListItem>
                                </div>
                            </SwipeableListItem>
                        ))
                    }
                </SwipeableList>     
            </MaterialList>
        </>
    );
});