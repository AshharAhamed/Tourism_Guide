'use strict';

import React from 'react';
import {render} from 'react-dom';

import NavigationBarContainer from "./navBar";
import PlacesContainer from "./PlacesContainer";
import HotelsContainer from "./HotelsContainer";


render(<NavigationBarContainer/>, document.getElementById('NavigationBar'));
render(<PlacesContainer/>, document.getElementById('Places'));
render(<HotelsContainer/>, document.getElementById('Hotels'));