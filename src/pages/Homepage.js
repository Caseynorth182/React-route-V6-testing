
const Homepage = ({ homeData }) => {
    return (
        <div>
            <h1> Homepage PAGE 2</h1>
            <h2>{homeData.name}</h2>
            <p>{homeData.text}!</p>
        </div>
    )
}

export default Homepage;