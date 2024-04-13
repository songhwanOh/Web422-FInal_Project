import { favouritesAtom } from "@/store"
import { useAtom } from "jotai"
import { Col, Row, Card } from "react-bootstrap";
import ArtworkCard from "@/components/ArtworkCard";

export default function Favourites() {
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    
    if(!favouritesList) return null;

        return (
            <>
                {favouritesList.length > 0 ?
                    <Row className="gy-4">{favouritesList?.map(objID => (
                        <Col lg={3} key={objID}><ArtworkCard objectID={objID}/></Col>
                    ))}</Row>
                    :
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <h4>Nothing Here</h4>Try adding some new artwork to the list.
                            </Card.Text>
                        </Card.Body>
                    </Card>}
            </>
        );

}