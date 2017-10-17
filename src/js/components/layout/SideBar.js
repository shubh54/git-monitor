import React, {PropTypes as T} from 'react'
import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

const SidebarMenu = ({groups, expanded, collapsed}) => (
  <div className='SidebarMenu'>
    <Nav
      groups={groups}
      expandedStateText={expanded}
      collapsedStateText={collapsed}/>
  </div>
)

SidebarMenu.props = {
  groups: INavLinkGroup,
  expanded: T.string,
  collapsed: T.string
}

SidebarMenu.defaultProps = {
  groups: [
    {
      links: [
        {
          name: 'Repos',
          url: '/home'
        }
      ]
    }
  ],
  expanded: 'expanded',
  collapsed: 'collapsed'
}

export default SidebarMenu