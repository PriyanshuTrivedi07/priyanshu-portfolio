import React, { useState, useEffect } from 'react'
import { UserInfo, RepoCard, Container } from "../index"
import { Helmet } from 'react-helmet'
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

      <Helmet>
        <title>All Repositories | Priyanshu Trivedi</title>
        <meta name="description" content="Browse all of my GitHub repositories and explore my work. Here you can find details about each project I've developed" />
        <meta name="keywords" content="GitHub repositories, front-end developer, React projects, JavaScript, open source, priyanshu trivedi, priyanshutrivedi, priyanshutrivedi.vercel.app priyanshu-portfolio" />

        <meta property="og:title" content="All Repositories | Priyanshu Trivedi" />
        <meta property="og:description" content="Browse all of my GitHub repositories and explore my work. Here you can find details about each project I've developed" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/118791702?v=4" />
        <meta property="og:url" content="https://priyanshutrivedi.vercel.app/all-repos" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Repositories | Priyanshu Trivedi" />
        <meta name="twitter:description" content="Browse all of my GitHub repositories and explore my work. Here you can find details about each project I've developed" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/118791702?v=4" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://priyanshutrivedi.vercel.app/all-repos" />
      </Helmet>

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