import { NavLink } from 'react-router-dom'
import { businessNavigation } from '@/shared/constants/navigation'

function navLinkClassName(isActive: boolean) {
  return isActive ? 'active' : undefined
}

export function Sidebar() {
  return (
    <div className="menu-container">
      <ul className="menu">
        {businessNavigation.map((item) =>
          item.children ? (
            <li key={item.label}>
              {item.label}
              <ul>
                {item.children.map((child) => (
                  <li key={child.path}>
                    <NavLink to={child.path} className={({ isActive }) => navLinkClassName(isActive)}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.path}>
              <NavLink to={item.path!} className={({ isActive }) => navLinkClassName(isActive)}>
                {item.label}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
