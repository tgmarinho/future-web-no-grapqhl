import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Menu } from './Menu';
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../core/reduxCore/store';

export const MenuContainer = compose(withRouter)(
  connect(mapStateToProps, mapDispatchToProps)(Menu)
);
