
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Card from "../components/Card.jsx"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div className="warpper">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}