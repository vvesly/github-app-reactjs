'use strict'
import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'


const AppContent = ({ userinfo, repos, starred }) => (
    <div className='app' >
        <Search />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions  />}

        {!!repos.length && <Repos
            className="repos"
            title="REPOSITORIOS"
            repos={repos}
        />
        }
        {!!starred.length && <Repos
            className="starred"
            title="FAVORITOS"
            repos={starred}
        />
        }
    </div>
)

AppContent.propType = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent