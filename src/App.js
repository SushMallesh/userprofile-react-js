import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'SushMallesh',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'SushMallesh',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'SushMallesh',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'SushMallesh',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User Details List</h1>
    <ul>
      {userDetailsList.map(eachUser => (
        <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
