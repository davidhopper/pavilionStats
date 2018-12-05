import Navbar from '../components/Navbar'
import PlayerShort from '../components/PlayerShort'
const Index = () => (
  <div>
    <Navbar />
    <h1>Welcome</h1>
    <div>
      <h2>Top Players</h2>
      <ol>
        <li><PlayerShort id={246}/></li>
        <li><PlayerShort id={256}/></li>
        <li><PlayerShort id={775}/></li>
        <li><PlayerShort id={535}/></li>
        <li><PlayerShort id={841}/></li>
        <li><PlayerShort id={787}/></li>
        <li><PlayerShort id={9966}/></li>
        <li><PlayerShort id={838}/></li>
        <li><PlayerShort id={774}/></li>
        <li><PlayerShort id={254}/></li>
        <li><PlayerShort id={3705}/></li>
      </ol>
    </div>
    <div>
      <h2>Factions At A Glance</h2>
    </div>
  </div>
)

export default Index
