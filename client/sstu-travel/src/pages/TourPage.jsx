function TourPage({ poster, fetchUrl, ...props }) {


    const [tour, setTour] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setTour(data);
            })
            .catch(error => console.log(error));


    }, []);


    return (
        <div>
            {tour.map((t) => {
                <div>
                    <img>{t.poster}</img>
                    <div>{t.name}</div>
                </div>

            })}
        </div>
    );
}

export default TourPage;