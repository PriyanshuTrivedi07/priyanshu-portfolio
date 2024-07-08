import React, { useState, useEffect } from 'react'
import { UserInfo, RepoCard, Container } from "../index"

function AllRepos() {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [username, setUsername] = useState('PriyanshuTrivedi07')
  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return response.json();
  }
  const getRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    return response.json();
  }


  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userInfo = await getUserData()
        setUserData(userInfo)
        const repos = await getRepos()
        setRepos(repos)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGithubData()
  }, [username])






  return (
    <div className="py-8 my-8">
      <div className='max-w-[1280px] mx-auto px-4'>
        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-1/3 md:min-w-[296px] md:max-w-[296px]">
            {userData && <UserInfo user={userData} />}
          </div>

          <div className="w-full md:min-w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default AllRepos