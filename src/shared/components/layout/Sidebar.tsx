import { NavLink } from 'react-router-dom'
import { businessNavigation } from '../../constants/navigation'

export function Sidebar() {
  return (
    <div className="menu-container">
      <ul className="menu">
        {businessNavigation.map((item) =>
          item.path ? (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {item.label}
              </NavLink>
            </li>
          ) : (
            <li key={item.label}>
              {item.label}
              <ul>
                {item.children?.map((child) => (
                  <li key={child.path}>
                    <NavLink to={child.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
